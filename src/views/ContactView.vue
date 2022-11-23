<template>
  <div>
    <router-link to="/" tag="v-btn">
      <v-btn>Contacts</v-btn>
    </router-link>

    <router-link to="/agents" tag="v-btn">
      <v-btn>Agents</v-btn>
    </router-link>

    <crm-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CrmItem from "../components/CrmItem.vue";

export default defineComponent({
  name: "ContactView",

  components: {
    CrmItem,
  },
});
</script>
