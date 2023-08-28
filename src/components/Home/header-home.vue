<template>
<div class="header-alpha">
  <div class="header-text">
    <p class="header-text-para">Your Money Is In Good Hands</p>
    <h1 class="header-text-head">Financial Investment With True Results</h1>
    <p class="header-text-para2"> Join the fastest growing team of millionaires and change
      your financial status with almost ZERO work. </p>
    <button class="header-button">Get Started</button>
  </div>
</div>
  <div style="height:62px; background-color: #1D2330; overflow:hidden; box-sizing: border-box;
  border: 1px solid #282E3B; border-radius: 4px; text-align: right; line-height:14px; block-size:62px;
  font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #262B38;
  padding:1px; margin: 0; width: 100%;">
    <div style="height:40px; padding:0; margin:0; width: 100%;">
      <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
              width="100%" height="36px"   style="border:0;margin:0;padding:0;"></iframe>
    </div>
    <div style="color: #626B7F; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box;
    padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;">
      <a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #626B7F;
      text-decoration:none; font-size:11px">Cryptocurrency Prices</a>
      &nbsp;by Expert Trades Limited</div></div>
</template>

<script>
export default {
  name: "header-home"
}
</script>

<style scoped>

.header-alpha{
  height: 80vh;
  background-image: url("https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.header-alpha:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
}

.header-text{
  color: white;
  position: absolute;
  padding-top: 7%;
  padding-left: 7%;
  width: 60%;
  letter-spacing: 1px;
  line-height: 1.2;
  font-family: GTEestiProDisplay-Regular, serif;
}
.header-text-para{
  padding-bottom: 27px;
  font-size: 21px;
}

.header-text-head {
  padding-bottom: 20px;
  font-size: 50px;
}

.header-text-para2{
  padding-bottom: 25px;
  font-size: 20px;
}


.header-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}
.header-button:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}


.header-button{
  padding: 15px 50px;
  background-color: #071333;
  border: #071333;
  border-radius: 15px;
  margin-top: 10px;
  color: white;
  margin-left: 40px;
  font-family: GTEestiProDisplay-Regular, serif;
}

</style>

