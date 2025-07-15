import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: () => {
    return {
      products: []
    }
  },
  actions: {
    add(product) {
      const index = this.products.findIndex((item) => item.id === product.id)
      if (index === -1) {
        product.quantity = 1
        this.products.push(product)
      }
      else {
        product.quantity++
      }
    },
    remove(id) {
      const index = this.products.findIndex(item => item.id === id)
      if (index > -1) {
        this.products.splice(index, 1)
      }
    },
    update(index, data) {
      console.log('index', index)
      if (index >= 0 && index < this.products.length) {
        Object.assign(this.products[index], data)
      }
      else {
        console.log('Update is not possible')
      }
    }
  }
})