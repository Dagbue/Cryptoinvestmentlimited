<template>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>
  </div>
  <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slider",
  components: {
    Slides,
  },

  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          title: "Become an investor on the market and Trade profitably",
          para: "Copy Transactions of traders from around the world benefit from their trading.",
        },
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG9mZmljZSUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          title: "Your Money Is In Good Hands Financial Investment With True Results",
          para: "Join the fastest growing team of millionaires and change your financial status with almost ZERO work.",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
          title: "With over 20 Years In The Stock Market",
          para: "Does Your Money Need Speed ? Manage your Investments Easily, Profitably and Effectively.",
        },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },

  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
}
@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
