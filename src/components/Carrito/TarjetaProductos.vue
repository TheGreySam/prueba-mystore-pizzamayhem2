<template>
    <div class="card">

    </div>
</template>

<script>
export default {
    props: {
        producto: { type: Object, required: true}
    },
    methods: {
        agregarProductoAlCarrito() {
            this.$store.dispatch("carrito/agregarProducto", this.producto)
        }
    }
}
</script>