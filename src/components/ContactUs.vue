<template>
    <div class="container my-3">
        <form @submit.prevent="submit">
            <input class="my-2 mx-5 w-50 form-control" type="text" v-model="user.name" placeholder="enter name" />
            <input class="my-2 mx-5 w-50 form-control" type="text" v-model="user.lastname"
                placeholder="enter last name" />
            <input class="my-2 mx-5 w-50 form-control" type="number" v-model="user.nationalCode" />
            <input class="my-2 mx-5 w-50 form-control" type="date" v-model="user.birthDate" />
            <button class="btn btn-warning" type="sumbit">submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'ContactUs',
    data: function () {
        return {
            user: {
                name: '',
                nationalCode: 0,
                birthDate: new Date(),
                lastname: ''
            }
        }
    },
    methods: {
        submit: function () {
            console.log(this.user);
        }
    },
}
</script>
<style>
</style>