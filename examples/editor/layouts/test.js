export default Vue.component('layout', {
    template: `<div>
    <v-navigation-drawer app></v-navigation-drawer>
            <v-toolbar app></v-toolbar>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
            <v-footer app></v-footer></div>`
})