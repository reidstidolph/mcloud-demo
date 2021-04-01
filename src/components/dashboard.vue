<template>
  <v-container fluid>
    <div class="display-1">Supply Dashboard</div>
    <v-layout justify-center>
      <v-flex>
        <v-card>
          <chartist
            ratio="ct-major-second"
            type="Line"
            :data="chartData"
            :options="chartOptions" >
          </chartist>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  var data = {
    chartData: {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
      series:[[1, 5, 3, 6, 7, 9, 14, 2, 8, 10, 7, 9]]
    },
    chartOptions: {
      lineSmooth: true,
      height: 200
    }
  }

  export default {
    data(){
      return data
    }
  }
</script>
