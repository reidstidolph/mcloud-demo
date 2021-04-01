<template>
  <v-app>
    <!--
      Side Nav drawer
    -->
    <v-navigation-drawer app permanent clipped fixed width="160" dark>
      <v-list dense class="pt-0">
        <v-list-group
          v-for="item in sideBarItems"
          :value="item.active"
          :key="item.title"
        >
          <v-list-tile
            slot="item"
            :to="item.path == '#' ? '' : item.path"
            active-class="white--text grey darken-1"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!--
      Top toolbar
    -->
    <v-toolbar app clipped-left :class="color" fixed>
      <img src="/img/logo.svg" style="height:50px">
      <v-spacer></v-spacer>
      <div class="white--text">Logged In</div>
      <v-btn icon>
        <v-icon class="white--text" large>account_circle</v-icon>
      </v-btn>
    </v-toolbar>

    <!--
      Center Content
    -->
    <v-content>
      <!-- content rendered from router -->
      <router-view></router-view>
      <!-- content rendered from router -->
    </v-content>

    <!--
      Bottom footer
    -->
    <v-footer app fixed class="pa-3">
      <v-spacer></v-spacer>
      <div>
        Powered by: <img src="/img/ssr.svg" style="height:25px;vertical-align: bottom;"> + <v-icon style="color:#272526;">{{ hostIcon }}</v-icon>
      </div>
      <v-spacer></v-spacer>
    </v-footer>

  </v-app>

</template>

<script>
  import cloudEnv from '../../cloudEnv.js'
  var state = {
    greeting: 'Welcome to your Inventory app!',
    sideBarItems: [
      { title: 'Dashboard', icon: 'fa-dashboard', path: '/dashboard'},
      { title: 'Products', icon: 'fa-gift', path: '/products'},
      { title: 'Sales', icon: 'fa-money', path: '/sales'},
      { title: 'Quotes', icon: 'fa-file', path: '/quotes'},
      { title: 'Purchases', icon: 'fa-file-o', path: '/purchases'},
      { title: 'Transfers', icon: 'fa-exchange', path: '/transfers'},
      { title: 'Reports', icon: 'fa-area-chart', path: '/reports'},
    ],
    hostIcon: null,
    isEc2: false,
    isAzure: false,
    isGce: false,
    color: cloudEnv.color

  }

  if (cloudEnv.platform === 'ec2' || cloudEnv.platform === 'aws') {
    state.hostIcon = 'fa-amazon'
    state.isEc2 = true
  } else if (cloudEnv.platform === 'azure') {
    state.hostIcon = 'fa-windows'
    state.isAzure = true
  } else if (cloudEnv.platform === 'gce') {
    state.hostIcon = 'fa-google'
    state.isGce = true
  }

  export default {
    data() {
      return state
    }
  }
</script>
