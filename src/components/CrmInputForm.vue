<template>
  <v-form @submit="onSubmit">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12" md="6">
          <v-select
            label="Lead Assigned"
            v-model="contact.leadAssigned"
            :items="allAgents"
            item-text="name"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Full Name" v-model="contact.fullName">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Phone Number" v-model="contact.phoneNumber">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Email Address" v-model="contact.emailAddress">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Inquired Property"
            v-model="contact.inquiredProperty"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Timeline" v-model="contact.timeline">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Budget" v-model="contact.budget"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Lead Source" v-model="contact.leadSource">
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea label="Notes" v-model="contact.notes"> </v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn color="success" type="submit">SAVE CONTACT</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "crm-input",
  data() {
    return {
      contact: {
        leadAssigned: "",
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        inquiredProperty: "",
        timeline: "",
        budget: "",
        leadSource: "",
        notes: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allAgents"]),
  },
  methods: {
    ...mapActions({
      addContact: "addContact",
      fetchAgents: "fetchAgents",
    }),
    onSubmit(e: any) {
      e.preventDefault();
      this.addContact(this.contact);
    },
  },
  async created() {
    await this.fetchAgents();
  },
});
</script>
