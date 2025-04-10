<script setup>

import TheHeader from "../components/TheHeader.vue";
</script>

<template>
    <div>
        <TheHeader/>
        <div class="page-content">
          <router-view/>
        </div>
    </div>
</template>