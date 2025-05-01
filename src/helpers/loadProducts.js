import data from '../Data/products.json';

export const loadProducts = () => {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }