import { createFileRoute } from '@tanstack/react-router'
import FirstPractical from '../../pages/(main)/firstPractical/FirstPractical'
import { addNavItem } from '../../shared/config/navigation'


addNavItem({ to: "/first", label: "Первая практическая" })

export const Route = createFileRoute('/_layout/first')({
  component: FirstPractical,
})

