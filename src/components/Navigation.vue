<template>
<nav>
  <ul>
    <li class="nav-item" v-for="route in routes">
      <router-link :to="route" class="nav-link" active-class="active">
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</nav>
</template>


<script>
export default {
  name: 'navigation',
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
};
</script>
