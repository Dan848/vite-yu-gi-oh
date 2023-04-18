:<template>
    <AppHeader />
    <main>
      <CardList />
    </main>
    
</template>

<script>
  import { store } from "./data/store.js"
  import axios from 'axios';
  import AppHeader from "./components/AppHeader.vue"
  import CardList from "./components/CardList.vue";
  export default {
    name: "App",
    components: {
      AppHeader,
      CardList
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getAllCards() {
        axios.get(store.apiUrl).then((res) => {
          store.allCards = res.data.data
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

</style>