<template>
  <div class="images">
    <h1>{{title}}</h1>
    <br>
    <div class="">
      <div class="columns is-multiline">
        <div class="column is-4" v-for="img in images">
          <img :src="img.uid" alt="" style="width: 100%;">
          <p>{{img.desc}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'images',
  data() {
    return {
      title: "All Images",
      images: []
    }
  },
  created() {
    const token = window.localStorage.getItem('token');
    if(token) {
      this.$http.get(
        'http://localhost:3000/api/imginfos',
        { headers: { 'Authorization': `Bearer ${token}` } }
      )
      .then(res => {
        console.log(res);
        this.images = res.data;
      });
    }
  }
}
</script>

<style scoped>

</style>
