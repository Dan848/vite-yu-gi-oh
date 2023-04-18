import { reactive } from "vue";

export const store = reactive({
    allCards: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
})