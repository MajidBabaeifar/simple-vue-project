<template>
    <div class="container">
        <img v-if="isLoading" src="../assets/Loading_icon.gif" />
        <table v-if="!isLoading" class="table table-striped table-hover">
            <thead class="bg-success text-white">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address.city }}</td>
                    <td>{{ user.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { UserService } from '../services/userService'
export default {
    name: "UsersList",
    data: function () {
        return {
            isloading: true,
            users: [],
            errorMsg: ''
        }
    },
    created: async function () {
        try {
            this.isloading = true
            let response = await UserService.getAllUsers()
            this.isloading = false
            this.users = response.data
        } catch (error) {
            this.isloading = false
            this.errorMsg = error
        }
    }
}
</script>
<style>
</style>