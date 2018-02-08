<template>
  <v-toolbar color="primary" fixed="fixed">
    <v-toolbar-title>FREEDOM</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click.native.stop="registerDialog = true">Sign UP</v-btn>
      <v-btn flat @click.native.stop="loginDialog = true">Sign In</v-btn>
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

    <v-dialog v-model="offers" max-width="500">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
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
  methods: {
    signup () {
      if (this.$refs.regForm.validate()) {
        let userObj = {
          name: this.regName,
          email: this.regEmail,
          password: this.password
        }
        this.$store.dispatch('registerUser', userObj)
        this.registerDialog = false
        this.snackbar = true
        this.message = 'Registered Successfully'
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
          if (data.length) {
            this.snackbar = true
            this.message = 'LoggedIn Successfully'
            this.loginDialog = false
          } else {
            this.snackbar = true
            this.message = 'Please Provide Valid Credentials'
          }
        })
      }
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
</style>

