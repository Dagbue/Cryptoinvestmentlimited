<template>
  <h3 class="text-section-header">How It Works </h3>
  <p class="text-section-parah">Follow these easy steps to start working with us </p>
<div class="section-alpha">

  <div class="text-section">
    <div class="text-section-inner">
      <i class='bx bx-user-check'></i>
      <div class="text-section-inner-text">
        <h4>Create an Account</h4>
        <p>Account creation is easy and straightforward. Also, it's totally free to open an account with us.</p>
      </div>
    </div>

    <div class="text-section-inner">
      <i class='bx bx-wallet-alt'></i>
      <div class="text-section-inner-text">
        <h4>Invest</h4>
        <p>After registration you'll logged in to the dashboard, click on the "invest" button, select a plan and invest.</p>
      </div>
    </div>

    <div class="text-section-inner">
      <i class='bx bxs-bank'></i>
      <div class="text-section-inner-text">
        <h4>Earn and Withdraw</h4>
        <p>You'll start seeing your earnings increasing after 24 hours of investing. It will keep rising until the
          contract duration. You can easily withdraw by clicking on the "withdraw' button.</p>
      </div>
    </div>
    <button class="header-button" @click="onPostClick">Get Stated</button>

  </div>

  <div class="image-section">
    <img alt="About-Image" src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="about-image" />
  </div>

</div>
</template>

<script>
export default {
  name: "how-it-works",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.image-section{
  margin-left: 4%;
}

.section-alpha{
  display: flex;
  justify-content: center;
  padding-bottom: 4%;
  flex-direction: row-reverse;
  padding-top: 10px;
}

.text-section-inner{
  display: flex;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.4);
  padding: 12px;
  padding-top: 16px;
  border-radius: 15px;
  margin-bottom: 10px;
}
.text-section-inner:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
  transition: 4ms ease-in;
}
.text-section-inner:active {
  transform: translateY(-1px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
  transition: 4ms ease-in;
}

.text-section{
  width: 80%;
  padding-left: 20px;
  padding-right: 30px;
  color: #676767;
  font-family: GTEestiProDisplay-Regular, serif;
  padding-top: 1%;
}

.text-section-header{
  text-align: center;
  font-size: 32px;
  color: #071333;
  font-weight: bold;
  padding-top: 3%;
  font-family: GTEestiProDisplay-Bold, serif;
}

.text-section-parah{
  text-align: center;
  font-size: 22px;
  font-family: GTEestiProDisplay-Regular, serif;
}

i{
  font-size: 48px;
  color: #071333;
  padding-right: 15px;
}

.about-image{
  width: 95%;
  border-radius: 25px;
  margin-top: 30px;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}

.text-section-inner-text h4{
  color: #071333;
  font-family: GTEestiProDisplay-Bold, serif;
}

.text-section-inner-text p{
  font-size: 18px;
  padding-right: 20px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.header-button{
  padding: 15px 60px;
  background-color: #124DA8;
  border: #124DA8;
  border-radius: 15px;
  margin-top: 10px;
  color: white;
  font-family: GTEestiProDisplay-Regular, serif;
}

.header-button:hover {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}
.header-button:active {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}

@media (max-width: 990px) {
  .section-alpha{
    display: flex;
    flex-direction: column;
  }
  .text-section{
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
  }
  .text-section-parah{
    font-size: 20px;
  }
  .header-button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
  .text-section-header{
    font-size: 25px;
  }
}

</style>

