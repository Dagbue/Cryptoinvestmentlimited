<template>
<div>
  <form class="signUp" @submit.prevent="handleSubmit">
    <h3 class="user-info-header">
      Add new user
    </h3>
    <div class="wrapper">
      <div class="form">
        <div class="signUp">
          <div class="form-group">
            <input type="text" placeholder="First Name" required="" name="firstName" v-model="firstName" />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Last Name" required="" name="LastName"  v-model="lastName"/>
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email" required="" name="email" v-model="email" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" required="" name="password" v-model="password" />
          </div>
          <div class="form-group">
            <input
                type="password"
                placeholder=" Confirm Password"
                required=""
                name="ConfirmPassword"
            />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Referral Code"  name="Referral"  v-model="referral" />
          </div>

          <button @click="sendEmailVerification" class="btn btn-white btn-animated"
          >CREATE ACCOUNT</button
          >

          <div v-if="error">{{ error }}</div>

        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";
import {getAuth, sendEmailVerification} from "firebase/auth";
import {doc, getFirestore, serverTimestamp, setDoc} from "firebase/firestore";

export default {
  name: "addNewUser",
  methods: {
    onPostClick() {
      this.$router.push("/login");
    },
  },
  setup() {
    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const country = ref('')
    const referral = ref('')
    const error = ref(null)

    const store = useStore()

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          password: password.value,
        });
        sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log('mail sent')
            });
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        setDoc(doc(db, auth.currentUser.email, "USER"), {
          email: email.value,
          password: password.value,
          firstName: firstName.value,
          lastName: lastName.value,
          country: country.value,
          referral: referral.value,
          createdAt: serverTimestamp()
        })
            .then(() => {
              console.log('saved to the database')
            })
        alert("User Created Successfully")
      }
      catch (err) {
        error.value = err.message
      }
    }

    const auth = getAuth();
    const db = getFirestore();


    return {
      email, password,
      firstName, lastName,
       referral,
      handleSubmit, error,
      sendEmailVerification, setDoc, doc
    }
  },
}
</script>


<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
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
  /*min-height: 100vh;*/
}



.wrapper {
  padding: 20px 25px 0;
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
  /*background-image: url("images/bg-1.svg");*/
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}



.wrapper .headline h1 {
  font-size: 39px;
  font-weight: 500;
  line-height: 30px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.wrapper .headline h2 {
  font-weight: 400;
  font-size: 30px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
}

.wrapper .form-group {
  margin-bottom: 15px;
}

.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: black;
  border: 1px solid black;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
}

.wrapper .form-group input::placeholder {
  color: black;
  font-weight: 400;
  font-size: 14px;
}

.btn,
.btn-white,
.btn-animated {
  width: 100%;
  line-height: 35px;
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
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}
.btn:active {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}
.btn-white {
  background-color: #124DA8;
  border-color: #124DA8;
  color: white;
  font-size: 15px;
  margin-top: 2%;
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

.wrapper .headline p {
  padding-top: 15px;
  color: darkred;
  font-family: GTEestiProDisplay-light, serif;
}


.user-info-header {
  margin-top: 3%;
  font-size: 27px;
  padding-bottom: 10px;
  text-align: center;
  color: #124DA8;
  font-family: GTEestiProDisplay-Bold,serif ;
}
</style>
