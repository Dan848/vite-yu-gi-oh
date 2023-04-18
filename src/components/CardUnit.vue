<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center">
        <div class="card-box mb-4">
            <div>
                <img class="img-fluid" :src="image" :alt="name">
            </div>
            <div class="card-box-text text-center d-flex flex-column justify-content-between pt-3 px-1">
                <div class="fw-bold text-white">
                    {{ name }}
                </div>
                <div class="pb-1">
                    {{ archetype }}
                </div>
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
            name: String,
            archetype: String
        }, 
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-box{
        max-width: 168px;
        .card-box-text{
            background-color: #d48f38;
            height: 115px;
            div.pb-1{
                font-weight: 500;
            }
        }

    }
</style>