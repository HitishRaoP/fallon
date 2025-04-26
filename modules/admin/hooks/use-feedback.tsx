"use client"

import { supabase } from '@/db/supabase'
import { useQuery } from '@tanstack/react-query'

export const useFeedback = () => {
  const fetchFeedbacks = async () => {
    const { data, error } = await supabase
      .from('feedback')
      .select()

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  const query = useQuery({
    queryKey: ['feedbacks'],
    queryFn: fetchFeedbacks,
    retry: 1, // retry once if it fails
    refetchOnWindowFocus: false,
  })

  return {
    ...query,
  }
}
