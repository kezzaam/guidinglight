"use client"
import Infinite from "@/components/Infinite"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// for infinite scroll and pagination 
// context from https://react-query.tanstack.com/examples/infinite-scroll

const queryClient = new QueryClient()

export default function Page() {
  return (
<QueryClientProvider client={queryClient}>
      <Infinite />
</QueryClientProvider>
  )
}