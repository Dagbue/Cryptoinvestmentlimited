<template>
  <div class="download-app-container">
    <div class="download-app-intro">
      <p class="download-intro">Ready To Work with Us</p>
      <p class="download-sub"><a href="mailto:support@cryptoinvestmentlimited.com">Mail: support@cryptoinvestmentlimited.com</a></p>
<!--      <p class="download-sub"><a href="https://wa.me/14156887887?text="  target="_blank"> phone: +1 (415) 688‑7887</a></p>-->
      <p class="download-sub">International House, 12 Constance Street, London, United Kingdom, E16 2DQ</p>
      <div class="app-store-container">
      </div>
    </div>
    <div class="download-app-image">
      <img src="@/assets/boxes.svg" alt="logo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ready-to-work"
}
</script>

<style scoped>
.download-app-container{
  background-color: #071333;
  display: flex;
  justify-content: space-around;
  height: 335px;
  margin-left: 12%;
  margin-right: 12%;
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
}
.download-app-intro{
  font-family: GTEestiProDisplay-Regular,serif;
  margin-top: 5%;
  margin-left: 2%;
}


.download-intro{
  font-size: 28px;
  line-height: 40px;
  color: white;
  font-family: GTEestiProDisplay-Regular, serif;
}

.download-sub{
  color: #9CABCB;
  font-size:19px;
  line-height: 25px;
  padding-top: 2%;
  font-family: GTEestiProDisplay-Regular,serif;
}

a{
  text-decoration: none;
  list-style: none;
  transition: ease 0.3s;
  color: #9CABCB;
}

a:hover{
  color: #124DA8;
}

@media (max-width: 990px) {
  .download-intro {
    font-size: 24px;
    line-height: normal;
  }
  .download-sub{
    font-size: 17px;
    line-height: normal;
    padding-top: unset;
  }
  .download-app-container{
    height: 250px;
    padding-top: 29px;
  }
  img{
    width: 110%;
  }
}

@media (max-width: 500px){
  .download-app-container {
    display: none;
  }
}

</style>
