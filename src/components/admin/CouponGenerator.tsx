"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { generateCoupon } from "@/lib/actions/coupon.actions";
import { Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CouponFormSchema = z.object({
  duration: z.enum(["15", "30"]),
});

type CouponFormValues = z.infer<typeof CouponFormSchema>;

export default function CouponGenerator() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<CouponFormValues>({
    resolver: zodResolver(CouponFormSchema),
    defaultValues: { duration: "15" },
  });

  const onSubmit = (data: CouponFormValues) => {
    startTransition(async () => {
      const durationDays = parseInt(data.duration, 10) as 15 | 30;
      const result = await generateCoupon(durationDays);
      if (result.success) {
        toast({
          title: "Success",
          description: result.success,
        });
      } else if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Coupon</CardTitle>
        <CardDescription>
          Create a new unique coupon code using AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coupon Duration (Days)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="15">15 Days</SelectItem>
                      <SelectItem value="30">30 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate with AI"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
