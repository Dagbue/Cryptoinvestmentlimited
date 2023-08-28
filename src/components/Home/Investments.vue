<template>
  <div class="career-choice">

    <p class="one">{{ career.title }}</p>
    <p class="two">
      {{ career.description }}
    </p>
    <p class="three">
      {{ career.subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Investments",
  props: {
    career: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.career-choice{
  display: flex;
  flex-direction: column;
  /*background-color: rgba(242, 250, 253, 1);*/
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.4);
  border-radius: 10px;
  padding-left: 40px;
  padding-top: 40px;
  width: 45%;
  margin: 10px auto;
  background-color: white;
  transition: 4ms ease-in;
}
.career-choice:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
  transition: 4ms ease-in;
}
.career-choice:active {
  transform: translateY(-1px);
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
  transition: 4ms ease-in;
}


/*.career-choice:hover{*/
/*  background-color: #071333;*/
/*  transition: 4ms ease-in;*/
/*}*/

.career-choice .one{
  font-family: GTEestiProDisplay-Regular,serif;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
  color: #071333;
  margin: 0;
  padding-top: 25px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-weight: 700;
}



.career-choice .two {
  font-family: GTEestiProDisplay-Light,serif;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0;
  color: rgba(125, 144, 184, 1);
  margin: 0;
  padding-bottom: 60px;
  padding-right: 50px;
}

.career-choice .three{
  font-family: GTEestiProDisplay-Bold,serif;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0;
  color: #124DA8;
  padding-bottom: 30px;
  margin: 0;
}

.career-choice .three:hover {
  font-size: 17px;
  font-weight: bold;
  transition: 4ms ease-in;
}


.career-choice button{
  border: none;
  background: transparent;
  outline: none;
}
@media (max-width: 990px) {
  .career-choice .one{
    font-size: 21px;
  }
  .career-choice .two{
   font-size: 17px;
  }
}

@media (max-width: 990px) {
  .career-choice{
    width: unset;
  }
}
@media (max-width: 500px) {
  .career-choice .one{
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
  .career-choice .two {
    font-size: 15px;
    line-height: 20px;
    padding-right: unset;
  }
  .career-choice{
    padding-right: 30px;
  }
  .career-choice .three{
    font-size: 14px;
    line-height: 17px;
  }
}
</style>


