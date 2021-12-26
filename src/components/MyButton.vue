<template>
  <v-row no-gutters>
    <v-col cols="auto">
      <v-btn class="mx-2" dark elevation="0" color="#f2c063">
        <span class="headline">A</span>
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn class="mx-2 btn-jan" dark elevation="0" color="#04adbf">
        <span class="headline">J</span>
      </v-btn>
    </v-col>
    <v-col>
      <v-text-field :label="label" dense rounded outlined></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "myButton",
  data: () => ({
    label: "test"
  })
};
</script>
