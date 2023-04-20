import { reactive } from "vue";

export const store = reactive({
    allCardsShowed: [],
    allCards: [],
    totalPages: 0,
    cardFounded: 0,
    apiCardsUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    apiArchetypesUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    loading: false,
    search: {
        num: 50,
        offset: 0,
        archetype: ""
    }
})