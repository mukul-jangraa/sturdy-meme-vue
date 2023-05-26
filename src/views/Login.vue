<template>
  <v-main >
    <!-- <v-navigation-drawer v-model="state.sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in state.menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    <v-toolbar class="bg-grey-darken-4" app>
      <span class="hidden-sm-and-up">
        <!-- <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon> -->
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer; text-decoration: none; font-weight: 500; color: #fff">
          {{ state.appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in state.menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <Login/>
    </v-container>
  </v-main>
  </template>

<script setup>
import axios from 'axios';
import Login from '../components/Login.vue'
import { reactive } from 'vue'

const state = reactive({
  appTitle: "DD",
  sidebar: false,
  menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/take-your-first-step-to-multiverse', icon: 'face' },
          { title: 'Sign In', path: '/continue-from-where-you-left', icon: 'lock_open' }
     ]
})

</script>

<style scoped>
.v-main {
  background: linear-gradient(-45deg, #dddddd, #252525);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
	min-height: 100vh;

}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
