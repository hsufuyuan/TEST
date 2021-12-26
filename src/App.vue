<template>
  <v-app id="inspire">
    <navigator v-model="drawer"></navigator>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Kids Tracking</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <eventRowRight></eventRowRight>
        <eventRowLeft></eventRowLeft>
        <myButton></myButton>
        <helloWorld></helloWorld>
        <log></log>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import eventRowLeft from "./components/EventRowLeft";
import eventRowRight from "./components/EventRowRight";

import navigator from "./components/Navigator";
import myButton from "./components/MyButton";
import topBar from "./components/TopBar";
import log from "./components/Log";

import helloWorld from "./components/HelloWorld";

// Client ID and API key from the Developer Console
const CLIENT_ID =
  "909221758646-3k2bfrmt5vsln3kgdqhjtg9126n5pi2s.apps.googleusercontent.com";
const API_KEY = "AIzaSyDUiVPNh1aSzrS_c3KMsDo_jaG5vRNl5CU";
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar";

export default {
  name: "App",
  components: {
    eventRowLeft,
    eventRowRight,
    navigator,
    myButton,
    topBar,
    helloWorld,
    log
  },
  data: () => ({
    drawer: null,
    items: null,
    api: null,
    authorized: null
  })
};
</script>

