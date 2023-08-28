<template>

  <form class="logoIn" @submit.prevent="handleSubmit">
    <div class="wrapper">
      <div class="headline">
        <h1>SIGN IN</h1>
        <h2>
          With Users
          <span class="header-span"> Crypto Investment </span> Limited Account
        </h2>
      </div>
      <div class="form">
        <div class="logoIn">
          <div class="form-group">
            <input type="email" placeholder="Email" required="" name="email" v-model="email" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" required="" name="password" v-model="password" />
          </div>

          <button  class="btn btn-white btn-animated">SIGN IN</button>
          <div v-if="error">{{ error }}</div>
        </div>
      </div>
    </div>
  </form>

<div class="user-info-main" v-for="items in contacts" :key="items.id">
  <h4 class="user-info-header">
    User Information
  </h4>

  <div class="user-info">
    <p class="user-info-text-1">First Name :</p>
    <p class="user-info-text-2">{{items.firstName}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">Last Name :</p>
    <p class="user-info-text-2">{{items.lastName}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">Email :</p>
    <p class="user-info-text-2">{{items.email}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">Referral Email :</p>
    <p class="user-info-text-2">{{items.referral}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">BitcoinAddress :</p>
    <p class="user-info-text-2">{{items.bitcoinAddress}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">EthereumAddress :</p>
    <p class="user-info-text-2">{{items.ethereumAddress}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">LitcoinAddress :</p>
    <p class="user-info-text-2">{{items.litcoinAddress}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">Password :</p>
    <p class="user-info-text-2">{{items.password}}</p>
  </div>

  <div class="user-info">
    <p class="user-info-text-1">Date Created :</p>
    <p class="user-info-text-2">{{items.createdAt.toDate().toDateString()}}</p>
  </div>

</div>

</template>

<script>
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import { useRouter } from 'vue-router';
import {getAuth} from "firebase/auth";
export default {
  name: "listOfUsers",
  data () {
    return {
      contacts: [],
    }
  },
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const db = getFirestore();
    const auth = getAuth();
    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log (doc.data())
        });
        await router.push('/list-of-users')
        // await location.reload()
      }
      catch (err) {
        error.value = err.message
      }
    }
    return {
      handleSubmit, email,
      password, error,
      user: computed(() => store.state.user),
      getDocs, collection }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'email': doc.data().email,
        'password': doc.data().password,
        'createdAt': doc.data().createdAt,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'referral': doc.data().referral,
        'bitcoinAddress': doc.data().bitcoinAddress,
        'ethereumAddress': doc.data().ethereumAddress,
        'litcoinAddress': doc.data().litcoinAddress,
      }
      this.contacts.push(data)
    })
  },
}
</script>

<style scoped>
.user-info-main{
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.8);
  background-color: #071333;
  text-align: center;
  margin: 1rem auto;
  max-width: 40rem;
  border-radius: 12px;
  padding: 2rem;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.fields-alpha{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #071333;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 12px;
  margin-top: 3%;
}

.user-info{
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.user-info-header{
  margin-top: 1%;
  margin-bottom: 2%;
  font-size: 27px;
  text-align: center;
  color: #124DA8;
  font-family: GTEestiProDisplay-Bold,serif ;
}

.user-info-text-1{
  font-size: 20px;
  font-weight: 700;
  padding-right: 10px;
  color: #fff;
  font-family: GTEestiProDisplay-Bold,serif ;
}

.user-info-text-2{
  background-color: #FFFFFF;
  color: #071333;
  padding: 8px 30px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 700;
}

form {
  margin: 5rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.8);
  padding: 2rem;
  background-color: #071333;
}

:root {
  --primary-color: #3525d3;
  --white-color: #fff;
  --black-color: #3c4a57;
  --light-gray: #e4e8ee;
}

.wrapper {
  position: relative;
  align-items: center;
  justify-content: center;
}

.header-span {
  color: #124DA8;
  font-family: GTEestiProDisplay-Regular, serif;
}

.wrapper {
  padding: 50px 25px 0;
  max-width: 768px;
  width: 100%;
  margin: auto;
}

.wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}

.wrapper .headline {
  text-align: center;
  padding-bottom: 30px;
  color: #fff;
  font-family: GTEestiProDisplay-Bold, serif;
}

.wrapper .headline h1 {
  font-size: 30px;
  line-height: 50px;
  font-family: GTEestiProDisplay-Bold, serif;
}

.wrapper .headline h2 {
  font-size: 28px;
  font-family: GTEestiProDisplay-Bold, serif;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
}

.wrapper .form-group {
  margin-bottom: 15px;
  font-family: GTEestiProDisplay-Regular, serif;
  color: black;
}
input{
  color: black;
}
.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  border: 1px solid #e4e8ee;
  box-shadow: none;
  color: black;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
  color: black;
}

.wrapper .form-group input::placeholder {
  font-weight: 400;
  color: black;
  font-size: 14px;
}

.btn,
.btn-white,
.btn-animated {
  width: 100%;
  margin: 15px 0 30px;
  line-height: 22px;
  padding: 12px 29px;
  text-transform: uppercase;
  border: none;
  text-align: center;
  border-radius: 20px;
}

.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
}
.btn:hover {
  transform: translateY(-3px);
  border-color: #f25961;
  background-color: #f25961;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.btn:active {
  transform: translateY(-1px);
  border-color: #f25961;
  background-color: #f25961;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.btn-white {
  background-color: #124DA8;
  border-color: #124DA8;
  color: white;
  font-size: 15px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 15px;
  color: #676767;
  font-family: GTEestiProDisplay-Regular, serif;
}

@media (max-width: 1030px) {
  .wrapper::before {
    left: -25%;
    min-height: 60vh;
    height: 500px;
  }
}
@media (max-width: 767px) {
  .wrapper {
    max-width: 550px;
  }
  .wrapper .headline h1 {
    font-size: 22px;
    line-height: 25px;
  }

  @media (max-width: 1030px) {
    .wrapper::before {
      left: -25%;
      min-height: 60vh;
      height: 500px;
    }
  }
  @media (max-width: 767px) {
    .wrapper {
      max-width: 550px;
    }
    .wrapper .headline h1 {
      font-size: 22px;
      line-height: 25px;
    }
  }
}

</style>

