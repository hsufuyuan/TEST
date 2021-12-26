<template>
  <v-navigation-drawer v-bind:value="value" v-on:input="$emit('input', $event)" app>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title @click="handleClickLogin" :disabled="!isInit">get authCode</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-contact-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>isInit</td>
          <td>{{isInit}}</td>
        </tr>
        <tr>
          <td>isSignIn</td>
          <td>{{isSignIn}}</td>
        </tr>
        <tr>
          <td>isSignIn</td>
          <td>{{isSignIn}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-navigation-drawer>
</template>

<script>
/* eslint-disable */
export default {
  name: "navigator",
  props: {
    msg: String,
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isInit: false,
      isSignIn: false,
      GoogleUser: null,
      BasicProfile: null,
      items: null
    };
  },
  watch: {
    isInit: function() {
      console.log("isInit ha cambiado");
    },
    isSignIn: function() {
      console.log("isSignIn ha cambiado");
      this.GoogleUser = this.$gAuth.GoogleAuth.currentUser
        .get()
        .getBasicProfile();
      //console.log("getBasicProfile",this.$gAuth.GoogleAuth.currentUser.get().getBasicProfile());
      console.log("getId", this.GoogleUser.getId());
      console.log("getName", this.GoogleUser.getName());
      console.log("getGivenName", this.GoogleUser.getGivenName());
      console.log("getFamilyName", this.GoogleUser.getFamilyName());
      console.log("getImageUrl", this.GoogleUser.getImageUrl());
      console.log("getEmail", this.GoogleUser.getEmail());
      this.getData();
    }
  },
  methods: {
    getData() {
      let vm = this;
      this.$gAuth.GoogleAuth.client.calendar.events
        .list({
          calendarId: "pf3rdcuq1rlpb3jsa63jm505pk@group.calendar.google.com",
          //'timeMin': (new Date()).toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: "updated"
        })
        .then(response => {
          //vm.items = this.syntaxHighlight(response.result.items);
          vm.items = response.result.items;
          console.log("calendar", vm.items);
        })
        .catch(error => {
          //on fail do something
          console.error(error);
        });
    },
    handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then(authCode => {
          //on success
          console.log("authCode", authCode);
        })
        .catch(error => {
          //on fail do something
          console.error(error);
        });
    },

    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          //on success do something
          console.log("GoogleUser", GoogleUser);
          console.log("getId", GoogleUser.getId());
          console.log("getBasicProfile", GoogleUser.getBasicProfile());
          console.log("getAuthResponse", GoogleUser.getAuthResponse());
          console.log(
            "getAuthResponse",
            this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
          );
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch(error => {
          //on fail do something
          console.error(error);
        });
    },

    handleClickSignOut() {
      this.$gAuth
        .signOut()
        .then(() => {
          //on success do something
          this.isSignIn = this.$gAuth.isAuthorized;
          console.log("isSignIn", this.$gAuth.isAuthorized);
        })
        .catch(error => {
          //on fail do something
          console.error(error);
        });
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${
        window.location.href
      }`;
    }
  },

  created() {
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  }
};
</script>
