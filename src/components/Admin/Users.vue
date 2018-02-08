<template>
<div>
    <h1 style="text-align:center">Users</h1>
   <v-data-table
      v-model="selected"
      v-bind:headers="headers"
      v-bind:items="users"
      select-all
      v-bind:pagination.sync="pagination"
      item-key="name"
      class="elevation-1"
    >
    <template slot="headers" slot-scope="props">
      <tr>
        <th>
          <v-checkbox
            primary
            hide-details
            @click.native="toggleAll"
            :input-value="props.all"
            :indeterminate="props.indeterminate"
          ></v-checkbox>
        </th>
        <th v-for="header in props.headers" :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox
            primary
            hide-details
            :input-value="props.selected"
          ></v-checkbox>
        </td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.pNumber }}</td>
        <td class="text-xs-right">{{ props.item.tOrders }}</td>
      </tr>
    </template>
  </v-data-table>
</div>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [
        {
          text: 'User Name',
          align: 'left',
          value: 'username'
        },
        { text: 'Email', value: 'email' },
        { text: 'Phone Number', value: 'pNumber' },
        { text: 'Total Orders', value: 'tOrders' }
      ],
      items: [
        {
          value: false,
          name: 'Tarique',
          email: 'tariquehussain@xyz.com',
          pNumber: 9804551286,
          tOrders: 20
        },
        {
          value: false,
          name: 'Mastann',
          email: 'mastannSayyed@xtz.com',
          pNumber: 9980765342,
          tOrders: 500
        }
      ]
    }
  },
  methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  }
}
</script>
