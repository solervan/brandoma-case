import { createFileRoute } from '@tanstack/react-router'
import AuthForm from '../../../pages/(main)/auth/login/ui/AuthForm'
export const Route = createFileRoute('/auth/_auth-layout/signin')({
  component: AuthForm,
})