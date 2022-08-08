<template>
    <div class="container">
        <div class="row">
            <div class="col my-5">
                <div class="text-muted my-2">this is a counter</div>
                <div class="badge rounded-pill bg-dark text-white">
                    {{ count }}
                </div>
                <button class="btn btn-success mx-5" @click="inc(1)">increase</button>
                <button class="btn btn-warning" @click="dec()">decrease</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CounterComponent",
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        inc: function (payload) {
            this.count = this.count + payload
        },
        dec: function () {
            if (this.count > 0) {
                this.count = this.count - 1
            }
        }
    },
}
</script>
<style>
</style>