<template>
  <div class="flex h-screen">
    <Sidebar :sidebarOpen="sidebarOpen" @toggleSidebar="toggleSidebar"/>
    <div class="flex-1 flex flex-col overflow-y-auto">
      <!-- Header -->
      <Header @toggleSidebar="toggleSidebar" />
      <!-- Page Content -->
      <main class="p-4">
        <Chart />
      </main>
    </div>
  </div>
</template>
<script>
import Chart from '../../components/Chart.vue';
import Header from '../../components/admin/Header.vue';
import Sidebar from '../../components/admin/SideBar.vue';

export default {
components: {
  Header,
  Sidebar,
  Chart
},

data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>
<style>
    
</style>