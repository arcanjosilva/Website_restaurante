<template>
  <div class="parte2">
    <div class="imagemgrande">
      <img
        class="imagemgranderestaurante"
        src="../assets/fotocapa.jpg"
        alt=""
      />
    </div>

    <div class="textowelcome">
      <h1 class="welcome">
        <b>
          WELCOME <br />
          RESTAURANTE ARCANJO SILVA
        </b>
      </h1>
    </div>
  </div>
  <div class="tabelasobrenos">
    <div class="textosobrenos">
      <h1 class="titulosobrenos">Sobre nós</h1>
      <p class="textoescritosobrenos">
        Arcanjo Silva é um humorista que conta com mais de 100 mil seguidores
        nas diversas redes sociais . <br />
        Ficou conhecido após o sucesso da dupla Irmãos Silva, na qual o seu
        irmão Apolo Silva faz parte.<br />
        O objetivo de Arcanjo Silva é chegar aos grandes palcos da comédia.

        <br />
        Arcanjo Silva decidiu após a pandemia de Covid-19 criar o seu 1º
        restaurante que contará com os pratos : Espetada Regional , Francesinha,
        Costeleta e Picado .
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import carrinho from "./carrinho.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    carrinho,
  },
};
</script>

<style>
.h1 {
  padding: 0;
}
.welcome {
  /* font-style: normal; */
  /* font-weight: normal; */
  font-size: 30px;
  line-height: 40px;
  text-align: center;
}
.tabelasobrenos {
  background-color: rgb(255, 195, 195);
  border: solid 5px rgb(0, 0, 0);
  padding-bottom: 50px;

  box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%), 0 5px 5px 0 rgb(0 0 0 / 24%);
}

.titulosobrenos {
  text-align: center;
  font-size: 48px;
}
.textoescritosobrenos {
  text-align: center;
  font-size: 30px;
  color: black;
}
.parte2 {
  background-color: rgba(128, 128, 128, 0.082);
}
.imagemgranderestaurante {
  width: 100%;
  height: 500px;
}
</style>
