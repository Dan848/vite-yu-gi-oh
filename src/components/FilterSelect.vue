<template>
    <div class="container py-4">
        <div class="">
            <select name="selectArchetype" id="selectArchetype">
                <option selected value="">Choose...</option>
                <option :value="archetype.archetype_name" v-for="(archetype, index) in allArchetypes" :key="index">{{
                        archetype.archetype_name }}</option>
            </select>
        </div>
        
    </div>
</template>

<script>
    import axios from "axios";
    import { store } from "../data/store";
    export default {
        name : "FilterSelect",
        data(){
            return {
                store,
                allArchetypes: []
            }
        },
        mounted() {
            axios.get(store.apiArchetypesUrl).then((res) => {
                this.allArchetypes = res.data;
                console.log(this.allArchetypes)
            })
        }  
    }
</script>

<style lang="scss" scoped>

</style>