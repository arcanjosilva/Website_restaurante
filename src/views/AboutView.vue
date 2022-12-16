<template>
  <div class="melhor">
    <div class="about">
      <h1 class="welcome">Produtos</h1>
      <!-- <div class="search-container">
        <label for="search-input" class="search-icon"></label>
        <input  v-model="query" type="text" class="search-input" id="search-input" placeholder="Pesquise aqui " required />
      </div> -->
      <ul class="card-wrapper">
        <li class="card" v-for="(prato, index) in refeicoes" :key="index">
          <img
            :src="prato.strMealThumb"
            @click="adicionarcompra(prato)"
            alt=""
          />
          <h3>
            <a href="#">{{ prato.strMeal }}</a>
          </h3>
          <p class="branco">{{ prato.strCategory }}</p>
          <p class="preco" > 23 euros </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      refeicoes: ["hamburguer", "ovo", "batata-frita"],
      user: null,
      query : ""
    };
  },
  methods: {
    adicionarcompra(prato) {
      firebase
        .database()
        .ref("/compras/" + this.user.uid + "/")
        .push()
        .set(prato)
        .then(() => {
          console.log("data send");
        });
      alert("Foi adicionado !! ");

      this.$router.push("/carrinho");
    },
    pesquisa(query){
      
    }

    

  },

  mounted() {
    this.axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => {
        console.log(res);
        this.refeicoes = res.data.meals;
      });
    this.user = firebase.auth().currentUser;
  },
};
</script>


<style>
.welcome {
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 62px;
  text-align: center;
}

.card {
  --card-gradient: rgba(0, 0, 0, 0.8);
  --card-gradient: #5e9ad9, #e271ad;
  --card-blend-mode: overlay;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;
}
.card img {
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  max-height: max(10rem, 30vh);
  aspect-ratio: 4/3;
  mix-blend-mode: var(--card-blend-mode);
}
.card img ~ * {
  margin-left: 1rem;
  margin-right: 1rem;
}
.card > :last-child {
  margin-bottom: 0;
}
.card:hover,
.card:focus-within {
  --card-gradient: #24a9d5 max(8.5rem, 20vh);
  cursor: pointer;
}

/* Additional demo display styles */
* {
  box-sizing: border-box;
}

.melhor {
  display: grid;
  /* place-content: center; */
  justify-items: center;
  min-height: 80vh;
  margin: 0;
  padding: 1rem;

  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  color: #444;
  background-color: #e1faf1;
}

.card h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
}

.card a {
  color: inherit;
}

.card-wrapper {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
  max-width: 100vw;
  width: 120ch;
  padding-left: 1rem;
  padding-right: 1rem;
}
.branco {
  color: black;
}

.search-container {
    position: relative;
    width: 40px;
    height: 40px;
   

}
.preco{
  background-color: red;
}
.search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transform: rotate(45deg);
    cursor: pointer;
}

.search-icon::before {
    content: '';
    width: 25%;
    height: 25%;
    border-radius: 50%;
    border: 2px solid #f2cb05;
}

.search-icon::after {
    content: '';
    width: 20%;
    height: 2px;
    background-color: #f2cb05;
}

.search-input {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: none;
    outline: none;
    padding-left: 40px;
    transition: all 0.7s;
}

.search-input:focus {
    width: 250px;
    box-shadow: 2px 2px 5px #777;
}

.search-input:valid {
    width: 250px;
}

</style>