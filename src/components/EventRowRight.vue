<template>
  <v-row no-gutters>
    <v-col>
      <v-text-field label="Bibe cantidad ml." outlined value="140"></v-text-field>
    </v-col>
    <v-col cols="auto">
      <v-btn class="mx-2" fab dark elevation="3" color="#f2c063">
        <span class="display-1">A</span>
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn class="mx-2 btn-jan" fab dark elevation="3" color="#04adbf">
        <span class="display-1">J</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "EventRowRight",
  data: () => ({
    //
  })
};
</script>
