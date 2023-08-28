<template>
<div class="alpha">
  <div class="section-alpha-1">
    <h3 class="header">Choose An Investment Plan</h3>
<!--    <i class='bx bx-filter'></i>-->
  </div>

<div class="section-alpha">
  <div class="box">
    <div class="color">
    <h4 class="color-header">BASIC</h4>
    <h2 class="text-1">10%</h2>
    <p class="text-1">4 MONTHS</p>
    </div>
    <p class="text">$500 MINIMUM DEPOSIT</p>
    <p class="text">ENHANCED SECURITY</p>
    <p class="text">1.3% DAILY</p>
    <p class="text">GUARANTEED ROI</p>
    <p class="text">24/7 SUPPORT</p>
    <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
  </div>

  <div class="box">
    <div class="color">
    <h4 class="color-header">STANDARD</h4>
    <h2 class="text-1">20%</h2>
    <p class="text-1">8 MONTHS</p>
    </div>
    <p class="text">$10,000 MINIMUM DEPOSIT</p>
    <p class="text">ENHANCED SECURITY</p>
    <p class="text">1.5% DAILY</p>
    <p class="text">GUARANTEED ROI</p>
    <p class="text">24/7 SUPPORT</p>
    <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
  </div>

  <div class="box">
    <div class="color">
    <h4 class="color-header">PREMIUM</h4>
    <h2 class="text-1">30%</h2>
    <p class="text-1">12 MONTHS</p>
    </div>
    <p class="text">$50,000 MINIMUM DEPOSIT</p>
    <p class="text">ENHANCED SECURITY</p>
    <p class="text">1.8% DAILY</p>
    <p class="text">GUARANTEED ROI</p>
    <p class="text">24/7 SUPPORT</p>
    <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
  </div>
</div>

  <div class="section-alpha">
    <div class="box">
      <div class="color">
        <h4 class="color-header">DELUXE</h4>
        <h2 class="text-1">40%</h2>
        <p class="text-1">12 MONTHS</p>
      </div>
      <p class="text">$100,000 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">2.0% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
    </div>

    <div class="box">
      <div class="color">
        <h4 class="color-header">401k PLAN</h4>
        <h2 class="text-1">50%</h2>
        <p class="text-1">24 MONTHS</p>
      </div>
      <p class="text">$1million MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">5% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "pricing-body",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  padding-top: 5%;
  background-color: #f0f2f4;
  padding-bottom: 5%;
}

.bx-filter{
  color: #124DA8;
  font-size: 60px;
}

.header{
  color: #124DA8;
  letter-spacing: 1px;
  font-family: GTEestiProDisplay-Bold, serif;
}

.box{
  background-color: #071333;
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 60px;
  padding-left: 80px;
  padding-right: 80px;
  border-radius: 15px;
  margin-bottom: 12px;
  margin-top: 3%;
  text-align: center;
  font-family: GTEestiProDisplay-Regular, serif;
}
/*.box:hover {*/
/*  transform: translateY(-3px);*/
/*  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);*/
/*  transition: 4ms ease-in;*/
/*}*/
/*.box:active {*/
/*  transform: translateY(-1px);*/
/*  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);*/
/*  transition: 4ms ease-in;*/
/*}*/

.section-alpha{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-1{
  display: block;
  text-align: center;
}

.color-header{
  color: #124DA8;
  letter-spacing: 1px;
  font-weight: bold;
}

.color{
  padding-bottom: 15px;
}

.text{
  color: white;
  padding-bottom: 10px;
  font-size: 17px;
  border-bottom: 4px solid #626B7F;
  letter-spacing: 1.5px;
}

.text-1{
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
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
  background-color:  #124DA8;
  border-color: #124DA8;
  color: white;
  font-size: 15px;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 50px;
  margin-top: 15%;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 15px;
}

@media (max-width: 990px) {
  .section-alpha{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .box{
    margin: 3% 8% 8%;
  }
}

</style>