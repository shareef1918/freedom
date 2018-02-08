<template>
  <div>
    <h1 style="text-align:center">Select Today's Menu</h1>
    <v-data-table v-model="selected" v-bind:headers="headers" v-bind:items="items" select-all v-bind:pagination.sync="pagination"
      item-key="name" class="elevation-1">
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox primary hide-details @click.native="toggleAll" :input-value="props.all" :indeterminate="props.indeterminate"></v-checkbox>
          </th>
          <th v-for="header in props.headers" :key="header.text" :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)">
            <v-icon>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox primary hide-details :input-value="props.selected"></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.Phalf }}</td>
          <td class="text-xs-right">{{ props.item.Pfull }}</td>
          <td class="text-xs-right">{{ props.item.units }}</td>
          <td class="text-xs-right">{{ props.item.tOrders }}</td>
        </tr>
      </template>
    </v-data-table>
    <v-btn @click="setMenuForLunch" style="float:right">Set lunch Menu</v-btn>
    <v-btn @click="setMenuForDinner" style="float:right">Set dinner Menu</v-btn>
    <v-snackbar :timeout="timeout" :top="y === 'top'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'" v-model="snackbar">
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [{
        text: 'Food Items',
        value: 'name'
      },
      {
        text: 'Price full',
        value: 'Pfull'
      },
      {
        text: 'Price half ',
        value: 'Phalf'
      },
      {
        text: 'Units',
        value: 'units'
      },
      {
        text: 'Total Orders',
        value: 'tOrders'
      },
      ],
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 3000,
      text: 'Items Added Successfully'
    }
  },
  computed: {
    ...mapGetters({
      items: 'recipes'
    })
  },
  methods: {
    setMenuForLunch () {
      this.$store.dispatch('setMenuForLunch', this.selected)
        .then((data) => {
          this.snackbar = true

        })
    },
    setMenuForDinner () {
      this.$store.dispatch('setMenuForDinner', this.selected)
        .then((data) => {
          this.snackbar = true
        })
    },
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
  }
}

</script>
