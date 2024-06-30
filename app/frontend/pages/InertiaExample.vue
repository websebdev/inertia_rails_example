<template>
  <Head title="Inertia + Vite Ruby + Vue Example" />

  <div class="card flex justify-center">
      <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56" />
  </div>
  Hi
  <InputOtp v-model="value" />

  <div class="card flex justify-center">
    <DatePicker v-model="date" dateFormat="dd/mm/yy" />
  </div>
  <div class="card">
      <Chart type="bar" :data="chartData" :options="chartOptions" />
  </div>
  



  <div class="root">
    <h1 class="h1">Hello {{ name }}!</h1>

    <div>
      <a href="https://inertia-rails.netlify.app" target="_blank">
        <img class="logo" :src="inertiaSvg" alt="Inertia logo" />
      </a>
      <a href="https://vite-ruby.netlify.app" target="_blank">
        <img class="logo vite" :src="viteRubySvg" alt="Vite Ruby logo" />
      </a>
      <a href="https://vuejs.org" target="_blank">
        <img class="logo vue" :src="vueSvg" alt="Vue logo" />
      </a>
    </div>

    <h2 class="h2">Inertia + Vite Ruby + Vue</h2>

    <div class="card">
      <button class="button" type="button" @click="count++">
        count is {{ count }}
      </button>
      <p>
        Edit <code>app/frontend/pages/InertiaExample.vue</code> and save to test
        HMR
      </p>
    </div>
    <p class="readTheDocs">
      Click on the Inertia, Vite Ruby, and Vue logos to learn more
    </p>
  </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import { ref, onMounted } from 'vue'

import vueSvg from '/assets/vue.svg'
import inertiaSvg from '/assets/inertia.svg'
import viteRubySvg from '/assets/vite_ruby.svg'

defineProps({
  name: String,
})

const count = ref(0)
const date = ref(0)

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

//  Below is for Chart.js plugin
onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
          {
              label: 'Sales',
              data: [540, 325, 702, 620],
              backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
              borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
              borderWidth: 1
          }
      ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder
              }
          },
          y: {
              beginAtZero: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder
              }
          }
      }
  };
}
</script>

<style scoped>
.root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #213547;
  background-color: #ffffff;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

.h2 {
  font-size: 2.6em;
  line-height: 1.1;
}

.button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
}
.button:hover {
  border-color: #646cff;
}
.button:focus,
.button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.logo {
  display: inline-block;
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #e4023baa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #41b883aa);
}

.card {
  padding: 2em;
}

.readTheDocs {
  color: #888;
}
</style>
