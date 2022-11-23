<template>
  <v-data-table :headers="headers" :items="allContacts">
    <template v-slot:item="row">
      <tr @click="viewContact(row.item._id)">
        <td>{{ row.item.publishedDate }}</td>
        <td>{{ row.item.leadAssigned }}</td>
        <td>{{ row.item.fullName }}</td>
        <td>{{ row.item.phoneNumber }}</td>
        <td>{{ row.item.emailAddress }}</td>
        <td>{{ row.item.inquiredProperty }}</td>
        <td>{{ row.item.timeline }}</td>
        <td>{{ row.item.budget }}</td>
        <td>{{ row.item.leadSource }}</td>
        <td>{{ row.item.notes }}</td>
        <td>
          <v-icon small @click="deleteContact(row.item._id)">mdi-delete</v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "crm-list",
  data() {
    return {
      headers: [
        {
          text: "Date Created",
          align: "start",
          sortable: false,
          value: "publishedDate",
        },
        { text: "Lead Assigned", value: "leadAssigned" },
        { text: "Full Name", value: "fullName" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Email Address", value: "emailAddress" },
        { text: "Inquired Property", value: "inquiredProperty" },
        { text: "Timeline", value: "timeline" },
        { text: "Budget", value: "budget" },
        { text: "Lead Source", value: "leadSource" },
        { text: "Notes", value: "notes" },
      ],
    };
  },
  computed: {
    ...mapGetters(["allContacts"]),
  },
  methods: {
    ...mapActions({
      fetchContacts: "fetchContacts",
      deleteContact: "deleteContact",
    }),
    viewContact(_id: any) {
      this.$router.push(`/contact/${_id}`);
    },
  },
  async created() {
    await this.fetchContacts();
  },
});
</script>
