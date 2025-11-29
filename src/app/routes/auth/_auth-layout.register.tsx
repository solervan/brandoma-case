import { createFileRoute } from '@tanstack/react-router'
import RegistrationForm from '../../../pages/(main)/auth/register/ui/RegistrationForm'
export const Route = createFileRoute('/auth/_auth-layout/register')({
  component: RegistrationForm,
})