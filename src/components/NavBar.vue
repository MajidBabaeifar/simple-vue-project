<template>
    <nav class="px-3 navbar navbar-expand-lg bg-light">
        <div class="navbar-brand">Menu</div>
        <router-link class="nav-item nav-link" to="/">Home</router-link> |
        <router-link class="nav-item nav-link" to="/list">List</router-link> |
        <router-link class="nav-item nav-link" to="/counter">Counter</router-link> |
        <router-link class="nav-item nav-link" to="/conditinal">Conditinal</router-link> |
        <router-link class="nav-item nav-link" to="/about">About</router-link> |
        <router-link class="nav-item nav-link" to="/contactus">Contact us</router-link>
    </nav>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style>
</style>