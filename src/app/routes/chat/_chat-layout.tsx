import { createFileRoute, Outlet } from '@tanstack/react-router'
import LayoutMain from '../../layouts/LayoutMain/ui/LayoutMain'

export const Route = createFileRoute('/chat/_chat-layout')({
  component: ChatLayoutComponent,
})

function ChatLayoutComponent() {
  return (
    <LayoutMain> 
      <Outlet /> 
    </LayoutMain>
  )
}