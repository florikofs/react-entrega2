import data from '../data/products.json';

export const loadProducts = () => {
  return new Promise((resolve, reject) => {
      resolve(data)
  })
}

// PARA TESTEAR CUANDO LA CARGA DE PRODUCTOS FALLE
//       reject(new Error("Fallo al cargar los productos"))
//     })
// }