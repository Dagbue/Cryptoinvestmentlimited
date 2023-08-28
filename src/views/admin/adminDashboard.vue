<template>
<div>
  <form class="logoIn" @submit.prevent="handleSubmit">
  <div class="wrapper">
    <div class="headline">
      <h1>SIGN IN</h1>
      <h2>
        With Users
        <span class="header-span"> Capital & Growth </span> Limited Account
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
</div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {getAuth} from "firebase/auth";
export default {
  name: "adminDashboard",
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
}
</script>

<style scoped>
form {
  margin: 5rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.8);
  padding: 2rem;
  background-color: #282E3BC7;
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
  color: #0098da;
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
  color: #071333;
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
  border-color: #071333;
  background-color: #071333;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.btn:active {
  transform: translateY(-1px);
  border-color: #071333;
  background-color: #071333;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.btn-white {
  background-color: #0098da;
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
}

</style>

