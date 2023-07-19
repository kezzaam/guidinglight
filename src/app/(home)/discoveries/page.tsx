"use client"

import Discoveries from "@/components/Discoveries"
import { QueryClient, QueryClientProvider } from 'react-query'

// for infinite scroll and pagination 
// context from https://react-query.tanstack.com/examples/infinite-scroll
const queryClient = new QueryClient()

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Discoveries />
    </QueryClientProvider>
  )
}