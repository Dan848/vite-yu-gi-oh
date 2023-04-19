:<template>
    <AppHeader />
    <main class="px-md-5 px-sm-4 px-0">
      <FilterSelect />
      <CardList />
    </main>
    
</template>

<script>
  import { store } from "./data/store.js";
  import axios from 'axios';
  import AppHeader from "./components/AppHeader.vue";
  import FilterSelect from "./components/FilterSelect.vue"
  import CardList from "./components/CardList.vue";
  export default {
    name: "App",
    components: {
      AppHeader,
      FilterSelect,
      CardList
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getAllCards() {
        store.loading = true
        axios.get(store.apiCardsUrl).then((res) => {
          store.allCards = res.data.data.map((card) => {
            return {
              ...card,
              archetype: card.archetype || "Undefined"
            }
          });
          store.loading = false
          console.log(store.allCards)
        })
      }
    },
    mounted() {
      this.getAllCards()
    }  
  }
</script>

<style lang="scss" scoped>
  main {
    background-color: #d48f38;
  }
</style>