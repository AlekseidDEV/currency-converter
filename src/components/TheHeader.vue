<script setup>
import {useMainStore} from "../store/index.js";
import {ref} from "vue";
import {selectOptions} from "../utils/constants.js";

const store = useMainStore()

const typeCurrency = ref(store.getCurrencyType)

const changeTypeCurrency = () => store.currentTypeCurrency = typeCurrency.value
</script>

<template>
    <div class="the-header__wrapper">
        <div class="the-header__links">
          <router-link to="/">
            Главная
          </router-link>
          <router-link to="/convert">
            Конвертация
          </router-link>
        </div>
      <div class="the-header__select-wrapper">
        <a-select
            v-model:value="typeCurrency"
            :options="selectOptions"
            @change="changeTypeCurrency"
        ></a-select>
      </div>
    </div>
</template>

<style scoped lang="scss">
  .the-header {
    &__wrapper {
      padding: 10px 30px;
      border-radius: 8px;
      background: #1a1a1a;
      display: flex;
      justify-content: space-between;
    }
    &__links {
      display: flex;
      align-items: center;
      a {
        margin-right: 20px;
      }
    }
    &__select-wrapper {
      max-width: 150px;
      width: 100%;

      .ant-select {
        width: inherit;
      }
    }
  }
</style>