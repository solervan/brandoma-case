import { createFileRoute, Outlet } from '@tanstack/react-router'
import LayoutMain from '../../layouts/LayoutMain/ui/LayoutMain'
export const Route = createFileRoute('/auth/_registration-layout')({
  component: AuthLayoutComponent,
})

function AuthLayoutComponent() {
  return (
    <LayoutMain> 
      <Outlet /> 
    </LayoutMain>
  )
}