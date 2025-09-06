"use client";

import { useState, useTransition } from "react";
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
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { generateCoupon } from "@/lib/actions/coupon.actions";
import { Loader2 } from "lucide-react";

export default function CouponGenerator() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { register, handleSubmit, setValue, watch } = useForm<{ duration: "15" | "30" }>({
    defaultValues: { duration: "15" },
  });
  const duration = watch("duration");

  const onSubmit = () => {
    startTransition(async () => {
      const durationDays = parseInt(duration, 10) as 15 | 30;
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
  
  // Registering the field for react-hook-form
  React.useEffect(() => {
    register('duration');
  }, [register]);


  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Coupon</CardTitle>
        <CardDescription>
          Create a new unique coupon code using AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="duration">Coupon Duration (Days)</Label>
            <Select
              value={duration}
              onValueChange={(value: "15" | "30") => setValue("duration", value)}
            >
              <SelectTrigger id="duration">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 Days</SelectItem>
                <SelectItem value="30">30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
      </CardContent>
    </Card>
  );
}
