const delay = (ms) => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, ms)
})

export const carritoModule = {
    namespaced: true,
    state: {
        todosLosProductos: [
            
        ]
    },
    getters: {
        totalTotal(state) {
            return state.todosLosProductos.reduce((accumulator, producto) => {
                accumulator += producto.precio * (1 - producto.descuento/100) * producto.cantidad
                return accumulator
            }, 0)
        }
    },
    mutations: {
        AGREGAR_PRODUCTO(state, nuevoProducto) {
            state.todosLosProductos.push(nuevoProducto)
        },
        AGREGAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
            state.todosLosProductos[indiceProducto].cantidad++
            state.todosLosProductos[indiceProducto].stock--
        },
        QUITAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
            state.todosLosProductos[indiceProducto].cantidad--
            state.todosLosProductos[indiceProducto].stock++
        },
        QUITAR_PRODUCTO(state, indiceProducto) {
            state.todosLosProductos.splice(indiceProducto)
        },
        QUITAR_TODOS_PRODUCTOS(state) {
            state.todosLosProductos = []
        },
//        DISMINUIR_STOCK_PRODUCTO(state) {
//            state.todosLosProductos[producto].stock--
//        }
    },
    actions: {
        agregarProducto(context, producto) {
            const indiceDelProductoQueYoQuieroBuscar = context.state.todosLosProductos.findIndex(
                (productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre
            )
            if (indiceDelProductoQueYoQuieroBuscar === -1) {
                const { stock, ...nuevoProducto} = producto
                context.commit("AGREGAR_PRODUCTO", { ...nuevoProducto, cantidad: 1, stock:-1})
            } else {
                context.commit("AGREGAR_CANTIDAD_PRODUCTO", indiceDelProductoQueYoQuieroBuscar)
            } 
            //context.commit('DISMINUIR_STOCK_PRODUCTO', producto)
            
            


//            const indiceDelProductoQueYoQuieroBuscar = context.state.todosLosProductos.findIndex(
//                (productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre
//            )

//            if (indiceDelProductoQueYoQuieroBuscar === -1) {
//                const {
//                    stock,
//                    ...nuevoProducto
//                } = producto
//                context.commit("AGREGAR_PRODUCTO", {...nuevoProducto, cantidad 1})
//            } else {
//                context.commit("AGREGAR_CANTIDAD_PRODUCTO", indiceDelProductoQueYoQuieroBuscar)
//            }

        },
        quitarProducto(context, producto) {
            const indiceDelProductoQueYoQuieroBuscar = context.state.todosLosProductos.findIndex(
                (productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre
            )

            if (indiceDelProductoQueYoQuieroBuscar >= 0) {
                if (context.state.todosLosProductos[indiceDelProductoQueYoQuieroBuscar].cantidad > 1) {
                    context.commit('QUITAR_CANTIDAD_PRODUCTO', indiceDelProductoQueYoQuieroBuscar)
                } else {
                    context.commit("QUITAR_PRODUCTO")
                } 
            }
        }
    },
//    comprar(context) {
//        return new Promise((resolve) => {
//            setTimeout(() => {
//                console.log('Productos comprados')
//                console.table(context.state.todosLosProductos)
//                context.commit('QUITAR_TODOS_PRODUCTOS')
//                resolve()
//            }, 2000)
//        })
        
//    },

    async comprar(context) {
        await delay(2000)
        console.log('Productos comprados')
        console.table(context.state.todosLosProductos)
        context.commit('QUITAR_TODOS_PRODUCTOS')
    }
}