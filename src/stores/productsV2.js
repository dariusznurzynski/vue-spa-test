import { defineStore } from 'pinia'
import products from '../mocks/webshop-v2/products'

export const useProductsStore = defineStore('productsV2', {
  state: () => ({
    products: products
  }),
  getters: {
    getProductById: (state) => (id ) => { return state.products.find((product) => product.id === parseInt(id)) }
  }
})