"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { useFeedback } from '../hooks/use-feedback'

const DATA = [
    {
        firstname: "Hitish",
        lastname: "Rao P",
        email: "hitishraop@gmail.com",
        feedback: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero inventore natus, eligendi autem quasi eaque quo consequuntur officiis molestias impedit praesentium omnis molestiae dolorem doloribus beatae minus voluptate doloremque cumque"
    },
    {
        firstname: "Hitish",
        lastname: "Rao P",
        email: "hitishraop@gmail.com",
        feedback: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero inventore natus, eligendi autem quasi eaque quo consequuntur officiis molestias impedit praesentium omnis molestiae dolorem doloribus beatae minus voluptate doloremque cumque"
    },
    {
        firstname: "Hitish",
        lastname: "Rao P",
        email: "hitishraop@gmail.com",
        feedback: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero inventore natus, eligendi autem quasi eaque quo consequuntur officiis molestias impedit praesentium omnis molestiae dolorem doloribus beatae minus voluptate doloremque cumque"
    }
]

export const AdminMain = () => {
    const { query } = useFeedback()
    console.log(query.data);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                DATA.map((d, i) => (
                    <Card key={i} className='rounded-3xl p-7 md:p-9 lg:p-10'>
                        <CardHeader className='border-b'>
                            <CardTitle className='flex items-center justify-between'>
                                <span>
                                    {d.firstname} {d.lastname}
                                </span>
                                <Badge variant={"secondary"} className='font-normal text-sm'>
                                    {"4th March"}
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
            }
        </div>
    )
}
