"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { useFeedback } from '../hooks/use-feedback'
import { formatDate } from '@/lib/dayjs'
import { FeedbackCardSkeleton } from './feedback-card-skeleton'

export const AdminMain = () => {
    const { data, isFetching } = useFeedback()

    if (data?.length === 0) {
        return (
            <Card>
                <CardContent className='text-center'>
                    No Results
                </CardContent>
            </Card>
        )
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                isFetching ? (
                    Array.from({ length: 9 }).map((_, index) => (
                        <FeedbackCardSkeleton key={index} />
                    ))
                ) : (
                    data?.map((d, i) => (
                        <Card key={i} className='rounded-3xl p-7 md:p-9 lg:p-10'>
                            <CardHeader className='border-b'>
                                <CardTitle className='flex items-center justify-between'>
                                    <span>
                                        {d.firstname} {d.lastname}
                                    </span>
                                    <Badge variant={"secondary"} className='font-normal text-sm'>
                                        {formatDate(d.created_at as Date)}
                                    </Badge>
                                </CardTitle>
                                <CardDescription>
                                    {d.email}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className='h-30 text-justify'>
                                    {d.feedback}
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    ))
                )
            }
        </div>
    )
}
