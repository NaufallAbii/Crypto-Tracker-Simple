<template>
  <div
    class="max-w-[1400px] mx-5 my-10 md:mx-10 lg:mx-auto xl:mx-auto border border-slate-200 rounded-2xl bg-white px-5 pb-5 pt-5 sm:px-6 sm:pt-6"
  >
    <div class="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
      <div class="w-full">
        <h3 class="text-lg font-semibold text-gray-800">Crypto Market Graph</h3>
        <p class="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Live cryptocurrency price trends
        </p>
      </div>
    </div>
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartThree" class="-ml-4 min-w-[1000px] xl:min-w-full pl-2">
        <VueApexCharts type="line" height="310" :options="chartOptions" :series="series" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const series = ref([])
const chartOptions = ref({
  chart: { type: 'line', toolbar: { show: false } },
  colors: ['#FF5733', '#33FF57', '#3357FF'], // Warna berbeda untuk tiap koin
  stroke: { curve: 'smooth', width: 2 },
  xaxis: { type: 'datetime' },
  yaxis: [
    {
      title: { text: 'Bitcoin Price (USD)' },
      opposite: false,
      labels: { formatter: (value) => `$${value.toFixed(0)}` },
    },
    {
      title: { text: 'Ethereum & Binance Price (USD)' },
      opposite: true,
      labels: { formatter: (value) => `$${value.toFixed(2)}` },
    },
  ],
  tooltip: {
    y: {
      formatter: (value) => `$${value.toFixed(2)}`, // Menampilkan harga dengan 2 desimal
    },
  },
})

const fetchCryptoData = async () => {
  try {
    const coins = ['bitcoin', 'ethereum', 'binancecoin']
    const fetchedSeries = []

    for (let i = 0; i < coins.length; i++) {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coins[i]}/market_chart?vs_currency=usd&days=7`
      )
      const data = await response.json()

      fetchedSeries.push({
        name: coins[i].charAt(0).toUpperCase() + coins[i].slice(1),
        data: data.prices.map((entry) => ({
          x: new Date(entry[0]).toISOString(), // Timestamp
          y: entry[1], // Harga
        })),
      })
    }

    series.value = fetchedSeries
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(fetchCryptoData)
</script>

<style scoped>
.area-chart {
  width: 100%;
}
</style>
