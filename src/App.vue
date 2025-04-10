<script setup>
import {getCurruncyList} from "./api/currency.api.js";
import {useMainStore} from "./store/index.js";

import {computed, onMounted} from "vue";

const store = useMainStore()

const isShowAppContent = computed(() => Object.keys(store.currencyList).length !== 0)

onMounted( async () => {
  const { data, error } = await getCurruncyList()

  if(error){
    alert('Произошла ошибка во время получения данных')
  }else {
    store.createCurrencyList(data)
  }
})
</script>

<template>
  <div v-if="isShowAppContent">
    <router-view/>
  </div>
  <div v-else>
    <a-spin size="large"/>
  </div>
</template>

<style scoped>

</style>
