<template>
  <v-app id="inspire">
    <v-navigation-drawer
    dark
      fixed
      clipped
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile @click="changeRoute(menu)" :class="{ 'active': activeLink(menu.link) }" v-for="menu in menuItems" :key="menu.icon">
          <v-list-tile-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{menu.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
     
    <v-toolbar  clipped-left color="indigo" dark fixed app>
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>FREEDOM</v-toolbar-title>
     <v-layout d-flex >
       <v-menu align-content-end offset-y v-model="showMenu" absolute full-width transition="slide-x-transition"
      bottom
      right>
          
      <v-card class="portrait logo" img="src/assets/logo.jpg" height="32px" slot="activator"></v-card>
      <v-list>
        <v-list-tile v-for="(item,index) in items" :key="index" v-on:click="logout()">
          <v-list-tile-title >{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-layout> 
      
       
     </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center
        
        >
         
         <router-view/>
        </v-layout>
      </v-container>
    </v-content>
 
  </v-app>
</template>

<script>
export default {
  name: 'dashboard',
  data: () => ({
    showMenu: true,
    currentRoute: 'dashboard',
    items: [
      { title: 'Log Out' }
    ],
    drawer: null,
    defaultImage: 'src/assets/logo.jpg',
    menuItems: [
      { index: 0, name: 'Dashboard', icon: 'dashboard', link: 'admin-home' },
      { index: 1, name: 'Users', icon: 'face', link: 'users' },
      { index: 2, name: 'Menu', icon: 'format_list_numbered', link: 'admin-menu' },
      { index: 3, name: 'Offers', icon: 'star', link: 'offers' },
      { index: 4, name: 'Analytics', icon: 'donut_small', link: 'analytics' }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    // userData() {
    //   return this.$store.getters.getUserData;
    // },
  },
  created () {
    // const token = localStorage.getItem('id_token');
    // if (token && typeof (token) !== 'string') {
    //   this.$router.push({ name: 'login' });
    // }
  },
  mounted () {
    // this.$store.dispatch('updateUserDataAction', JSON.parse(window.localStorage.getItem('userObj')));
  },
  methods: {
    activeLink (link) {
      // if (this.$route.fullPath.indexOf(link) > 0) {
      //   return true;
      // } else { //eslint-disable-line
      //   return false;
      // }
    },
    logout () {
      // window.localStorage.removeItem('id_token');
      // window.localStorage.removeItem('userObj');
      // window.location.href = `${window.location.origin}/#/login`;
    },
    changeRoute (item) {
      this.currentRoute = item.link
      this.$router.push({ name: item.link })
    }
  }
}
</script>
<style>
.menu {
  max-width: 32px;
  margin-left: 90%;
}
.logo {
  border-radius: 50% !important;
}
.active {
  background-color: #6c6a984d;
}

.customToolbar {
  background-color: #0b175a !important;
  border-color: #3f51b5 !important;
}
</style>
