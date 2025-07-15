import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        cat: 'cat1',
        name: 'Product 1',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur possimus esse vitae.',
        longDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.',
        stockStatus: 'in stock',
      },
      {
        id: 2,
        cat: 'cat2',
        name: 'Product 2',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur possimus esse vitae.',
        longDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.',
        stockStatus: 'in stock',
      },
      {
        id: 3,
        cat: 'cat3',
        name: 'Product 3',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur possimus esse vitae.',
        longDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.',
        stockStatus: 'in stock',
      },
      {
        id: 4,
        cat: 'cat4|cat5|cat6',
        name: 'Product 4 Multiply categories',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur possimus esse vitae.',
        longDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rerum hic, reprehenderit minus consequatur nam quasi nulla, minima, sit aperiam rem. Nulla natus amet molestias, autem doloribus eum veniam animi.',
        stockStatus: 'in stock',
      },
    ]
  }),
  getters: {
    getProductById: (state) => (id ) => { return state.products.find((product) => product.id === parseInt(id)) }
  }
})