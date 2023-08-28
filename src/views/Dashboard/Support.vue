<template>
<dash-content>
  <div class="support">
    <h1 class="support-header">Crypto Investment Limited </h1>
    <p class="support-subheader">For inquiries, suggestions and complaints,</p>
    <i class='bx bxl-instagram-alt'></i>
    <i class='bx bxl-twitter' ></i>
    <i class='bx bxl-youtube' ></i>
    <i class='bx bxl-linkedin-square'></i>
    <p>You can  mail us at:</p>
    <a href="mailto:support@cryptoinvestmentlimited.com" class="para-last">support@cryptoinvestmentlimited.com</a>
  </div>
  <div class="content-sep">
    <hr>
    <p class="foot">© 2022 Crypto Investment Limited | All Rights Reserved</p>
  </div>
</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Support",
  components: {DashContent}
}
</script>

<style scoped>
.support{
  text-align: center;
  padding-top: 7%;
  padding-bottom: 5%;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  margin-left: 10%;
  margin-right: 8%;
  margin-top: 5%;
  border-radius: 15px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.support-header{
  font-size: 25px;
  padding-bottom: 10px;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.support-subheader{
  font-size: 20px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
i{
  font-size: 47px;
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}
i:hover{
  color: #f25961;
}
p{
  font-size: 17px;
  font-family: GTEestiProDisplay-Bold,serif ;
}

.para-last{
  font-size: 20px;
  list-style: none;
  text-decoration: none;
  color: #143159;
  font-family: GTEestiProDisplay-Regular,serif ;
}

a{
  font-family: GTEestiProDisplay-Regular,serif ;
}
.para-last:hover{
  color: #f25961;
  font-size: 22px ;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.content-sep, hr{
  margin-top: 25%;
  color: #071333;
  margin-left: 2%;
  margin-right: 2%;
}

.foot{
  text-align: center;
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}
@media (max-width: 990px) {
  .support-header{
    font-size: 30px;
    padding-bottom: 8px;
  }
  .support-subheader{
    font-size: 18px;
  }
  i{
    font-size: 38px;
  }
  p{
    font-size: 15px;
    font-family: GTEestiProDisplay-Regular,serif ;
  }
  .para-last{
    padding-bottom: 10%;
    font-size: 20px;
    font-family: GTEestiProDisplay-Bold,serif ;
  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
  }
  .support{
    text-align: center;
    padding-top: 7%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    border-radius: 15px;
  }
}
@media (max-width: 550px) {
  .support-header{
    font-size: 18px;
  }
  .support-subheader{
    font-size: 15px;
  }
  .para-last{
    font-size: 13px;
    width: 100%;
  }
  .foot{
    font-size: 11px;
  }
  .para-last:hover{
    font-size: 15px ;
  }
}
</style>

