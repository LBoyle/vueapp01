<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <br>

<form class="columns" v-on:submit="login()">
  <div class="column is-6 is-offset-3">
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input v-model="newUser.email" class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="newUser.password" class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">
          Login
        </button>
      </p>
    </div>
  </div>
</form>

  </div>
</template>

<script>
import router from '../../router'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Login page',
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function() {
      this.$http.post('http://localhost:3000/api/login', this.newUser)
      .then(function(res) {
        // console.log(res);
        if(res.status === 200) {
          window.localStorage.setItem('token', res.body.token);
          // window.isAuthenticated = true;
          router.push({name: 'Home'});
          location.reload();
          return;
        }
      })
      .catch(err => {
        // window.isAuthenticated = false;
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>

</style>
