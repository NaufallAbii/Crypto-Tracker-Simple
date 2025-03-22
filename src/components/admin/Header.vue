<template>
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <button @click="toggleSidebar" class="md:hidden text-gray-700">
        <Bars3Icon class="size-6" />
      </button>
      <div class="ml-auto flex items-center relative space-x-4">
        <!-- Notification Bell -->
        <button type="button" class="relative rounded-full bg-white-800 p-1 text-gray-400 hover:text-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="sr-only">View notifications</span>
          <BellIcon class="size-6" aria-hidden="true" />
        </button>
  
        <!-- Profile dropdown -->
        <Menu as="div" class="relative mr-5">
          <div>
            <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">Open user menu</span>
              <img class="size-8 rounded-full" src="/bitcoin.png" alt="" />
            </MenuButton>
          </div>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden">
              <MenuItem v-slot="{ active }">
                <RouterLink to="/" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Back to main</RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink to="/admin" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink to="/admin" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink to="/admin" :class="[active ? 'bg-gray-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</RouterLink>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </header>
  </template>
  
  <script>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
  import { Bars3Icon, BellIcon } from '@heroicons/vue/24/outline';
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      Menu,
      MenuButton,
      MenuItems,
      MenuItem,
      Bars3Icon,
      BellIcon,
      RouterLink
    },
    methods: {
      toggleSidebar() {
        this.$emit("toggleSidebar");
      }
    }
  };
  </script>
  