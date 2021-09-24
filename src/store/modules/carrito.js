export const carritoModule = {
    namespaced: true,
    state: {
        todosLosProductos: []
    },
    mutations: {
        AGREGAR_PRODUCTO(state, nuevoProducto) {
            state.todosLosProductos.push(nuevoProducto)
        },
        AGREGAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
            state.todosLosProductos[indiceProducto].cantidad++
        }
    },
    actions: {
        agregarProducto(context, producto) {
            // eslint-disable-next-line no-unused-vars
            const indiceDelProductoQueYoQUieroBuscar = context.state.todosLosProductos.findIndex(
                (productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre
            )

            if (indiceDelProductoQueYoQUieroBuscar === -1) {
                const {
                    stock,
                    ...nuevoProducto
                } = producto
                context.commit("AGREGAR_PRODUCTO", {...nuevoProducto, cantidad 1})
            } else {
                context.commit("AGREGAR_CANTIDAD_PRODUCTO", indiceDelProductoQueYoQUieroBuscar)
            };

        }
    }
}