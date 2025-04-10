<script setup>
import {selectOptions} from "../utils/constants.js";
import {useMainStore} from "../store/index.js";

import { ref } from "vue";

const store = useMainStore()

const firstSelectValue = ref('usd')
const secondSelectValue = ref('rub')

const firstInputValue = ref(0);
const secondInputValue = ref(0)

const previosSelectValues = [firstSelectValue.value, secondSelectValue.value]

const changeInputValue = (e, numInput) => {
  if(numInput === 0){
    secondInputValue.value = Math.floor(e.target.value * store.currencyList[`${firstSelectValue.value}-${secondSelectValue.value}`] * 100) / 100
  }else {
    firstInputValue.value = Math.floor(e.target.value / store.currencyList[`${firstSelectValue.value}-${secondSelectValue.value}`] * 100) / 100
  }
}

const changeSelectValue = (numSelect) => {
  if(firstSelectValue.value === secondSelectValue.value){
    firstSelectValue.value = firstSelectValue.value === previosSelectValues[0] ? previosSelectValues[1] : previosSelectValues[0]
  }else  {
    previosSelectValues[0] = firstSelectValue.value
    previosSelectValues[1] = secondSelectValue.value
  }

  secondInputValue.value = Math.floor(firstInputValue.value * store.currencyList[`${firstSelectValue.value}-${secondSelectValue.value}`] * 100) / 100
}
</script>

<template>
    <div class="convert-currency-page__wrapper">
      <div class="convert-currency-page__dropdown">
        <a-input
            type="number"
            v-model:value="firstInputValue"
            @input="changeInputValue($event, 0)"
        />
        <a-select
            v-model:value="firstSelectValue"
            :options="selectOptions"
            @change="changeSelectValue"
        />
      </div>
      <div class="convert-currency-page__dropdown">
        <a-input
            type="number"
            v-model:value="secondInputValue"
            @input="changeInputValue($event, 1)"
        />
        <a-select
            v-model:value="secondSelectValue"
            :options="selectOptions"
            @change="changeSelectValue"
        />
      </div>
    </div>
</template>

<style lang="scss">
.convert-currency-page {
  &__wrapper {
    background: #1a1a1a;
    width: 60%;
    padding: 20px 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px 0;
  }
  &__dropdown {
    .ant-select {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>