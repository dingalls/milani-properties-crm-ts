<template>
  <div>
    <router-link to="/" tag="v-btn">
      <v-btn>Contacts</v-btn>
    </router-link>

    <router-link to="/agents" tag="v-btn">
      <v-btn>Agents</v-btn>
    </router-link>

    <crm-agent-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CrmAgentItem from "../components/CrmAgentItem.vue";

export default defineComponent({
  name: "AgentView",

  components: {
    CrmAgentItem,
  },
});
</script>

<style scoped></style>
