<script setup lang='ts'>
import type { ButtonHTMLAttributes } from 'vue';

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
    label: string;
}

const { label, ...props } = defineProps<Props>();

</script>

<template>
    <button v-bind="props">{{ label }}</button>
</template>

<style scoped>
button {
    background-color: hsla(160, 100%, 37%, 1);
    box-shadow: none;
    border: 1px solid hsla(160, 100%, 37%, 1);
    border-radius: .3rem;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    width: 400px;
    height: 50px;
    cursor: pointer;
}

button:hover {
    background-color: rgb(0, 169, 113);
}
</style>
