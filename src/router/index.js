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
      }
    ]
  },
  { 
    path: '/webshop-v2',
    component: Webshop,
    name: 'webshop-v2',
    redirect: { name: 'webshop-v2-home' },
    children: [
      {
        path: '',
        component: ProductList,
        name: 'webshop-home'
      },
      // {
      //   path: 'profile',
      //   component: Profile,
      //   name: 'webshop-profile'
      // },
      // {
      //   path: 'shopping-cart',
      //   component: ShoppingCart,
      //   name: 'shopping-cart'
      // },
      // {
      //   path: 'checkout',
      //   component: Checkout,
      //   name: 'webshop-checkout'
      // },
      // {
      //   path: 'order-review',
      //   component: OrderReview,
      //   name: 'order-review'
      // },
      // {
      //   path: 'order-payment',
      //   component: Payment,
      //   name: 'order-payment'
      // },
      // {
      //   path: 'payment-complete',
      //   component: PaymentComplete,
      //   name: 'payment-complete'
      // },
      // {
      //   path: 'order-confirmation',
      //   component: OrderConfirmation,
      //   name: 'order-confirmation'
      // },
      // {
      //   path: 'product/:id',
      //   component: Product,
      //   name: 'product'
      // },
      // {
      //   path: 'empty-product-attrs',
      //   component: EmptyProductAttrs,
      //   name: 'empty-product-attrs'
      // }
    ]
  },
];

const router = createRouter({
  history: createWebHistory('/examples/spa-vue/'),
  routes,
});

export default router;