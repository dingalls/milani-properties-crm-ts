<template>
  <div>
    <v-form @submit="onSubmit">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="6">
            <v-select
              label="Lead Assigned"
              v-model="this.contact.leadAssigned"
              :items="['Lacy Ingalls']"
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
            <v-text-field label="Budget" v-model="contact.budget">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Lead Source" v-model="contact.leadSource">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-textarea label="Notes" v-model="contact.notes"> </v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn color="success" type="submit">UPDATE CONTACT</v-btn>
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
  name: "crm-item-view",
  data() {
    return {
      contact: {
        _id: "",
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
  methods: {
    ...mapActions({
      fetchContact: "fetchContact",
      updateContact: "updateContact",
    }),
    onSubmit(e: any) {
      e.preventDefault();
      this.updateContact(this.contact);
    },
  },
  async created() {
    this.contact._id = this.$route.params.id;
    await this.fetchContact(this.contact._id);
    this.contact = this.getSelectedContact;
  },
  computed: {
    ...mapGetters(["getSelectedContact"]),
  },
});
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}
</style>
