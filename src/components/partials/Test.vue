<template>
  <div class="test">
    <h1>{{title}}</h1>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: ''
  },
  data() {
    return {
      title: 'Test component'
    };
  }
};
</script>

<style scoped>
.test {
  /*height: 100%;*/
  width: 100%;
  background-color: green;
}
</style>
