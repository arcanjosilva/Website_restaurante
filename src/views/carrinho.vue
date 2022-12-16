<template>
  <h3>CARRINHO</h3>

  <ul class="card-wrapper">
    
    <li class="card" v-for="(prato, index) in refeicoes" :key="index"> 
       <h3>
            
              <a href="#">{{ prato.strMeal }} </a>
          </h3>
      <img class="foto" :src="prato.strMealThumb" @click="removerprato(index)" alt="">
          <p class="branco">{{ prato.strCategory }}</p>
          <p class="preco" > 23 euros </p>
    </li>
  </ul>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return {
      users: [],
      user: null,
      refeicoes:[]
    };
  },
  created (){
    this.user = firebase.auth().currentUser
    firebase.database().ref('compras/'+ this.user.uid).get().then((snapshot) =>{this.refeicoes= snapshot.val()})
  },
  methods:{
    removerprato(index) {
      firebase
        .database()
        .ref("/compras/" + this.user.uid + "/" + index)
        .remove()
        .then( res => {
        alert("Foi retirado");
        }
        )
        this.$router.push("/about");
        
    },
  }
}
</script>

<style>
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
.preco{
  background-color: red;
}
.card {
  --card-gradient: rgba(0, 0, 0, 0.8);
  /* --card-gradient: #5e9ad9, #e271ad; */
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
</style>