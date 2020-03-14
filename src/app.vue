<template>
  <v-app>
    <core-appbar></core-appbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span>Wilson Wu &copy; 2009-2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    CoreAppbar: () => import('@/components/core/Appbar.vue'),
  },

  data: () => ({
    //
  }),
};
</script>
