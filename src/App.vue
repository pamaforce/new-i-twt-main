<template>
  <v-app>
    <Header @naviOpen="drawer=true"/>
    <Navigation :drawer="drawer" @naviClose="drawer=false" />
    <Footer @naviOpen="drawer=true"/>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col xl="9" lg="10" md="12" sm="12" xs="12">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Footer from '@/components/footer/footer.vue';
import Header from '@/components/header/header.vue';
import Navigation from '@/components/navigation/navagation'

export default {
  name: 'App',

  components: {
    Footer,
    Header,
    Navigation,
  },

  data: () => ({
    drawer:false
  })
};
</script>

