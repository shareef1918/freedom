<template>
<div>
  <div class="container">
    <v-carousel>
        <v-carousel-item v-for="(carousel,i) in carousels" v-bind:src="carousel.src" :key="i"></v-carousel-item>
    </v-carousel>

    <div class="order-div elevation-10 red lighten-1" xs12 sm12 lg12 md12>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg8 md8>
            <p class="order-open">Order Are Opens For Delicious Lunch & Dinner</p>
        </v-flex>
        <v-flex xs12 sm6 lg4 md4>
            <router-link :to="'order'">
              <img src="http://www.northstarfootball.com/images/ordernow.png" width="200px" height="80px" class="order-img"/>
            </router-link>
        </v-flex>
      </v-layout>
    </div>

    <div class="categories">
        <h2>RECIPES</h2>
    </div>
    <div>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 md3 v-for="(recipes,i) in recipes" v-bind:src="i" :key="i">
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
                    <span class="grey--text">Number 10</span><br>
                    <span><strong>Price</strong> {{recipes.Pfull}}</span><br>
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
    </div>
    <div class="categories">
        <h2>Features</h2>
    </div>
    <div style="background:#fff">
        <v-layout row wrap>
            <v-flex xs12 sm6 lg4 md4 v-for="(feature,i) in features" v-bind:src="i" :key="i">
                <div style="text-align:center">
                    <img :src="feature.src" class="feature-img"/>
                    <p>{{feature.text}}</p>
                </div>
            </v-flex>
      </v-layout>
    </div>
  </div>
  <div class="first-order-div" xs12 sm12 lg12 md12 >
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 md3 class="phone-pic">
             <img src="http://www.gocibo.in/images/banner-mobiles1.png" height="180px"/>
        </v-flex>
        <v-flex xs12 sm6 lg3 md3>
            <p class="offers-p">Avail attractive offers on your first order. Order today!</p>
        </v-flex>
        <v-flex xs12 sm6 lg3 md3 class="store">
             <img src="https://muchoburrito.com/mucho-content/uploads/2017/06/unnamed2.png "/>
        </v-flex>
        <v-flex xs12 sm6 lg3 md3 class="store">
             <img src="https://barburrito.co.uk/wp-content/uploads/2015/07/Burrito-Bowl.png"/>
        </v-flex>
      </v-layout>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'carousels',
      'recipes',
      'features',
      'count',
      'menuForToday',
      'isLoggedIn'
    ])
  },
  methods: mapActions([
    'increment'
  ])
}
</script>

<style>
.carousel{
    margin-top: 60px;
    margin-bottom: 20px;
}
.categories h2{
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    padding-bottom: 5px;
    text-transform: uppercase;
    color: #323232;
    border-bottom: 2px solid #da3939;
    text-align: center;
    margin-top:30px;
    margin-bottom: 20px;
}
.flex{
    padding: 10px;
}
.feature-img{
    width: 40%;
    height: 40%;
}
.first-order-div{
    background: #da3939;
}
.offers-p{
    font-size: 22px;
    font-style: italic;
    margin-top: 35px;
    text-align: center;
    color: #fff;
}
.phone-pic{
    padding-left: 8%;
}
.order-img:hover{
    cursor: pointer;
}
.order-open{
    color:#fff;
    font-style: italic;
    font-size: 30px;
    padding-top: 10px;
    margin-left: 50px;
    font-weight: bold;
}
.store img{
    height: 150px;
    margin-top: 10px;
}
</style>
