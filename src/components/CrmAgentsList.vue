<template>
  <div>
    <v-data-table :headers="headers" :items="allAgents">
      <template v-slot:item="row">
        <tr @click="viewAgent(row.item._id)">
          <td>{{ row.item.publishedDate }}</td>
          <td>{{ row.item.name }}</td>
          <td>
            <v-icon small @click="deleteAgent(row.item._id)">mdi-delete</v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "crm-agents-list",
  data() {
    return {
      headers: [
        {
          text: "Date Created",
          align: "start",
          sortable: false,
          value: "publishedDate",
        },
        { text: "Agent Name", value: "name" },
      ],
    };
  },
  computed: {
    ...mapGetters(["allAgents"]),
  },
  methods: {
    ...mapActions({
      fetchAgents: "fetchAgents",
      deleteAgent: "deleteAgent",
    }),
    viewAgent(_id: any) {
      this.$router.push(`/agent/${_id}`);
    },
  },
  async created() {
    await this.fetchAgents();
  },
});
</script>

<style scoped></style>
