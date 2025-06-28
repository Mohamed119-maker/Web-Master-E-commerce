import { Routes } from '@angular/router';
import { RedirectComponent } from './pages/redirect/redirect/redirect.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        pathMatch: 'full',
        title: 'Home'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },

    // {
    //     path: '',
    //     pathMatch: 'full',
    //     resolve: [RedirectComponent],
    // },

    // {
    //     path: 'auth',
    //     children: [
    //         {
    //             path: 'sign-in',
    //             loadComponent: () => import('./pages/auth/pages/sign-in/sign-in.component').then(m => m.SignInComponent),
    //             title: 'Login'
    //         },
    //         {
    //             path: 'sign-up',
    //             loadComponent: () => import('./pages/auth/pages/sign-up/sign-up.component').then(m => m.SignUpComponent),
    //             title: 'Register'
    //         }
    //     ]
    // },

    {
        path: 'shop',
        loadComponent: () => import('./pages/shop/shop/shop.component').then(m => m.ShopComponent),
        title: 'Shop'
    },
    {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog/blog.component').then(m => m.BlogComponent),
        title: 'Blog'
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact'
    },
    {
        path: 'aboutus',
        loadComponent: () => import('./pages/aboutus/aboutus/aboutus.component').then(m => m.AboutusComponent),
        title: 'About Us'
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent),
        title: 'Cart'
    },
    {
        path: 'wishlist',
        loadComponent: () => import('./pages/wishlist/wishlist.component').then(m => m.WishlistComponent),
        title: 'Wishlist'
    },
    {
        path: 'product-details',
        loadComponent: () => import('./pages/product-details/product-details/product-details.component').then(m => m.ProductDetailsComponent),
        title: 'Product Details'
    },
    { path: '**', redirectTo: '' }
];
