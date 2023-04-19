<template>
    <div class="container">
        <div class="row">
            <CardUnit v-for="(card, index) in store.allCardsShowed" :key="card.id" :image="card.card_images[0].image_url" :name="card.name" :archetype="card.archetype"/>
        </div>
        
    </div>
</template>

<script>
    import CardUnit from "./CardUnit.vue";
    import { store } from "../data/store";
    export default {
        name : "CardList",
        components: {
            CardUnit
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        background-color: #fff;
    }
</style>