import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const useMainStore = defineStore("mainStore", () => {
    // state
    const currencyList = ref({})

    const acceptCurrencyTypes = ['rub', 'usd', 'eur']
    const currentTypeCurrency = ref('usd')

    // actions
    const createCurrencyList = (data) => {
        for(let item of Object.entries(data)){
            if(acceptCurrencyTypes.includes(item[0].split("-")[0])
                && acceptCurrencyTypes.includes(item[0].split("-")[1]))
            {
                currencyList.value[item[0]] = item[1]
            }
        }
    }

    // getter
    const getCurrencyType = computed(() => currentTypeCurrency.value)

    return {
        currencyList,
        currentTypeCurrency,
        getCurrencyType,
        createCurrencyList
    }
})