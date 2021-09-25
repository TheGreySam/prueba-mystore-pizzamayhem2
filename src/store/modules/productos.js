export const productosModule = {
    namespaced: true,
    state: {
        todosLosProductos: [
            {
                id: 1,
                nombre: "Pizza Veccia",
                categoria: "italiana",
                peso: "250 gramos",
                precio: "$15.000 pesos",
                oferta: "descuento del domingo",
                descuento: "15%",
                imagen: "@/assets/284245.jpg"
            },
            {
                id: 2,
                nombre: "Pizza Veccia",
                categoria: "italiana",
                peso: "250 gramos",
                precio: "$15.000 pesos",
                oferta: "descuento del domingo",
                descuento: "15%",
                imagen: "@/assets/285677.jpg"
            },
            {
                id: 3,
                nombre: "Pizza Veccia",
                categoria: "italiana",
                peso: "250 gramos",
                precio: "$15.000 pesos",
                oferta: "descuento del domingo",
                descuento: "15%",
                imagen: "@/assets/285777.jpg"
            },
            {
                id: 4,
                nombre: "Pizza Veccia",
                categoria: "italiana",
                peso: "250 gramos",
                precio: "$15.000 pesos",
                oferta: "descuento del domingo",
                descuento: "15%",
                imagen: "@/assets/287411.jpg"
            },
            {
                id: 5,
                nombre: "Pizza Veccia",
                categoria: "italiana",
                peso: "250 gramos",
                precio: "$15.000 pesos",
                oferta: "descuento del domingo",
                descuento: "15%",
                imagen: "@/assets/350606.jpg"
            },
    ],
    mostrarCarrito: false
    },
    mutations: {
        AGREGAR_PRODUCTO(state, nuevoProducto) {
          state.todosLosProductos.push(nuevoProducto)
        }
      },
    actions: {
        crearProducto(context, producto) {
          context.commit('AGREGAR_PRODUCTO', producto)
        }
    }
}
