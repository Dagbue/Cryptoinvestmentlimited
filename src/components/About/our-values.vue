<template>
<div>
  <p class="section-header-1">Our Values</p>
  <div class="landing-page-testimonial">
    <div class="landing-page-testimonial-body">
      <img class="testimony-image" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="testimonial" />
      <div class="landing-page-testimonial-text">
        <h4 class="two">Leveraging Technology</h4>
        <p class="one">We believe technology solves a lot of problems and makes life easier. And we here at Crypto Investment Limited
          aims to leverage the best of technology to make your trading life the most simple it can be.
          With our experience working with multiple platforms, we were able to design the ideal new experience.</p>
      </div>
    </div>

    <div class="landing-page-testimonial-body-2">
      <img class="testimony-image" src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="testimonial" />
      <div class="landing-page-testimonial-text">
        <h4 class="two">Customer Experience</h4>
        <p class="one">Unlike other companies in this field, we truly want to be the people’s choice. Not just in
          trading, we want to be the best brand that you have interacted with. Now, that’s a high bar, but we will be
          working extremely hard to achieve that. We are truly here to make sure that you kick-off trading the right
          way and enjoy your life as a trader.</p>
      </div>
    </div>

    <div class="landing-page-testimonial-body">
      <img class="testimony-image" src="https://images.unsplash.com/photo-1523495225575-104bd7a11999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="testimonial" />
      <div class="landing-page-testimonial-text">
        <h4 class="two">Truly Global</h4>
        <p class="one">We as a team are distributed internationally, and finding someone who speaks your language and
          in your timezone is as easy clicking the livechat button. With the website translated to multiple languages,
          including the educational content, you will find that Crypto Investment Limited is with you all the way.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "our-values"
}
</script>

<style scoped>

.section-header-1{
  font-size: 32px;
  color: #071333;
  font-weight: bold;
  padding-top: 3%;
  text-align: center;
  font-family: GTEestiProDisplay-Regular, serif;

}

.landing-page-testimonial{
  padding: 0 8% 5%;
}





.testimony-image{
  width: 28%;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
}


.landing-page-testimonial-body{
  display: flex;
  margin-top: 3%;

}

.landing-page-testimonial-body-2{
  display: flex;
  margin-top: 3%;
  padding-bottom: 4%;
  flex-direction: row-reverse;
}

.landing-page-testimonial-text {
  padding-left: 4%;
  padding-right: 2%;
  padding-top: 50px;
}



.landing-page-testimonial-text .one{
  font-family: GTEestiProDisplay-Regular, sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: rgba(25, 40, 80, 1);
  margin: 0;
}

.landing-page-testimonial-text .two{
  font-family: GTEestiProDisplay-Regular, sans-serif;
  font-size: 25px;
  line-height: 21px;
  letter-spacing: 0;
  text-align: left;
  color: rgba(25, 40, 80, 1);
  padding-bottom: 40px;
  margin: 0;
  font-weight: 700;
}

.landing-page-testimonial button{
  padding-right: 20px;
  outline: none;
  border: none;
  background: transparent;
  transition:  0.3s ease-in;
}

.landing-page-testimonial button:hover, .landing-page-testimonial button:focus {
  transform: scale(1.2);
}

@media (max-width: 990px) {
  .testimony-image{
    width: 50%;
    height: 100%;
    margin-top: 50px;
  }
}
@media (max-width: 500px){
  .landing-page-testimonial-header-two{
    font-size: 20px;
    text-align: center;
  }
  .landing-page-testimonial-body{
    display: block;
  }
  .landing-page-testimonial-body-2{
    display: block;
    flex-direction: unset;
  }
  .testimony-image{
    width: 90%;
    margin-left: 22px;
  }
  .landing-page-testimonial-text .one{
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }
  .landing-page-testimonial-text .two{
    text-align: center;
    font-size: 18px;
  }

}

</style>