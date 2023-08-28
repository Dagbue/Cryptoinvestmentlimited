<template>
  <form>
    <div class="wrapper">

      <div class="headline">
        <h2>
          <span class="header-span">Crypto Investment Limited</span>
        </h2>
        <h2>Email Authentication</h2>
        <p class="header-text">Click on the link sent to your email address to verify your email Address</p>
      </div>

      <div class="form">
        <div class="signup">
          <a @click="onPostClick" class="btn btn-white btn-animated">Sign In</a>

          <div class="separator">
            <div class="line"></div>
            <h2>OR</h2>
            <div class="line"></div>
          </div>

          <div class="create-acc">
            <p class="create-text">
              Didnt get any Mail check your spam box or click<a
                class="create-link"
                >Send Again</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "EmailAuth",
  components: {},
  methods: {
    onPostClick() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  box-shadow:  30px 30px 100px #bebebe,
  -50px -50px 100px #ffffff;
  padding: 0.7rem;
  background-color: #ffffff;
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
  font-family: GTEestiProDisplay-Bold, serif;
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
  padding-bottom: 48px;
}

.wrapper .headline h1 {
  font-size: 40px;
  font-weight: 500;
  line-height: 52px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.wrapper .headline h2 {
  font-weight: 400;
  font-size: 23px;
  font-family: GTEestiProDisplay-Bold, serif;
}

.wrapper .headline p {
  font-size: 17px;
  padding-top: 10px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
}


.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
}

.wrapper .form-group input::placeholder {
  color: var(--black-color);
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

}
.btn:hover {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}
.btn:active {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}
.btn-white {
  background-color: #124DA8;
  border-color: #124DA8;
  color: white;
  font-size: 13px;
  font-family: GTEestiProDisplay-Regular, serif;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 19px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 20px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #676767;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 13px;
  color: #676767;
  font-family: GTEestiProDisplay-Regular, serif;
}

.create-acc {
  padding-top: 30px;
  font-size: 15px;
  padding-bottom: 35px;
}
.create-text {
  font-family: GTEestiProDisplay-light, serif;
  font-size: 17px;
  text-align: center;
}

.create-link {
  padding-left: 10px;
  text-decoration: none;
  color: #124DA8;
  font-family: GTEestiProDisplay-Bold, serif;
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
  @media (max-width: 500px) {
    .wrapper {
      padding: 10px 25px 0;
    }
    form {
      margin: 1rem;
      max-width: 40rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 1rem;
      background-color: #ffffff;
    }
    .wrapper .headline h1  {
      font-size: 28px;
    }
    .wrapper .headline h2  {
      font-size: 25px;
    }
  }
}
</style>
