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

export const FeedbackForm = () => {
  const { form, onSubmit, FORM_ITEMS } = useFeedbackForm()

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
            <Button size={"lg"} className="w-full my-4" type="submit">Submit</Button>
          </form>
        </Form >
      </CardContent>
    </Card>
  )
}
