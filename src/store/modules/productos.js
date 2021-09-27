export const productosModule = {
    namespaced: true,
    state: {
        todosLosProductos: [
            {
                id: 1,
                nombre: "Pizza Veccia",
                categoria: "italiana",
                peso: "250 gramos",
                precio: 15000,
                oferta: true,
                stock: 15,
                estaenCarrito: false,
                descuento: "15%",
                imagen: require("@/assets/284245.jpg")
            },
            {
                id: 2,
                nombre: "Cheese Pizza",
                categoria: "americana",
                peso: "250 gramos",
                precio: 25000,
                oferta: true,
                stock: 11,
                estaenCarrito: false,
                descuento: "30%",
                imagen: require("@/assets/285677.jpg")
            },
            {
                id: 3,
                nombre: "Pepperoni Pizza",
                categoria: "italiana",
                peso: "250 gramos",
                precio: 30.000,
                oferta: false,
                stock: 9,
                estaenCarrito: false,
                descuento: "25%",
                imagen: require("@/assets/285777.jpg")
            },
            {
                id: 4,
                nombre: "BBQ Chiquen Pizza",
                categoria: "texana",
                peso: "300 gramos",
                precio: 15000,
                oferta: true,
                stock: 10,
                estaenCarrito: false,
                descuento: "15%",
                imagen: require("@/assets/287411.jpg")
            },
            {
                id: 5,
                nombre: "Hawaian Pizza",
                categoria: "polinésica",
                peso: "250 gramos",
                precio: 32000,
                oferta: false,
                stock: 15,
                estaenCarrito: false,
                descuento: "15%",
                imagen: require("@/assets/350606.jpg")
            },
            {
                id: 6,
                nombre: "Pizza München",
                categoria: "alemana",
                peso: "550 gramos",
                precio: 85000,
                oferta: true,
                stock: 14,
                estaenCarrito: false,
                descuento: "15%",
                imagen: require("@/assets/284245.jpg")
            },
            {
                id: 7,
                nombre: "Holland Cheese Pizza",
                categoria: "holandesa",
                peso: "450 gramos",
                precio: 45000,
                oferta: true,
                stock: 20,
                estaenCarrito: false,
                descuento: "30%",
                imagen: require("@/assets/285677.jpg")
            },
            {
                id: 8,
                nombre: "Pepper Maniac Pizza",
                categoria: "italiana",
                peso: "750 gramos",
                precio: 60000,
                oferta: false,
                stock: 15,
                estaenCarrito: false,
                descuento: "25%",
                imagen: require("@/assets/285777.jpg")
            },
            {
                id: 9,
                nombre: "Meatloaf Maximus Pizza",
                categoria: "texana",
                peso: "500 gramos",
                precio: 75000,
                oferta: false,
                stock: 7,
                estaenCarrito: false,
                descuento: "15%",
                imagen: require("@/assets/287411.jpg")
            },
            {
                id: 10,
                nombre: "Onolulu Special Pizza",
                categoria: "polinésica",
                peso: "450 gramos",
                precio: 52000,
                oferta: true,
                stock: 12,
                estaenCarrito: false,
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
