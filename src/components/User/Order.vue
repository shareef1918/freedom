<template>
   <v-app>
      <Header></Header>
      <v-container class="content">
          <v-snackbar
            :timeout="timeout"
            :top=true
            v-model="snackbar"
            >
            {{message}}
            </v-snackbar>
         <div class="text-xs-right" v-if="cartData.length>0">
            <v-btn fab dark @click.stop="drawer = !drawer" color="pink">
               <v-icon dark>add_shopping_cart</v-icon>
            </v-btn>
            <v-badge left>
               <span slot="badge">{{cartData.length}}</span>
               <v-icon large color="grey lighten-1"></v-icon>
            </v-badge>
         </div>
         <v-navigation-drawer
            temporary
            v-model="drawer"
            dark
            v-if="cartData.length>0"
            absolute style="width:400px">
            <v-list class="pa-1">
               <v-list-tile avatar>
                  <v-list-tile-avatar>
                      <v-icon dark>add_shopping_cart</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                     <v-list-tile-title><b>Selected Items</b></v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
            </v-list>
            <v-list class="pt-0" dense>
               <v-divider></v-divider>
               <v-list-tile v-for="item in cartData" :key="item.title">
                  <v-list-tile-action>
                     <v-icon dark>archive</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>{{item.name}} &nbsp; &nbsp; {{item.quantity}} X {{item.Pfull}} = {{item.quantity * item.Pfull}}</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
               <v-card-text>Grand Total: {{grandTotal}}</v-card-text>
            </v-list>
            <v-btn color="primary" block @click="placeOrder()">Place Order</v-btn>
         </v-navigation-drawer>
         <div>
         <v-tabs fixed>
            <v-tabs-bar class="cyan" dark>
               <v-tabs-slider class="yellow"></v-tabs-slider>
               <v-tabs-item v-for="(value,key,index) in menuForToday" class="tab-items" :key="index" :href="'#tab-'+index">
                  {{key}}
               </v-tabs-item>
            </v-tabs-bar>
            <v-tabs-items>
               <v-tabs-content  v-for="(value,key,index) in menuForToday" :key="index" :id="'tab-'+index">
                  <v-card flat>
                     <v-layout row wrap>
                        <v-flex xs12 sm6 lg3 md3 v-for="(recipes,i) in value" v-bind:src="i" :key="i">
                           <v-card>
                              <v-card-media
                                 class="white--text"
                                 height="200px"
                                 v-bind:src="recipes.src"
                                 >
                                 <v-container fill-height fluid>
                                    <v-layout fill-height>
                                       <v-flex xs12 align-end flexbox>
                                          <span class="headline">{{recipes.name}}</span>
                                       </v-flex>
                                    </v-layout>
                                 </v-container>
                              </v-card-media>
                              <v-card-title>
                                 <div>
                                    <span class="recipe-title">{{recipes.name}}</span><br>
                                    <span>Price : {{recipes.Pfull}}</span><br>
                                    <span>Whitsunday Island, Whitsunday Islands</span>
                                 </div>
                              </v-card-title>
                              <v-card-actions>
                                <v-btn color="red" block class="add-btn" @click="addItem(recipes,key)">Add</v-btn>
                              </v-card-actions>
                           </v-card>
                        </v-flex>
                     </v-layout>
                  </v-card>
               </v-tabs-content>
            </v-tabs-items>
         </v-tabs>
         </div>
      </v-container>
      <Footer></Footer>
   </v-app>
</template>

<script>
import Header from '../User/Header'
import Footer from '../User/Footer'
import Home from '../User/Home'
import { mapGetters } from 'vuex'

export default {
    name: 'Order',
    data() {
        return {
            snackbar: false,
            message: null,
            drawer: false,
            timeout: 3000,
            items: ['Lunch', 'Dinner'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    computed: {
        ...mapGetters([
            'recipes',
            'menuForToday',
            'cartData',
            'grandTotal',
            'isLoggedIn'
        ])
    },
    methods: {
        addItem(item, type) {
            item.type = type;
            this.$store.dispatch('addItem', item)
                .then((data) => {
                    this.snackbar = true
                    this.message = "Cart Updated Successfully"
                })
        },
        placeOrder() {
            console.log(this.$store.state.isLoggedIn)
            this.$store.dispatch('placeOrder')
                .then((data) => {
                    console.log(data)
                })
        }
    },
    components: { Header, Footer, Home }
}
</script>

<style scoped>
.content {
  margin-top: 60px !important;
}
.tab-items {
  font-weight: bold !important;
}
.recipe-title {
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: brown;
}
.add-btn {
  color: #fff;
  font-weight: bold;
}
.flex {
  padding: 10px;
}
</style>
