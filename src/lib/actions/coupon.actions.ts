'use server';

import { generateUniqueCouponCode } from '@/ai/flows/generate-unique-coupon-codes';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function validateCoupon(formData: FormData) {
  const couponCode = formData.get('coupon') as string;
  if (!couponCode) {
    return { error: 'Coupon code cannot be empty.' };
  }

  try {
    const couponsRef = collection(db, 'coupons');
    const q = query(
      couponsRef,
      where('code', '==', couponCode.trim()),
      where('isActive', '==', true)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { error: 'Invalid or expired coupon code.' };
    }

    const couponDoc = querySnapshot.docs[0];
    const couponData = couponDoc.data();

    const now = new Date();
    const createdAt = couponData.createdAt.toDate();
    const durationDays = couponData.durationDays;
    const expiryDate = new Date(createdAt);
    expiryDate.setDate(expiryDate.getDate() + durationDays);

    if (now > expiryDate) {
      // Optional: Update status in DB if expired
      await updateDoc(doc(db, 'coupons', couponDoc.id), { isActive: false });
      return { error: 'This coupon has expired.' };
    }

  } catch (error) {
    console.error('Error validating coupon:', error);
    return { error: 'An unexpected error occurred. Please try again.' };
  }

  redirect('/class/special');
}


export async function generateCoupon(durationDays: 15 | 30) {
  try {
    const aiResult = await generateUniqueCouponCode({ durationDays });
    const newCouponCode = aiResult.couponCode;

    await addDoc(collection(db, 'coupons'), {
      code: newCouponCode,
      durationDays: durationDays,
      isActive: true,
      createdAt: serverTimestamp(),
    });

    revalidatePath('/admin/dashboard');
    return { success: `Coupon "${newCouponCode}" created successfully.` };
  } catch (error) {
    console.error('Error generating coupon:', error);
    return { error: 'Failed to generate coupon.' };
  }
}

export async function updateCouponStatus(id: string, isActive: boolean) {
  try {
    const couponRef = doc(db, 'coupons', id);
    await updateDoc(couponRef, { isActive });
    revalidatePath('/admin/dashboard');
    return { success: 'Coupon status updated.' };
  } catch (error) {
    console.error('Error updating coupon status:', error);
    return { error: 'Failed to update coupon status.' };
  }
}

export async function deleteCoupon(id: string) {
  try {
    await deleteDoc(doc(db, 'coupons', id));
    revalidatePath('/admin/dashboard');
    return { success: 'Coupon deleted.' };
  } catch (error) {
    console.error('Error deleting coupon:', error);
    return { error: 'Failed to delete coupon.' };
  }
}
