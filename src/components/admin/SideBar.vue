<template>
    <aside 
      :class="['bg-gray-800 text-white w-64 p-4 fixed z-50 inset-y-0 left-0 h-full transform', 
      sidebarOpen ? 'translate-x-0' : '-translate-x-full', 'md:translate-x-0 md:relative md:w-64']"
      class="transition-transform duration-300 ease-in-out"
    >
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">Admin</h1>
        <button @click="toggleSidebar" class="md:hidden text-white">
          ✕
        </button>
      </div>
      <nav>
        <ul>
            <RouterLink to="/admin" class="block">
        <li class="p-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
      </RouterLink>
      <RouterLink to="/table" class="block">
        <li class="p-2 hover:bg-gray-700 cursor-pointer">Table</li>
      </RouterLink>
      <RouterLink to="/chart" class="block">
        <li class="p-2 hover:bg-gray-700 cursor-pointer">Chart</li>
      </RouterLink>
      <RouterLink to="/admin" class="block">
        <li class="p-2 hover:bg-gray-700 cursor-pointer">Settings</li>
      </RouterLink>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink
    },
    props: {
      sidebarOpen: Boolean,
    },
    methods: {
      toggleSidebar() {
        this.$emit("toggleSidebar");
      }
    }
  };
  </script>
  