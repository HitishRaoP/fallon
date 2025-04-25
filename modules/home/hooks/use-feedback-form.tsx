import { zodResolver } from '@hookform/resolvers/zod'
import { ControllerRenderProps, Path, useForm } from 'react-hook-form'
import { feedbackFormSchema, FeedbackFormType } from '../schemas/feedback-form-schema'
import { Textarea } from '@/components/ui/textarea';

type FormItem = {
  name: Path<FeedbackFormType>
  label: string
  placeholder: string
  component?: (field: ControllerRenderProps<FeedbackFormType>) => React.JSX.Element
}

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

  const onSubmit = async (values: FeedbackFormType) => {
    try {
      //TODO
      console.log(values);
      form.reset()
    } catch (error) {

    }
  }

  const FORM_ITEMS: FormItem[] = [
    {
      name: "firstname",
      label: "Enter your first name",
      placeholder: "e.g. John"
    },
    {
      name: "lastname",
      label: "Enter your last name",
      placeholder: "e.g. Doe"
    },
    {
      name: "email",
      label: "Email",
      placeholder: "e.g. john.doe@example.com"
    },
    {
      name: "feedback",
      label: "Feedback",
      placeholder: "Write your feedback here...",
      component: (field) => {
        return (
          <Textarea className='h-44' placeholder={"Write your feedback here..."} {...field} />
        )
      }
    },
  ];

  return {
    form,
    onSubmit,
    FORM_ITEMS
  }
}
