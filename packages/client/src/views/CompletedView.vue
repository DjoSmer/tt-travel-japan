<script setup lang="ts">
import ResultItem from '@/components/ResultItem.vue';
</script>

<template>
  <ResultItem title="Thank you for your order!"
    :description="`Your order number is #${$route.params.id}. We have emailed your order confirmation and will update you as soon as your trip is ready!`" />
</template>
