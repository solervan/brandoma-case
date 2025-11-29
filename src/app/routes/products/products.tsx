import { createFileRoute } from '@tanstack/react-router'
import ProductsPage from '../../../pages/(main)/productPage/ProductPage'
export const Route = createFileRoute('/products/products')({
  component: ProductsPage,
})