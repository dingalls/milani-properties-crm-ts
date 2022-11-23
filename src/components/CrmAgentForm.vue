<template>
  <div>
    <v-form @submit="onSubmit">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="6">
            <v-text-field label="Agent Name" v-model="agent.name">
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn color="success" type="submit">SAVE AGENT</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "crm-input",
  data() {
    return {
      agent: {
        name: "",
      },
    };
  },
  methods: {
    ...mapActions({ addAgent: "addAgent" }),
    onSubmit(e: any) {
      e.preventDefault();
      this.addAgent(this.agent);
    },
  },
  computed: {
    ...mapGetters(["getAllAgents"]),
  },
});
</script>

<style scoped></style>
