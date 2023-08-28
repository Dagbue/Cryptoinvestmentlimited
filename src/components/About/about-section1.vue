<template>
<div class="section-alpha">
  <p class="section-header">Crypto Investment Limited has created a multi-asset investment platform that is built on social collaboration and
    investor education: a community where users can connect, share,learn and Earn.</p>
</div>
</template>

<script>
export default {
  name: "about-section1"
}
</script>

<style scoped>
.section-alpha{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1%;
}
.section-header{
  font-size: 24px;
  width: 50%;
  padding-top: 5%;
  padding-bottom: 5%;
  color: #124DA8;
  font-weight: 300;
  font-family: GTEestiProDisplay-Bold, serif;
}

hr{
  border-bottom: 5px solid #071333;
  margin-left: 45%;
  margin-right: 45%;
  margin-bottom: 4%;
}

@media (max-width: 500px) {
  .section-header{
    font-size: 22px;
    width: 80%;
  }
}
</style>
