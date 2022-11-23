<template>
  <div>
    <router-link to="/" tag="v-btn">
      <v-btn>Contacts</v-btn>
    </router-link>

    <router-link to="/agents" tag="v-btn">
      <v-btn>Agents</v-btn>
    </router-link>

    <crm-list />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CrmList from "../components/CrmList.vue";

export default defineComponent({
  name: "ListView",

  components: {
    CrmList,
  },
});
</script>
