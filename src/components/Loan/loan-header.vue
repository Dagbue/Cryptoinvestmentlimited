<template>
  <div>
    <header class="header-alpha">
      <div class="overlay">
        <h1 class="overlay-header1">Loan Services</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "loan-header"
}
</script>

<style scoped>
.header-alpha {
  text-align: center;
  width: 100%;
  height: 370px;
  background-size: cover;
  background-attachment: scroll;
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header-alpha .overlay{
  width: 100%;
  height: 100%;
  padding: 50px;
  color: #FFF;
  text-shadow: 1px 1px 1px #333;
  background-image:
      linear-gradient(to right bottom,
      rgba(5, 5, 33, .75),
      rgba(5, 5, 33, .75)),
      url("https://plus.unsplash.com/premium_photo-1663091572638-1b01d45fb9c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGxvYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: center;
  position: relative;
}


.overlay-header1 {
  padding-top: 40px;
  font-size: 40px;
  font-family: GTEestiProDisplay-Regular,serif;
  letter-spacing: 5px;
}

@media (max-width: 990px) {
  .overlay-header1{
    padding-top: 10%;
    font-size: 42px;
  }
}

@media (max-width: 500px){
  .header-alpha {
    height: 250px;
  }
  .overlay-header1{
    padding-left: 0;
    font-size: 30px;
  }
}

</style>