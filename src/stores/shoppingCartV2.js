import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCartV2', {
  state: () => {
    return {
      products: []
    }
  },
  getters: {
    total: (state) => {
      return state.products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      )
    }
  },
  actions: {
    add(product, amount = 1) {
      const index = this.products.findIndex((item) => item.id === product.id)
      if (index === -1) {
        product.quantity = amount
        this.products.push({...product})
      }
      else {
        this.products[index].quantity += amount
      }

    },
    remove(id) {
      const index = this.products.findIndex(item => item.id === id)
      if (index > -1) {
        this.products.splice(index, 1)
      }
    },
    decrease(id) {
      const index = this.products.findIndex(item => item.id === id)
      if (index > -1) {
        this.products[index].quantity -= 1

        if (this.products[index].quantity === 0) {
          this.remove(id)
        }
      }
    },
    update(index, data) {
      if (index >= 0 && index < this.products.length) {
        Object.assign(this.products[index], data)
      }
      else {
        console.log('Update is not possible')
      }
    }
  }
})