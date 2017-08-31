<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <br>

    <div class="">
      <div class="columns is-multiline">

        <div v-for="item in list" class="column is-4">
          <Test :msg="item.msg" />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Test from './partials/Test';
export default {
  name: 'home',
  components: { Test },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        { msg: 'Hello!' },
        { msg: 'Hello again' },
        { msg: 'Hello there' },
        { msg: 'Hello friend' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
