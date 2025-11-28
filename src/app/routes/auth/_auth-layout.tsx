import { createFileRoute, Outlet } from '@tanstack/react-router'
import LayoutMain from '../../layouts/LayoutMain/ui/LayoutMain'
export const Route = createFileRoute('/auth/_auth-layout')({
  component: AuthLayoutComponent,
})

function AuthLayoutComponent() {
  return (
    <LayoutMain> 
      <Outlet /> 
    </LayoutMain>
  )
}