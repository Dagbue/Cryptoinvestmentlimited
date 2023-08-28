<template>
<div class="section-alpha">

  <h2>Our Partners</h2>

  <div class="section-1">

<!--    <marquee-text :duration="15">-->

    <a href="https://coinmarketcap.com/"><img src="https://seeklogo.com/images/C/coinmarketcap-logo-5DD5521DC6-seeklogo.com.png"></a>

    <a href="https://trustwallet.com/"><img src="https://seeklogo.com/images/T/trust-wallet-logo-94B05A83EC-seeklogo.com.png"></a>

    <a href="https://www.binance.com/en"><img src="https://seeklogo.com/images/B/binance-exchange-logo-6592EBF48C-seeklogo.com.png"></a>

    <a href="https://discord.com/"><img src="https://seeklogo.com/images/D/discord-logo-855AEC93F1-seeklogo.com.png"></a>

    <a href="https://www.coinbase.com/"><img src="https://seeklogo.com/images/C/coinbase-new-2021-logo-D2BFF3ACD7-seeklogo.com.png"></a>

    <a href="https://crypto.com/"><img src="https://seeklogo.com/images/C/crypto-com-logo-F41F0F9CA2-seeklogo.com.png"></a>


<!--    </marquee-text>-->

  </div>


</div>
</template>

<script>
// import MarqueeText from "vue-marquee-text-component";
export default {
  name: "partners-home",
  components: {  },
}
</script>

<style scoped>
img{
  width: 90%;
  padding-right: 35px;
}

a{
  width: 100%;
}

h2{
  text-align: center;
  padding-top: 4%;
  padding-bottom: 1%;
  margin-bottom: 0;
  color: #071333;
  font-family: GTEestiProDisplay-Bold, serif;
}

.section-alpha{
  padding-bottom: 5%;
  padding-top: 0;
  margin-top: 0;
  font-family: GTEestiProDisplay-Regular, serif;
}

.section-1{
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-left: 4%;
  font-family: GTEestiProDisplay-Regular, serif;
}

@media (max-width: 500px) {
  img{
    width: 75%;
    padding-bottom: 6%;
  }

  .section-1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 21%;

  }

}
</style>

