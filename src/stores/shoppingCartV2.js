import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCartV2', {
  state: () => {
    return {
      products: []
    }
  },
  actions: {
    add(product, amount = 1) {
      console.log('add to Cart')
      console.log(product)
      const index = this.products.findIndex((item) => item.id === product.id)
      if (index === -1) {
        product.quantity = amount
        this.products.push({...product})
      }
      else {
        this.products[index].quantity += amount
      }

      console.log('addProduct', this.products)
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