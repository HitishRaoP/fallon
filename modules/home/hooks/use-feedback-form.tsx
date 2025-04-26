import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { feedbackFormSchema, FeedbackFormType } from '../schemas/feedback-form-schema'
import axios from 'axios';
import { v4 as uuid } from "uuid"
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useFeedbackForm = () => {
  const form = useForm<FeedbackFormType>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      feedback: ""
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: FeedbackFormType) => {
      await axios.post("https://vhgqbzfxaisrybuhindz.supabase.co/rest/v1/rpc/Create%20Feedback", {
        id: uuid(),
        created_at: new Date().toISOString(),
        ...values
      },
        {
          headers: {
            "apikey": process.env.SUPABASE_KEY,
            "Authorization": `Bearer ${process.env.SUPABASE_KEY}`,
            "Content-Type": "application/json"
          }
        });
    },
    onSuccess: () => {
      form.reset();
      toast.success("Feedback Recorded")
    },
  });

  const onSubmit = (values: FeedbackFormType) => {
    mutation.mutateAsync(values);
  };

  return {
    form,
    onSubmit,
    ...mutation
  };
};
