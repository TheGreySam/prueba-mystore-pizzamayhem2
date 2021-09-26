export const productosModule = {
    namespaced: true,
    state: {
        todosLosProductos: [
            {
                id: 1,
                nombre: "Pizza Veccia",
                categoria: "italiana",
                peso: "250 gramos",
                precio: "15.000 pesos",
                oferta: "descuento del viernes",
                descuento: "15%",
                imagen: require("@/assets/284245.jpg")
            },
            {
                id: 2,
                nombre: "Cheese Pizza",
                categoria: "americana",
                peso: "250 gramos",
                precio: "25.000 pesos",
                oferta: true,
                descuento: "30%",
                imagen: require("@/assets/285677.jpg")
            },
            {
                id: 3,
                nombre: "Pepperoni Pizza",
                categoria: "italiana",
                peso: "250 gramos",
                precio: "30.000 pesos",
                oferta: "descuento del domingo",
                descuento: "25%",
                imagen: require("@/assets/285777.jpg")
            },
            {
                id: 4,
                nombre: "BBQ Chiquen Pizza",
                categoria: "texana",
                peso: "300 gramos",
                precio: "15.000 pesos",
                oferta: "descuento del festivo",
                descuento: "15%",
                imagen: require("@/assets/287411.jpg")
            },
            {
                id: 5,
                nombre: "Hawaian Pizza",
                categoria: "polinésica",
                peso: "250 gramos",
                precio: "32.000 pesos",
                oferta: "sin descuento disponible",
                descuento: "15%",
                imagen: require("@/assets/350606.jpg")
            },
            {
                id: 6,
                nombre: "Pizza München",
                categoria: "alemana",
                peso: "550 gramos",
                precio: "85.000 pesos",
                oferta: "descuento del viernes",
                descuento: "15%",
                imagen: require("@/assets/284245.jpg")
            },
            {
                id: 7,
                nombre: "Holland Cheese Pizza",
                categoria: "holandesa",
                peso: "450 gramos",
                precio: "45.000 pesos",
                oferta: true,
                descuento: "30%",
                imagen: require("@/assets/285677.jpg")
            },
            {
                id: 8,
                nombre: "Pepper Maniac Pizza",
                categoria: "italiana",
                peso: "750 gramos",
                precio: "60.000 pesos",
                oferta: "descuento del domingo",
                descuento: "25%",
                imagen: require("@/assets/285777.jpg")
            },
            {
                id: 9,
                nombre: "Meatloaf Maximus Pizza",
                categoria: "texana",
                peso: "500 gramos",
                precio: "75.000 pesos",
                oferta: "descuento del festivo",
                descuento: "15%",
                imagen: require("@/assets/287411.jpg")
            },
            {
                id: 10,
                nombre: "Onolulu Special Pizza",
                categoria: "polinésica",
                peso: "450 gramos",
                precio: "52.000 pesos",
                oferta: "sin descuento disponible",
                descuento: "15%",
                imagen: require("@/assets/350606.jpg")
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
