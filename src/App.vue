<template>
  <div id="app">
    <h1>botw recipe</h1>
    <install-button/>
    <!-- <display-mode-toggle/> -->
    <div id="nav">
      <router-link to="/foods">Food</router-link> |
      <router-link to="/materials">Material</router-link> |
      <router-link to="/cook">Cook</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InstallButton from './components/InstallButton.vue';
import DisplayModeToggle from './components/DisplayModeToggle.vue';

@Component({
  components: {
    InstallButton,
    DisplayModeToggle,
  },
})
export default class App extends Vue {
  private created() {
    this.$store.dispatch('getAllFoods');
    this.$store.commit('initDisplayMode');
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f7f6f4;
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 0.5em;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-size: 1.3em;
}

.container {
  margin: 0 auto;
}

@media (max-width: 575px) {
  .container {
    width: 100%;
  }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .container {
    width: 500px;
  }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container {
    width: 700px;
  }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container {
    width: 800px;
  }
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container {
    width: 1200px;
  }
}

.image-wrapper {
  display: flex;
  justify-content: center;
}

.image-wrapper .image {
  background-color: rgba(0,0,0,0.6);
  border: .1rem solid rgba(169,157,11,0.95);
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #2d2d2d;
  }
  h1, .name, .key, .value, .comment, .exit {
    color: white;
  }
  #nav a {
    color: #dddddd;
  }
}
</style>
