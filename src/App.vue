<template>
  <v-app>
    <Header></Header>
    <v-content>
      <router-view/>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  data () {
    return {
    }
  },
  name: 'App',
  components: { Header, Footer }
}
</script>
