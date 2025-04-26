"use client"

import { useQuery } from '@tanstack/react-query'
import axios from "axios";

export const useFeedback = () => {
  const getFeedbacks = async () => {
    await axios.post("https://vhgqbzfxaisrybuhindz.supabase.co/rest/v1/rpc/GetFeedbacks",
      {
        headers: {
          "apikey": process.env.SUPABASE_KEY,
          "Authorization": `Bearer ${process.env.SUPABASE_KEY}`,
          "Content-Type": "application/json"
        }
      });
  }
  const query = useQuery({ queryKey: ['feedbacks'], queryFn: getFeedbacks })

  return {
    query
  }
}
