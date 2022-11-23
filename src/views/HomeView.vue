<template>
  <div>
    <h1 class="text-center">Champions DFW Commercial Realty CRM</h1>

    <router-link to="/agents" tag="v-btn">
      <v-btn>Agents</v-btn>
    </router-link>

    <br />

    <crm-list />
    <br />
    <crm-input-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CrmInputForm from "../components/CrmInputForm.vue";
import CrmList from "../components/CrmList.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    CrmInputForm,
    CrmList,
  },
});
</script>
