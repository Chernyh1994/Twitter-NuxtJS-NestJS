<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-card max-width="100%" class="mx-auto">
          <v-img
            height="100%"
            src="https://images.wallpaperscraft.ru/image/gory_gornyj_hrebet_vershiny_150275_3840x2160.jpg"
          >
            <v-row>
              <v-col>
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      First Name: {{ user.firstName }}
                    </v-list-item-title>
                    <v-list-item-title class="headline mb-1">
                      Last Name: {{ user.lastName }}
                    </v-list-item-title>
                    <v-list-item-title class="title">
                      Email: {{ user.email }}
                    </v-list-item-title>
                    <v-list-item-title class="title">
                      UserName: {{ user.username }}
                    </v-list-item-title>
                    <v-list-item-title class="title">
                      Role: {{ user.role }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters("auth", { user: "loggedInUser" })
  }
}
</script>
