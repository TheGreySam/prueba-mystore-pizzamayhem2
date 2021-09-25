const delay = (ms) => new Promise((resolve) => {
    setTimeout
})

export const carritoModule = {
    namespaced: true,
    state: {
        todosLosProductos: []
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
        },
        QUITAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
            state.todosLosProductos[indiceProducto].cantidad--
        },
        QUITAR_PRODUCTO(state, indiceProducto) {
            state.todosLosProductos
        }
    },
    actions: {
//        agregarProducto(context, producto) {
//            // eslint-disable-next-line no-unused-vars
//            const indiceDelProductoQueYoQUieroBuscar = context.state.todosLosProductos.findIndex(
//                (productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre
//            )
//
//            if (indiceDelProductoQueYoQUieroBuscar === -1) {
//                const {
//                    stock,
//                    ...nuevoProducto
//                } = producto
//                context.commit("AGREGAR_PRODUCTO", {...nuevoProducto, cantidad 1})
//            } else {
//                context.commit("AGREGAR_CANTIDAD_PRODUCTO", indiceDelProductoQueYoQUieroBuscar)
//            }

//        },
//        quitarProducto(context, producto) {
//            const indiceDelProductoQueYoQUieroBuscar = context.state.todosLosProductos.findIndex(
//                (productoEnElCarrito) -> productoEnElCarrito.nombre === producto.nombre
//            )

//            if (indiceDelProductoQueYoQUieroBuscar >= 0) {
//                if (context.state.todosLosProductos[indiceDelProductoQueYoQUieroBuscar].cantidad > 1) {
//                    context.commit('QUITAR_CANTIDAD_PRODUCTO', indiceDelProductoQueYoQUieroBuscar)
//                } else {
//                    context.commit("QUITAR_PRODUCTO")
//                }
//            }
//        }
//    },
//    comprar(context) {
//        return new Promise((resolve) ->{
//            setTimeout(() -> {
//                await delay(5000),
//                console.log('Productos comprados'),
//                console.table('')
//                context.commit('QUITAR_TODOS_PRODUCTOS')
//            })
//        })
    }
}