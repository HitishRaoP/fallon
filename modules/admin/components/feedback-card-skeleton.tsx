import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const FeedbackCardSkeleton = () => {
    return (
        <Card className='rounded-3xl p-7 md:p-9 lg:p-10'>
            <CardHeader className='border-b'>
                <CardTitle className='flex items-center justify-between'>
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-24" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="h-4 w-1/2" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-30 w-full" />
            </CardContent>
        </Card>
    )
}
