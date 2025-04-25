import { z } from "zod";

export const feedbackFormSchema = z.object({
    firstname: z.string().min(2, {
        message: "First name must be at least 2 characters long.",
    }),
    lastname: z.string().min(2, {
        message: "Last name must be at least 2 characters long.",
    }).optional(),
    email: z.string().email({
        message: "Please enter a valid email address (e.g., name@example.com).",
    }),
    feedback: z.string().min(1, {
        message: "Message field cannot be empty.",
    }),
});

export type FeedbackFormType = z.infer<typeof feedbackFormSchema>