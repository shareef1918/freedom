<template>
  <v-toolbar color="primary" fixed="fixed">
    <v-toolbar-title>
      <router-link :to="'/'" class="title" style="font-family: Merienda One">
        <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png" class="logo"/>
        Freedom
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-if="!isLoggedIn" @click.native.stop="registerDialog = true;resetRegForm()">Sign UP</v-btn>
      <v-btn flat v-if="!isLoggedIn" @click.native.stop="loginDialog = true; resetLoginForm()">Sign In</v-btn>
      <v-btn flat v-if="isLoggedIn">Welcome: {{userDetails[0].name}}</v-btn>
      <v-btn flat v-if="isLoggedIn" @click="logout">Logout</v-btn>
      <v-btn flat @click.native.stop="offers = true">Offers</v-btn>
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
    <v-dialog v-model="loginDialog" max-width="500">
    <v-card>
      <v-form v-model="valid" ref="loginForm" lazy-validation>
        <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
        ></v-text-field>
        <v-text-field
        label="Password"
        type="password"
        v-model="password"
        :rules="passwordRules"
        required
        ></v-text-field>
        <v-btn
        @click="signin"
        :disabled="!valid"
        block
        color="primary"
        >
        SIGN IN
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
  <v-dialog v-model="registerDialog" max-width="500">
    <v-card>
      <v-form v-model="valid" ref="regForm" lazy-validation>
        <v-text-field
        label="Name" 
        v-model="regName"
        :rules="nameRules"
        :counter="15"
        required
        ></v-text-field>
        <v-text-field
        label="E-mail"
        v-model="regEmail"
        :rules="emailRules"
        required
        ></v-text-field>
        <v-text-field
        label="Password"
        type="password"
        v-model="password"
        :rules="passwordRules"
        required
        ></v-text-field>
        <v-btn
        @click="signup"
        :disabled="!valid"
        block
        color="primary"
        >
        SIGN UP
        </v-btn>
      </v-form>
    </v-card>
    </v-dialog>

    <v-dialog v-model="offers" max-width="680">
      <v-card>
        <v-card-title class="headline">Attractive Offers On the way</v-card-title>
        <img src="https://png.pngtree.com/templates/md/20171221/md_5a3c02426ae79.jpg"/>
      </v-card>
    </v-dialog>

    <v-snackbar
    :timeout="timeout"
    :top=true
    v-model="snackbar"
    >
    {{message}}
    </v-snackbar>

  </v-toolbar>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      loginDialog: false,
      registerDialog: false,
      snackbar: false,
      offers: false,
      drawer: null,
      timeout: 3000,
      mini: false,
      right: null,
      valid: true,
      name: '',
      message: null,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 15 || 'Name must be less than 15 characters'
      ],
      regName: '',
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      regEmail: '',
      password: '',
      passwordRules: [
        (v) => !!v || 'Passsword is require',
        (v) => /^[a-zA-Z0-9]{6,15}$/.test(v) || 'Password must contain 6 to 15 characters'
      ],
      items: [
      { title: 'Sign In', icon: 'home' },
      { title: 'Sign Up', icon: 'dashboard' },
      { title: 'Offers', icon: 'dashboard' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'userDetails'
    ])
  },
  methods: {
    resetRegForm () {
      this.$refs.regForm.reset()
    },
    resetLoginForm () {
      this.$refs.loginForm.reset()
    },
    signup () {
      if (this.$refs.regForm.validate()) {
        let userObj = {
          name: this.regName,
          email: this.regEmail,
          password: this.password
        }
        this.$store.dispatch('registerUser', userObj)
        .then((data) => {
          if (data) {
            this.registerDialog = false
            this.snackbar = true
            this.message = 'Registered Successfully'
          } else {
            this.snackbar = true
            this.message = 'Email Already Registered'
          }
        })
      }
    },
    signin () {
      if (this.$refs.loginForm.validate()) {
        let userObj = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', userObj)
        .then((data) => {
          if (data) {
            this.snackbar = true
            this.message = 'LoggedIn Successfully'
            this.loginDialog = false
            this.$refs.loginForm.reset()
          } else {
            this.snackbar = true
            this.message = 'Please Provide Valid Credentials'
          }
        })
      }
    },
    logout () {
      this.$store.dispatch('logoutUser')
      .then((data) => {
        this.snackbar = true
        this.message = 'Logged Out Successfully'
        this.$router.push('/')
      })
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
.dialog .card{
  padding:25px;
}
.dialog-title{
  text-align: center;
  font-size: 18px;
}
.toolbar__title a{
  color: #fff;
  text-decoration: none;
  font-size: 40px !important;
}
.logo{
  height: 40px;
  width: 40px;
}
</style>

