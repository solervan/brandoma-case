import { createFileRoute } from '@tanstack/react-router'
import ProductsPage from '../../../pages/(main)/productPage/ProductPage'

export const Route = createFileRoute('/chat/products')({
  component: ProductsPage,
})