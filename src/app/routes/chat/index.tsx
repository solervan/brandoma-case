import { createFileRoute } from '@tanstack/react-router'
import MatchChat from '../../../pages/(main)/matchChat/MatchChat'

export const Route = createFileRoute('/chat/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MatchChat/>
}