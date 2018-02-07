<template>
  <v-app>
    <Header></Header>
    <v-content>
     <Home/>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '../User/Header'
import Footer from '../User/Footer'
import Home from '../User/Home'

export default {
  name: 'user-dashboard',
  components: { Header, Home, Footer }
}
</script>