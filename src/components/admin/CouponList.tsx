
"use client";

import { useEffect, useState, useTransition } from 'react';
import { collection, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Trash2, Loader2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { deleteCoupon, updateCouponStatus } from '@/lib/actions/coupon.actions';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

interface Coupon {
  id: string;
  code: string;
  durationDays: number;
  isActive: boolean;
  createdAt: Date | null;
}

function StatusSwitch({ coupon }: { coupon: Coupon }) {
    const [isPending, startTransition] = useTransition();

    const handleStatusChange = (newStatus: boolean) => {
        startTransition(async () => {
            await updateCouponStatus(coupon.id, newStatus);
        });
    }

    return (
        <div className="flex items-center gap-2">
            {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
            <Switch
                checked={coupon.isActive}
                onCheckedChange={handleStatusChange}
                disabled={isPending}
                aria-label={`Toggle status for coupon ${coupon.code}`}
            />
        </div>
    )
}

function DeleteButton({ couponId }: { couponId: string }) {
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const { language } = useLanguage();
    const t = translations[language].adminDashboard.couponList;

    const handleDelete = () => {
        startTransition(async () => {
            const result = await deleteCoupon(couponId);
            if (result.success) {
                toast({ title: 'Success', description: result.success });
            } else {
                toast({ variant: 'destructive', title: 'Error', description: result.error });
            }
        });
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" disabled={isPending}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.deleteDialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.deleteDialogDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
                {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> {t.deleting}</> : t.delete}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
}

export default function CouponList() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language].adminDashboard.couponList;

  useEffect(() => {
    const q = query(collection(db, 'coupons'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const couponsData: Coupon[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          code: data.code,
          durationDays: data.durationDays,
          isActive: data.isActive,
          createdAt: data.createdAt ? (data.createdAt as Timestamp).toDate() : null,
        };
      });
      setCoupons(couponsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>
          {t.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.codeHeader}</TableHead>
              <TableHead>{t.durationHeader}</TableHead>
              <TableHead>{t.createdHeader}</TableHead>
              <TableHead>{t.statusHeader}</TableHead>
              <TableHead className="text-right">{t.actionsHeader}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
                Array.from({length: 3}).map((_, i) => (
                    <TableRow key={i}>
                        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-5 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                        <TableCell><Skeleton className="h-5 w-20" /></TableCell>
                        <TableCell className="text-right"><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                    </TableRow>
                ))
            ) : coupons.length > 0 ? (
              coupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell className="font-mono">{coupon.code}</TableCell>
                  <TableCell>{coupon.durationDays} days</TableCell>
                  <TableCell>
                    {coupon.createdAt?.toLocaleDateString() || 'N/A'}
                  </TableCell>
                  <TableCell>
                    <Badge variant={coupon.isActive ? 'default' : 'secondary'} className={coupon.isActive ? 'bg-green-500/20 text-green-700 border-green-500/30' : ''}>
                      {coupon.isActive ? t.statusActive : t.statusInactive}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex justify-end items-center gap-2">
                    <StatusSwitch coupon={coupon} />
                    <DeleteButton couponId={coupon.id} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  {t.noCoupons}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
