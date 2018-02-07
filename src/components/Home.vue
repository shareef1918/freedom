<template>
<div>
  <div class="container">
    <v-carousel>
        <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
    <div class="categories">
        <h2>CATEGORIES {{count}}</h2>
    </div>
    <div>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 md3 v-for="(category,i) in categories" v-bind:src="i" :key="i">
            <v-card>
                <v-card-media
                class="white--text"
                height="200px"
                v-bind:src="category.src"
                >
                <v-container fill-height fluid>
                    <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-card-media>
                <v-card-title>
                <div>
                    <span class="grey--text">Number 10</span><br>
                    <span>Whitehaven Beach</span><br>
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
             <img src="http://box8.in/images/phone.2a6bf9f7.png"/>
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
export default {
  name: 'Home',
  methods: {
    increment: () => {
      this.$store.dispatch('increment')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  data () {
    return {
      items: [
        {
          src: 'https://www.cicis.com/media/1413/2ppr_websitecarousel_3200x1992.jpg?width=1920&quality=50'
        },
        {
          src: 'https://www.kayemfoods.com/images/default-source/kayem-foods-carousel/corp-websiteredesign_carousel-r6-af.jpg?sfvrsn=0'
        },
        {
          src: '//img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/64/85/478021799.jpg'
        },
        {
          src: 'https://www.novozymes.com/-/media/Project/Novozymes/Website/website/advance-your-business/Baking/Baking_D_Carousel_4_Is_Acrulamide_regulated_1200x800.jpg?h=800&la=en&w=1200'
        }
      ],
      categories: [
        {
          src: 'https://www.cicis.com/media/1413/2ppr_websitecarousel_3200x1992.jpg?width=1920&quality=50'
        },
        {
          src: 'https://www.kayemfoods.com/images/default-source/kayem-foods-carousel/corp-websiteredesign_carousel-r6-af.jpg?sfvrsn=0'
        },
        {
          src: '//img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/64/85/478021799.jpg'
        },
        {
          src: 'https://www.novozymes.com/-/media/Project/Novozymes/Website/website/advance-your-business/Baking/Baking_D_Carousel_4_Is_Acrulamide_regulated_1200x800.jpg?h=800&la=en&w=1200'
        },
        {
          src: 'http://wirally.com/wp-content/uploads/2016/01/hdwallpaperbackgrounds-net-534x300.jpg'
        },
        {
          src: 'https://s4.scoopwhoop.com/son/t/t3.jpg'
        },
        {
          src: 'http://www.smartcityfood.in/media/catalog/product/cache/24/image/800x600/f31b0cfd465b5145025020710a9577fb/c/h/chicken-pakoda.jpg'
        },
        {
          src: 'http://hdwallpapers.move.pk/wp-content/uploads/2015/02/hot-pizza.jpg'
        }
      ],
      features: [
        {
          src: 'https://box8.in/images/features/1.492a0457.png',
          text: 'India\'s Fastest Growing Food Start-up'
        },
        {
          src: 'https://box8.in/images/features/2.9b0e7a5a.png',
          text: 'Food For Every Kind Of Hunger'
        },
        {
          src: 'https://box8.in/images/features/3.a51696c8.png',
          text: 'Late Night Delivery'
        },
        {
          src: 'https://box8.in/images/features/4.734cc3cb.png',
          text: 'Free One Hour Delivery'
        },
        {
          src: 'https://box8.in/images/features/5.9c8fdb12.png',
          text: 'Order On Web / App'
        },
        {
          src: 'https://box8.in/images/features/6.2a2d0203.png',
          text: 'Party / Bulk Order Experts'
        }
      ]
    }
  }
}
</script>

<style>
.carousel{
    margin-top: 60px;
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
    padding-left: 10%;
}
.store img{
    height: 150px;
    margin-top: 10px;
}
</style>
