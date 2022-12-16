<template>
  <div>
    <div class="login-page">
      <h1 id="id"> Sign Up</h1>
      <div class="form">
        <div class="login-form">
          <input type="email" placeholder="email" v-model="email" />
          <input type="password" placeholder="password" v-model="password" />
          <input
            type="password"
            placeholder="confirm password"
            v-model="confpassword"
          />
          <button @click="verifica()">Registo</button>
          <p class="message">Already registered? <router-link to="/login"> go back </router-link>  </p>

          <div v-if="alerta == 1">
            <div class="alert alert-warning" role="alert">
              Por favor preencha os campos
            </div>
          </div>
          <div v-if="alerta == 2">
            <div class="alert alert-warning" role="alert">
              A password e a confirmação da passe devem ser iguais
            </div>
          </div>
          <div v-if="alerta == 3">
            <div class="alert alert-warning" role="alert">Sucesso</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      confpassword: "",
      alerta: "",
    };
  },
  methods: {
    verifica(){
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.email , this.password)
        .then(() =>{
            alert('Sucessfully registered! Please login');
            this.$router.push('/login');
        })
        .catch(error => {
            alert(error.message);
        })
    }
    
  },
};
</script>











<style>
h1{
    font-size: 30px;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #402d82;
  text-decoration: none;
}
</style>