<template>
  <v-container fluid>
    <div class="display-1">Product Inventory</div>
    <v-card-title>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
      v-bind:search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.code }}</td>
        <td class="text-xs-right">{{ props.item.stock[0].quantity }}</td>
        <td class="text-xs-right">{{ props.item.stock[0].cost }}</td>
        <td class="text-xs-right">{{ props.item.stock[0].price }}</td>
        <td class="text-xs-right">{{ props.item.location }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  var inventory = require("../inventoryData.json");
  var inventoryData = {
    search: '',
    headers: [
      { value: 'name', text: 'Product Name', align: 'left' },
      { value: 'code', text: 'Product Code' },
      { value: 'stock[0].quantity', text: 'Quantity' },
      { value: 'stock[0].cost', text: 'Cost' },
      { value: 'stock[0].price', text: 'Price' },
      { value: 'location', text: 'Location' }
    ],
    items: inventory
  }

  export default {
    data(){
      return inventoryData
    }
  }
</script>
