<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';

interface Props {
  title: string;
  description: string;
}

const { title, description } = defineProps<Props>();

const router = useRouter();

const handlerClick = () => {
  router.push('/');
}
</script>

<template>
  <main>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>

    <Button type="button" label="Come back" @click="handlerClick" />

  </main>
</template>

<style scoped>
main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

h4 {
  font-size: 2rem;
  font-weight: 600;
}

p {
  margin-bottom: 2rem;
}
</style>
