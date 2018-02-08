<template>
<div>
  <h1 style="text-align:center">Orders</h1>
      <v-data-table v-model="selected" v-bind:headers="headers" v-bind:items="orders" v-bind:pagination.sync="pagination"
      item-key="name" class="elevation-1">
      <template slot="headers" slot-scope="props">
        <tr>
          <th v-for="header in props.headers" :key="header.text" :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)">
            <v-icon>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td class="text-xs-right">{{props.item.user?props.item.user.name:'-'}}</td>
          <td class="text-xs-right">{{props.item.user?props.item.user.email:'-'}}</td>
          <td class="text-xs-right">{{  new Date(props.item.createdAt).toTimeString().split("G")[0]}}</td>
          <td class="text-xs-right">{{ props.item.id }}</td>
          <td class="text-xs-right">    <v-btn @click="acceptOrder" flat color="primary" dark>Accept
      <v-icon dark right>check_circle</v-icon>
    </v-btn>
     <v-btn @click="rejectOrder" flat color="red" dark>Decline
      <v-icon dark right>block</v-icon>
    </v-btn></td>
        </tr>
      </template>
    </v-data-table>
    <v-snackbar :timeout="timeout" :top="y === 'bottom'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'" v-model="snackbar">
      {{ text }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
</div>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [{
        text: 'Name',
        value: 'user'
      },
      {
        text: 'Email',
        value: 'email'
      },
      {
        text: 'Order Time',
        value: 'createdAt'
      },
      {
        text: 'Order ID',
        value: 'id'
      },
      {
        text: 'Accept/Reject order',
        value: 'id'
      },
      ],
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      text: 'Order Accepted'
    }
  },
  computed: {
    ...mapGetters([
      'orders'
    ])
  },
  methods:{
  acceptOrder(){
     this.text= 'Order Accepted'
    this.snackbar=true;
  },
  rejectOrder(){
     this.text= 'Order Rejected'
    this.snackbar=true;
  }
  }
}
</script>
