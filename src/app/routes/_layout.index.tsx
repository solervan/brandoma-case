import { createFileRoute } from '@tanstack/react-router'
import WelcomePage from '../../pages/(main)/welcomePage/WelcomePage'

export const Route = createFileRoute('/_layout/')({
  component: WelcomePage,
})


