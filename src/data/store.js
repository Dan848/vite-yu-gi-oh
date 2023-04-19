import { reactive } from "vue";

export const store = reactive({
    allCards: [],
    apiCardsUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
    apiArchetypesUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    loading: false,
})