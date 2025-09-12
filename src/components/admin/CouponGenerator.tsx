
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
import { useToast } from "@/hooks/use-toast";
import { createManualCoupon } from "@/lib/actions/coupon.actions";
import { Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

const ManualCouponSchema = z.object({
  code: z.string().min(3, "Code must be at least 3 characters long."),
  duration: z.enum(["15", "30"]),
  videoSourceType: z.enum(['upload', 'youtube']),
  videoFile: z.any().optional(),
  youtubeLink: z.string().optional(),
}).refine(data => {
  if (data.videoSourceType === 'youtube') {
    return !!data.youtubeLink && z.string().url().safeParse(data.youtubeLink).success;
  }
  return true;
}, {
  message: "A valid YouTube URL is required.",
  path: ["youtubeLink"],
}).refine(data => {
    if (data.videoSourceType === 'upload') {
        return data.videoFile instanceof FileList && data.videoFile.length > 0;
    }
    return true;
}, {
    message: "A video file is required for upload.",
    path: ["videoFile"],
});

type ManualCouponFormValues = z.infer<typeof ManualCouponSchema>;


export default function CouponGenerator() {
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const { language } = useLanguage();
    const t = translations[language].adminDashboard.couponGenerator;

    const form = useForm<ManualCouponFormValues>({
        resolver: zodResolver(ManualCouponSchema),
        defaultValues: { 
            code: "", 
            duration: "15",
            videoSourceType: 'upload',
            youtubeLink: '',
        },
    });

    const videoSourceType = form.watch('videoSourceType');

    const onSubmit = (data: ManualCouponFormValues) => {
        startTransition(async () => {
            const formData = new FormData();
            formData.append('code', data.code);
            formData.append('duration', data.duration);
            formData.append('videoSourceType', data.videoSourceType);
            if (data.videoSourceType === 'upload' && data.videoFile) {
              formData.append('videoFile', data.videoFile[0]);
            } else if (data.videoSourceType === 'youtube' && data.youtubeLink) {
              formData.append('youtubeLink', data.youtubeLink);
            }

            const result = await createManualCoupon(formData);
            
            if (result.success) {
                toast({ title: t.createTitle, description: result.success });
                form.reset();
            } else if (result.error) {
                toast({ variant: "destructive", title: "Error", description: result.error });
            }
        });
    };

    return (
      <Card>
        <CardHeader>
          <CardTitle>{t.createTitle}</CardTitle>
          <CardDescription>
            {t.createDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                      control={form.control}
                      name="code"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>{t.codeLabel}</FormLabel>
                              <FormControl>
                                  <Input placeholder={t.codePlaceholder} {...field} disabled={isPending} />
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
                          <FormLabel>{t.durationLabel}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                              <FormControl>
                              <SelectTrigger>
                                  <SelectValue placeholder={t.durationPlaceholder} />
                              </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                              <SelectItem value="15">{t.duration15}</SelectItem>
                              <SelectItem value="30">{t.duration30}</SelectItem>
                              </SelectContent>
                          </Select>
                          </FormItem>
                      )}
                  />

                  <FormField
                    control={form.control}
                    name="videoSourceType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>{t.videoSourceLabel}</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                            disabled={isPending}
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="upload" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {t.uploadVideo}
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="youtube" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {t.youtubeLink}
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {videoSourceType === 'upload' && (
                    <FormField
                      control={form.control}
                      name="videoFile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.videoFileLabel}</FormLabel>
                          <FormControl>
                            <Input 
                              type="file" 
                              accept="video/*" 
                              disabled={isPending}
                              onChange={(e) => field.onChange(e.target.files)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {videoSourceType === 'youtube' && (
                    <FormField
                      control={form.control}
                      name="youtubeLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.youtubeUrlLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.youtubeUrlPlaceholder} {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <Button type="submit" className="w-full" disabled={isPending}>
                      {isPending ? (
                          <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              {t.creatingButton}
                          </>
                      ) : (
                          t.createButton
                      )}
                  </Button>
              </form>
          </Form>
        </CardContent>
      </Card>
    );
}
