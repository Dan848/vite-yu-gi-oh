<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="image">
                <img :src="image" :alt="name">
            </div>
            <div class="text">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from "../data/store"
    export default {
        name: "CardUnit",
        props: {
            image: String,
            name: String
        }, 
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>