<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <SideBar :sidebarOpen="sidebarOpen" @toggleSidebar="toggleSidebar" />
    <div class="flex-1 flex flex-col overflow-y-auto">
      <!-- Header -->
      <Header @toggleSidebar="toggleSidebar" />
      
      <!-- Page Content -->
      <main class="p-4">
        <h2 class="text-2xl font-semibold">Welcome to the Admin Dashboard</h2>
        <Table />
        <Chart />
      </main>
    </div>
  </div>
</template>
  
<script >
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/vue/24/outline';
import Table from '../../components/Table.vue';
import Chart from '../../components/Chart.vue';
import Header from '../../components/admin/Header.vue';
import SideBar from '../../components/admin/SideBar.vue';
export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Bars3Icon,
    XMarkIcon,
    BellIcon,
    Table,
    Chart,
    Header,
    SideBar,
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
  
<style scoped>
  
</style>
