import { ControllerRenderProps, Path } from "react-hook-form"
import { FeedbackFormType } from "../schemas/feedback-form-schema"
import { Textarea } from "@/components/ui/textarea"

type FormItem = {
    name: Path<FeedbackFormType>
    label: string
    placeholder: string
    component?: (field: ControllerRenderProps<FeedbackFormType>) => React.JSX.Element
}

export const FORM_ITEMS: FormItem[] = [
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
        component: (field) => (
            <Textarea className="h-44" placeholder="Write your feedback here..." {...field} />
        )
    },
];
