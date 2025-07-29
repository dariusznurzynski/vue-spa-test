import { createRouter, createWebHistory } from 'vue-router';
import AssetManagement from '../pages/AssetManagement.vue';
import AssetPrint from '../pages/AssetPrint.vue';
import Home from '../pages/Home.vue';
import TeaserTracking from '../pages/TeaserTracking.vue';
import PathManipulation from '../pages/PathManipulation.vue';
import Webshop from '../pages/Webshop.vue';
import Profile from '../pages/webshop/Profile.vue';
import ProductList from '../pages/webshop/ProductList.vue';
import ShoppingCart from '../components/webshop/ShoppingCart.vue';
import Checkout from '../pages/webshop/Checkout.vue';
import OrderReview from '../pages/webshop/OrderReview.vue';
import Payment from '../pages/webshop/Payment.vue';
import PaymentComplete from '../pages/webshop/PaymentComplete.vue';
import OrderConfirmation from '../pages/webshop/OrderConfirmation.vue';
import Product from '../pages/webshop/Product.vue';
import EmptyProductAttrs from '../pages/webshop/EmptyProductAttrs.vue'
import CourseStart from '../pages/CourseStart.vue'

import WebshopV2 from '@/pages/WebshopV2.vue'
import ProductListVueV2 from '@/pages/webshop-v2/ProductList.vue'
import ProductV2 from '@/pages/webshop-v2/Product.vue'
import ShoppingCartV2 from '@/pages/webshop-v2/ShoppingCart.vue'
import CheckoutAndOrderReviewV2 from '@/pages/webshop-v2/CheckoutAndOrderReview.vue'
import GooglePay from '@/pages/webshop-v2/GooglePay.vue'
import OrderConfirmationV2 from '@/pages/webshop-v2/OrderConfirmation.vue'
import ProfileV2 from '@/pages/webshop-v2/Profile.vue'
import ReturnProductV2 from '@/pages/webshop-v2/ReturnProduct.vue'

import WebshopV3 from '@/pages/WebshopV3.vue'
import ProductListVueV3 from '@/pages/webshop-v3/ProductList.vue'
import ProductV3 from '@/pages/webshop-v3/Product.vue'
import ShoppingCartV3 from '@/pages/webshop-v3/ShoppingCart.vue'
import CheckoutAndOrderReviewV3 from '@/pages/webshop-v3/CheckoutAndOrderReview.vue'
import ProfileV3 from '@/pages/webshop-v3/Profile.vue'
import ReturnProductV3 from '@/pages/webshop-v3/ReturnProduct.vue'
 
const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/asset-management', component: AssetManagement, name: 'asset-management' },
  { path: '/asset-print', component: AssetPrint, name: 'asset-print' },
  { path: '/teaser-tracking', component: TeaserTracking, name: 'teaser-tracking' },
  { path: '/path-manipulation', component: PathManipulation, name: 'path-manipulation' },
  { path: '/course-start', component: CourseStart, name: 'course-start' },
  { 
    path: '/webshop',
    component: Webshop,
    name: 'webshop',
    redirect: { name: 'webshop-home' },
    children: [
      {
        path: '',
        component: ProductList,
        name: 'webshop-home'
      },
      {
        path: 'profile',
        component: Profile,
        name: 'webshop-profile'
      },
      {
        path: 'shopping-cart',
        component: ShoppingCart,
        name: 'shopping-cart'
      },
      {
        path: 'checkout',
        component: Checkout,
        name: 'webshop-checkout'
      },
      {
        path: 'order-review',
        component: OrderReview,
        name: 'order-review'
      },
      {
        path: 'order-payment',
        component: Payment,
        name: 'order-payment'
      },
      {
        path: 'payment-complete',
        component: PaymentComplete,
        name: 'payment-complete'
      },
      {
        path: 'order-confirmation',
        component: OrderConfirmation,
        name: 'order-confirmation'
      },
      {
        path: 'product/:id',
        component: Product,
        name: 'product'
      },
      {
        path: 'empty-product-attrs',
        component: EmptyProductAttrs,
        name: 'empty-product-attrs'
      },
    ]
  },
  { 
    path: '/webshop-v2',
    component: WebshopV2,
    name: 'webshop-v2',
    redirect: { name: 'webshop-v2-home' },
    children: [
      {
        path: '',
        component: ProductListVueV2,
        name: 'webshop-v2-home'
      },
      {
        path: 'profile',
        component: ProfileV2,
        name: 'profile-v2'
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartV2,
        name: 'shopping-cart-v2'
      },
      {
        path: 'checkout-and-order-review-together',
        component: CheckoutAndOrderReviewV2,
        name: 'webshop-v2-checkout-and-order-review-v2'
      },
      {
        path: 'google-pay',
        component: GooglePay,
        name: 'google-pay'
      },
      {
        path: 'order-confirmation',
        component: OrderConfirmationV2,
        name: 'order-confirmation-v2'
      },
      {
        path: 'product/:id',
        component: ProductV2,
        name: 'product-v2'
      },
      {
        path: 'product-return',
        component: ReturnProductV2,
        name: 'product-return-v2'
      }
    ]
  },
  { 
    path: '/webshop-v3',
    component: WebshopV3,
    name: 'webshop-v3',
    redirect: { name: 'webshop-v3-home' },
    children: [
      {
        path: '',
        component: ProductListVueV3,
        name: 'webshop-v3-home'
      },
      {
        path: 'profile',
        component: ProfileV3,
        name: 'profile-v3'
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartV3,
        name: 'shopping-cart-v3'
      },
      {
        path: 'checkout-and-order-review-together',
        component: CheckoutAndOrderReviewV3,
        name: 'webshop-v2-checkout-and-order-review-v3'
      },
      // {
      //   path: 'google-pay',
      //   component: GooglePay,
      //   name: 'google-pay'
      // },
      {
        path: 'order-confirmation',
        component: OrderConfirmationV2,
        name: 'order-confirmation-v3'
      },
      {
        path: 'product/:id',
        component: ProductV3,
        name: 'product-v3'
      },
      {
        path: 'product-return',
        component: ReturnProductV3,
        name: 'product-return-v3'
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory('/examples/spa-vue/'),
  routes,
});

export default router;