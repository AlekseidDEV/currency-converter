<script setup>
import {useMainStore} from "../store/index.js";
import {computed} from "vue";

const store = useMainStore()

const currencyList = computed(() => {
  return Object.keys(store.currencyList).filter((key) => key.split('-')[0] === store.getCurrencyType)
})
</script>

<template>
    <div class="main-page__wrapper">
      <div >
        <h1 class="main-page__title-currency">
          1 {{ store.currentTypeCurrency.toUpperCase() }}
        </h1>
      </div>
      <h1>=</h1>
      <div>
        <p v-for="currency of currencyList">
          {{ store.currencyList[currency] }} {{ currency.split("-")[1] }}
        </p>
      </div>
    </div>
</template>

<style lang="scss">
  .main-page {
    &__wrapper {
      background: #1a1a1a;
      width: 60%;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 20px 0;
      h1, p {
        margin-bottom: 0;
      }
    }
  }
</style>