<template>
    <div class="container">
        <div class="row">
            <div class="card text-center col my-5">
                <div class="card-header bg-success">
                    <h1 class="text-white card-title">{{ user.name }}</h1>
                    <h2 class="card-subtitle text-white">username : {{ user.username }}</h2>
                </div>
                <div class="card-body">
                    <p>Email : {{ user.email }}</p>
                    <p>phone number : {{ user.phone }}</p>
                    <p>website : {{ user.website }}</p>
                    <p>company : {{ user.company.name }}</p>
                </div>
            </div>
            <router-link to="/list">
                <button class="btn btn-warning fw-bold">back</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import { UserService } from '../services/userService'
export default {
    name: "SingleUser",
    data: function () {
        return {
            user: {}
        }
    },
    created: async function () {
        let userId = this.$route.params.id
        let response = await UserService.getUser(userId)
        this.user = response.data
    },
}
</script>
<style>
</style>    single user