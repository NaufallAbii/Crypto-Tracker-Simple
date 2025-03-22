<template>
  <div class="flex h-screen">
    <Sidebar :sidebarOpen="sidebarOpen" @toggleSidebar="toggleSidebar" />
    <div class="flex-1 flex flex-col overflow-y-auto">
      <!-- Header -->
      <Header @toggleSidebar="toggleSidebar" />
      <!-- Page Content -->
      <main class="p-4">
        <Table />
      </main>
    </div>
  </div>
</template>
<script>
import Table from '../../components/Table.vue';
import Header from '../../components/admin/Header.vue';
import Sidebar from '../../components/admin/SideBar.vue';
export default {
components: {
  Table,
  Header,
  Sidebar,
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