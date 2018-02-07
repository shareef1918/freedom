<template>
  <v-toolbar color="primary" fixed="fixed">
    <v-toolbar-title>FREEDOM</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Sign UP</v-btn>
      <v-btn flat>Sign In</v-btn>
      <v-btn flat>Offers</v-btn>
    </v-toolbar-items>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      dark
      absolute
    >
    <v-toolbar-title class="mobile-title">FREEDOM</v-toolbar-title>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: null,
      mini: false,
      right: null,
      items: [
        { title: 'Sign In', icon: 'home' },
        { title: 'Sign Up', icon: 'dashboard' },
        { title: 'Offers', icon: 'dashboard' }
      ]
    }
  }
}
</script>

<style scoped>
.btn--flat, .toolbar__title{
    color: #fff;
}
.icon{
    color:#fff !important;
}
.navigation-drawer{
    height:1000px !important;
}
.list li{
    border-bottom: 1px solid silver;
}
.mobile-title{
    padding: 20px;
}
</style>
