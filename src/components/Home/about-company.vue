<template>
  <p class="about-text-1">About Company</p>
<div class="about-alpha" >

  <div class="about-section-1">
    <h4 class="about-header-1">We Help Our Clients To Achieve Their Desire Goals</h4>
    <p class="about-text-2">Crypto Investment Limited is designed to trade your investment(s) for your benefit in stocks, options, gold, and altcoins.
      We ensure a consistent day-by-day profit from your investment(s).</p>

    <div class="box">
    <div class="about-content">
      <i class='bx bx-task'></i>
      <div class="about-content-text">
        <h4>Guaranteed ROI</h4>
        <p>Trading is a difficult task which can result in loss sometimes. Our low ROI rate allows you to be
          compensated every day regardless of market fluctuations. We also provide a bonus if we experience
          negative trends, so there are no worries on your end!</p>
      </div>
    </div>
    </div>
    <div class="box">
    <div class="about-content">
      <i class='bx bx-paper-plane'></i>
      <div class="about-content-text">
        <h4>Our Mission</h4>
        <p>Our goal is to break down barriers between the privileged and lower class by investing in digital
           technologies that are accessible for everybody, regardless of socio-economic status.</p>
      </div>
    </div>
    </div>

    <button class="header-button" @click="onPostClick">Read More</button>



  </div>

  <div class="about-section-2">
    <img alt="About-Image" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="about-image" />
  </div>

</div>
</template>

<script>
export default {
  name: "about-company",
  methods: {
     onPostClick() {
      this.$router.push("/about");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.about-alpha{
  display: flex;
  padding-bottom: 5%;
}
.about-image{
  width: 92%;
  border-radius: 25px;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
  margin-left: 10px;
  margin-top: 9%;
}
.about-content{
  display: flex;
  padding-top: 15px;
  padding-right: 25px;
}
.about-content-text{
  padding-left: 20px;
  font-family: GTEestiProDisplay-Regular, serif;
}
.about-content-text h4{
  font-weight: bold;
  font-family: GTEestiProDisplay-Regular, serif;
}
.about-content-text p {
  font-size: 17px;
}
.about-section-1{
  width: 80%;
  padding-left: 80px;
  padding-right: 20px;
  color: #071333;
  font-family: GTEestiProDisplay-Regular, serif;
}
.bx-line-chart{
  font-size: 30px;
}
.box{
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.4);
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 12px;
}
.box:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
  transition: 4ms ease-in;
}
.box:active {
  transform: translateY(-1px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
  transition: 4ms ease-in;
}

.about-text-1{
  text-align: center;
  font-size: 32px;
  color: #071333;
  font-weight: bold;
  padding-top: 4%;
  font-family: GTEestiProDisplay-Bold, serif;
}

.about-header-1{
  text-align: center;
  font-weight: bold;
  font-family: GTEestiProDisplay-Regular, serif;
}
.about-text-2{
  font-size: 17px;
}
.about-section-2{
  padding-right: 20px;
}

.header-button{
  padding: 15px 50px;
  background-color: #124DA8;
  border: #124DA8;
  border-radius: 15px;
  margin-top: 5px;
  color: white;
  margin-left: 40px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.header-button:hover {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}
.header-button:active {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  transform: translateY(-1px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}


i{
  font-size: 35px;
  color: #071333;
  padding-right: 15px;
}

.about-content-text h4{
  font-size: 25px;
  color: #071333;
}

@media (max-width: 990px) {
  .about-alpha{
    display: flex;
    flex-direction: column-reverse;
  }
  .about-section-1{
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
  }
  .about-section-2{
    padding-right: unset;
    margin-left: 5%;
  }
  .about-image{
    margin-top: 2%;
    margin-bottom: 3%;
  }
  .about-text-2{
    text-align: center;
    font-size: 17px;
  }
  .header-button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
  .about-text-1{
    font-size: 25px;
  }
  .about-header-1{
    font-size: 18px;
  }
}
</style>



