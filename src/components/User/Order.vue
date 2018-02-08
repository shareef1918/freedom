<template>
  <v-app>
    <Header></Header>
    <v-container class="content">
        <v-tabs fixed>
            <v-tabs-bar class="cyan" dark>
            <v-tabs-slider class="yellow"></v-tabs-slider>
            <v-tabs-item class="tab-items"
                v-for="(value,key,index) in menuForToday"
                :key="index"
                :href="'#tab-' + index"
            >
            {{key}}
            </v-tabs-item>
            </v-tabs-bar>
            <v-tabs-items>
            <v-tabs-content
                v-for="(value,key,index) in menuForToday"
                :key="index"
                :id="'tab-' + index"
            >
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
                                    <span class="recipe-title">Number 10</span><br>
                                    <span>Price : 1000</span><br>
                                    <span>Whitsunday Island, Whitsunday Islands</span>
                                </div>
                                </v-card-title>
                                <v-card-actions>
                                <v-btn flat color="orange">Share</v-btn>
                                <v-btn flat color="orange">Explore</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
    </v-container>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '../User/Header'
import Footer from '../User/Footer'
import Home from '../User/Home'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Order',
  data () {
    return {
      items: ['Lunch', 'Dinner'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    ...mapGetters([
      'recipes',
      'menuForToday'
    ])
  },
  components: { Header, Footer, Home }
}
</script>

<style scoped>
.content{
    margin-top: 60px !important;
}
.tab-items{
    font-weight: bold !important;
}
.flex{
    padding: 10px
}
</style>
