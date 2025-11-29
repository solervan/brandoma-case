// Используем import.meta.env для Vite
export const BASE_URL = import.meta.env.PROD 
  ? 'http://your-production-url.com' 
  : '';

export const CATEGORIE_URL = '/api/categories';
export const PRODUCT_URL = '/api/products';
export const UPLOAD_URL = '/api/upload';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';