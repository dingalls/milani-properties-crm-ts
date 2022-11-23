<template>
  <div>
    <router-link to="/" tag="v-btn">
      <v-btn>Contacts</v-btn>
    </router-link>

    <crm-agents-list />
    <br />
    <crm-agent-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CrmAgentForm from "../components/CrmAgentForm.vue";
import CrmAgentsList from "../components/CrmAgentsList.vue";

export default defineComponent({
  name: "AgentsView",

  components: {
    CrmAgentsList,
    CrmAgentForm,
  },
});
</script>

<style scoped></style>
