<script setup lang='ts'>
import type { InputHTMLAttributes } from 'vue';


interface Props extends /* @vue-ignore */ InputHTMLAttributes {
    label?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    error?: string;
}

const { label: defLabel, error, ...props } = defineProps<Props>();
const value = defineModel()

const label = defLabel && `${defLabel}${props.required ? ' *' : ''}`;
const id = crypto.randomUUID().split('-')[0];
</script>

<template>
    <label :for="id" class="form-label">{{ label }}</label>
    <input v-bind="props" :id="id" v-model="value">
    <div class="error-message" :hidden="!error">{{ error }}</div>
</template>


<style scoped>
input {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-clip: padding-box;
    border: 1px solid #dee2e6;
    border-radius: .3rem;
}

.error-message {
    width: 100%;
    margin-top: .25rem;
    font-size: .875em;
    color: #dc3545;
}
</style>
