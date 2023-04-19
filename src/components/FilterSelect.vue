<template>
    <div class="container py-4 fw-bolder">
        <div class="row justify-content-between">
            <div class="col-12 col-md-4">
                <label for="selectArchetype">Search By Archetype</label>
                <select name="selectArchetype" id="selectArchetype" v-model="store.search.archetype" @change="updateCards">
                    <option selected value="">Choose...</option>
                    <option :value="archetype.archetype_name" v-for="(archetype, index) in allArchetypes" :key="index">{{ archetype.archetype_name }}</option>
                </select>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-center align-items-center text-white">
                Card Founded {{ store.allCards.length }}
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-evenly align-items-center">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <label for="selectPages">Page</label>
                    <select name="selectPages" id="selectPages" v-model="store.search.offset" @change="updateCards">
                        <option :value="page" v-for="(page, index) in store.pageNumber" :key="index">{{ page }}</option>
                    </select>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <label for="selectNums">Cards for Page</label>
                    <select name="selectNums" id="selectNums" v-model="store.search.num" @change="updateCards">
                        <option :value="number" v-for="(number, index) in nums" :key="index">{{ number }}</option>
                    </select>
                </div>
            </div>
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
                allArchetypes: [],
                nums: [],
            }
        },
        methods: {
            updateCards(){
                this.$emit("onGetCards");
            },
        },
        mounted() {
            axios.get(store.apiArchetypesUrl).then((res) => {
                this.allArchetypes = res.data;
            })
            for (let i = 50; i <= 1000; i += 50) {
            this.nums.push(i);
            }    
        }  
    }
</script>

<style lang="scss" scoped>

</style>