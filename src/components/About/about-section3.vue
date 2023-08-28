<template>
  <h3 class="section-header-1">Our Mission</h3>
  <div class="section-alpha">
    <p class="section-header">To empower people to grow their knowledge and wealth as part of a global community of investors.</p>
  </div>
</template>

<script>
export default {
  name: "about-section3"
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
  padding-bottom: 4%;
  color: #124DA8;
  font-weight: 300;
  font-family: GTEestiProDisplay-bold, serif;
}
.section-header-1{
  font-size: 32px;
  color: #071333;
  font-weight: bold;
  padding-top: 5%;
  text-align: center;
  font-family: GTEestiProDisplay-Regular, serif;
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
    width: 90%;
  }
}
</style>