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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { generateCoupon, createManualCoupon } from "@/lib/actions/coupon.actions";
import { Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AiCouponSchema = z.object({
  duration: z.enum(["15", "30"]),
});
type AiCouponFormValues = z.infer<typeof AiCouponSchema>;

const ManualCouponSchema = z.object({
  code: z.string().min(3, "Code must be at least 3 characters long."),
  duration: z.enum(["15", "30"]),
});
type ManualCouponFormValues = z.infer<typeof ManualCouponSchema>;


function AiCouponForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<AiCouponFormValues>({
    resolver: zodResolver(AiCouponSchema),
    defaultValues: { duration: "15" },
  });

  const onSubmit = (data: AiCouponFormValues) => {
    startTransition(async () => {
      const durationDays = parseInt(data.duration, 10) as 15 | 30;
      const result = await generateCoupon(durationDays);
      if (result.success) {
        toast({ title: "Success", description: result.success });
        form.reset();
      } else if (result.error) {
        toast({ variant: "destructive", title: "Error", description: result.error });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coupon Duration (Days)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
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
  );
}

function ManualCouponForm() {
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const form = useForm<ManualCouponFormValues>({
        resolver: zodResolver(ManualCouponSchema),
        defaultValues: { code: "", duration: "15" },
    });

    const onSubmit = (data: ManualCouponFormValues) => {
        startTransition(async () => {
            const result = await createManualCoupon(data);
            if (result.success) {
                toast({ title: "Success", description: result.success });
                form.reset();
            } else if (result.error) {
                toast({ variant: "destructive", title: "Error", description: result.error });
            }
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Coupon Code</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. MANUALCODE2024" {...field} disabled={isPending} />
                            </FormControl>
                             <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Coupon Duration (Days)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
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
                            Creating...
                        </>
                    ) : (
                        "Create Coupon"
                    )}
                </Button>
            </form>
        </Form>
    );
}


export default function CouponGenerator() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Coupon</CardTitle>
        <CardDescription>
          Create a new coupon manually or generate one using AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ai">Generate with AI</TabsTrigger>
            <TabsTrigger value="manual">Create Manually</TabsTrigger>
          </TabsList>
          <TabsContent value="ai" className="pt-4">
            <AiCouponForm />
          </TabsContent>
          <TabsContent value="manual" className="pt-4">
            <ManualCouponForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
