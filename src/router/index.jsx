import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/products/:filter',
        element: <ProductsPage />,
    },
    {
        path: '/cart',
        element: <CartPage/>,
    },
    {
        path: '/checkout',
        element: <CheckoutPage />,
    }
    
])

export default router;