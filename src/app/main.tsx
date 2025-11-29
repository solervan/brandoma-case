import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import { routeTree } from '../shared/lib/router/routeTree.gen'
import { CustomProvider } from 'rsuite' 
import store from './redux/store/store'
import 'rsuite/dist/rsuite.min.css'
import './styles/_global.scss'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Provider store={store}>
        <CustomProvider>
          <RouterProvider router={router} />
        </CustomProvider>
      </Provider>
    </StrictMode>,
  )
}