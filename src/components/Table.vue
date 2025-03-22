<template>
    <div class="max-w-[1400px] mx-5 my-10 md:my-10 md:mx-10 lg:my-10 lg:mx:auto xl:my-10 xl:mx-auto">

   <div class="w-full mb-3 mt-1 pl-3">
       <div>
           <h3 class="text-lg font-semibold text-slate-800">Crypto Market Table</h3>
       </div>
   </div>
   
   <!-- Tabel -->
   <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
   <table class="w-full text-left table-auto min-w-max">

       <thead>
       <tr>
           <th class="p-4 border-b border-slate-200 bg-slate-50">
           <p class="text-sm font-normal leading-none text-slate-500">
               Name
           </p>
           </th>
           <th class="p-4 border-b border-slate-200 bg-slate-50">
           <p class="text-sm font-normal leading-none text-slate-500">
               Current Price (USD)
           </p>
           </th>
           <th class="p-4 border-b border-slate-200 bg-slate-50">
           <p class="text-sm font-normal leading-none text-slate-500">
               Market Cap
           </p>
           </th>
           <th class="p-4 border-b border-slate-200 bg-slate-50">
           <p class="text-sm font-normal leading-none text-slate-500">
               Market Cap Rank
           </p>
           </th>
           <th class="p-4 border-b border-slate-200 bg-slate-50">
           <p class="text-sm font-normal leading-none text-slate-500">
               Price Change (24h)
           </p>
           </th>
       </tr>
       </thead>

       <tbody>
        <tr v-for="coin in paginatedData" :key="coin.id" class="hover:bg-slate-50 border-b border-slate-200">
            <td class="p-4 py-5">
                <p class="block font-semibold text-sm text-slate-800">{{ coin.name }}</p>
            </td>
            <td class="p-4 py-5">
                <p class="text-sm text-slate-500">{{ coin.current_price?.toLocaleString() || '-' }}</p>
            </td>
            <td class="p-4 py-5">
                <p class="text-sm text-slate-500">{{ coin.market_cap?.toLocaleString() || '-' }}</p>
            </td>
            <td class="p-4 py-5">
                <p class="text-sm text-slate-500">{{ coin.market_cap_rank || '-' }}</p>
            </td>
            <td class="p-4 py-5" :class="coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'">
                <p class="text-sm">{{ coin.price_change_percentage_24h?.toFixed(2) || '0.00' }}%</p>
            </td>
        </tr>

       
       <tr v-if="loading">
            <td colspan="5" class="p-4 text-center">Loading data...</td>
        </tr>
        <tr v-else-if="coins.length === 0">
            <td colspan="5" class="p-4 text-center">No data available.</td>
        </tr>
       </tbody>

   </table>

   <!-- Pagination -->
   <div class="flex justify-between items-center px-4 py-3">
       <div class="text-sm text-slate-500">
        Showing {{ startIndex + 1 }} - {{ endIndex }} of {{ totalItems }}
       </div>
       <div class="flex space-x-1">
       <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
           Prev
       </button>
       <button 
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="{ 'font-bold': currentPage === page }" class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
          {{ page }}
       </button>
       <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
           Next
       </button>
       </div>
   </div>
   </div>
   

</div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

    const coins = ref([]);
    const loading = ref(true);
    const currentPage = ref(1);
    const itemsPerPage = 10;
    const totalPages = 5;

    // Fetch data dari API CoinGecko
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: itemsPerPage * totalPages, // 50 data (10 x 5 halaman)
            page: 1,
          },
        });
        console.log(response.data); // Cek data di konsol
        coins.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    // Hitung indeks data untuk pagination
    const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
    const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage, coins.value.length));
    const totalItems = computed(() => coins.value.length);

    // Data sesuai halaman
    const paginatedData = computed(() => coins.value.slice(startIndex.value, endIndex.value));

    // Navigasi halaman
    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };
    const nextPage = () => {
      if (currentPage.value < totalPages) currentPage.value++;
    };

    onMounted(fetchData);


</script>
