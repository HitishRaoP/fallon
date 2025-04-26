"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useFeedbackForm } from '../hooks/use-feedback-form'
import { FORM_ITEMS } from '../structures/form-items'
import { LoaderCircleIcon } from 'lucide-react'

export const FeedbackForm = () => {
  const { form, onSubmit, isPending } = useFeedbackForm()

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {
              FORM_ITEMS.map((f, i) => (
                <FormField
                  key={i}
                  control={form.control}
                  name={f.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{f.label}</FormLabel>
                      <FormControl>
                        {
                          f.component ? f.component(field) :
                            <Input placeholder={f.placeholder} {...field} />
                        }
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))
            }
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-full my-4 relative flex items-center justify-center gap-2"
            >
              {isPending && (
                <LoaderCircleIcon className="animate-spin" size={20} aria-hidden="true" />
              )}
              <span>Submit</span>
            </Button>
          </form>
        </Form >
      </CardContent>
    </Card>
  )
}
