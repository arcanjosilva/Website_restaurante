<template>
  <div class="parte1">
    <div class="logo">
      <img class="logo1" src="./assets/logoarcanjo.jpg" />
    </div>
    <div class="superiordireito">
      <router-link to="/" class="branquinho">Home</router-link> |
      <router-link to="/about" class="branquinho">Produtos</router-link> |
      <router-link to="/carrinho" class="branquinho">Carrinho </router-link> |
      <router-link to="/login" class="branquinho"> Login </router-link> 
   
,    </div>
  </div>
  <router-view />

  <footer class="finalcompleto">
    <div class="contactos">
      <p class="textonaoimportante"><b> Contatos </b></p>
      <p class="textonaoimportante">
        Rua de Santa Maria, nº 253 <br />
        <br />
        291 202020 <br />
        arcanjosilva131@gmail.com
      </p>
    </div>
    <div class="redessocias">
      <p class="textonaoimportante"><b> Redes Sociais</b></p>
      <a class="instagram" href="https://www.instagram.com/arcanjosilvaa/?hl=en"
        >Instagram</a
      >
      <br />
      <a class="instagram" href="https://www.tiktok.com/@arcanjosilvaa?lang=en"
        >Tik Tok</a
      >
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.parte1 {
  display: flex;
  justify-content: space-between;
  padding: 1.0%;
  background-color: rgb(0, 0, 0);
}
.superiordireito {
  padding: 5%;
}
.instagram {
  color: white;
}

.finalcompleto {
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-around;
  padding: 25px;
}
.textonaoimportante {
  color: white;
}
.branquinho {
  color: white;
}
.logo1 {
  width: 250px;
}
</style>
