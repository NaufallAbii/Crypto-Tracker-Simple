<template>
    <NavBar />
  <div class="overflow-hidden bg-white py-26 sm:py-17">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-gray-800">About Crypto Tracker</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Monitor and Analyze Cryptocurrency in Real-Time
            </p>
            <p class="mt-6 text-lg/8 text-gray-600">
              Crypto Tracker is a powerful tool that allows you to monitor cryptocurrency prices, market capitalization, and price changes in real-time. Stay informed and make better investment decisions with comprehensive and accurate data from the evolving digital asset market.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img src="/tracker.png"
          alt="Crypto Tracker Screenshot"
          class="w-[48rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="1216" height="721" />
      </div>
    </div>
  </div>

</template>
<script setup>
import { ChartBarIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/vue/20/solid'
import NavBar from '../components/NavBar.vue'

const features = [
  {
    name: 'Real-Time Market Data',
    description:
      'Access up-to-date cryptocurrency prices, market cap, and trading volume, helping you track the latest trends instantly.',
    icon: ChartBarIcon,
  },
  {
    name: 'Multi-Currency Support',
    description:
      'Track popular cryptocurrencies such as Bitcoin, Ethereum, and other altcoins in multiple fiat currencies for better analysis.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Secure and Reliable',
    description:
      'We use encrypted connections and trusted APIs to ensure the accuracy of the data and maintain the security of your information.',
    icon: ShieldCheckIcon,
  },
];
</script>
