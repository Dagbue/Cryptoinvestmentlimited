<template>
  <div class="career-choice-container">
    <div class="career-choice-header"
         v-motion
         :initial="{ opacity: 0, y: 100 }"
         :enter="{ opacity: 1, y:0 }"
         :delay="2000"
    >
      <p class="one">Why Choose Us</p>
      <p class="two">
        Managing capital for institutions and private investors all over the
        world. Let investment professionals help you.
      </p>
    </div>
    <div class="career">
      <Investments
          v-for="(career, index) in careerList"
          :key="index"
          :career="career"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y:0 }"
          :delay="2500"
      />
    </div>
  </div>
</template>


<script>
import Investments from "@/components/Home/Investments";
export default {
  name: "why-choose",
  components: {Investments},
  data() {
    return {
      careerList: [
        {
          titleImage: "wealth.png",
          title: "Best In-Class Experience",
          description:
              "Yes, we are very serious about this being easy for our users. Our designers focus every waking hour to get this right.",
          subtitle: "LEARN MORE",
        },
        {
          titleImage: "Designer.svg",
          title: "Live Support",
          description:
              "Our Live support service is available 24 hours a day, 7 days a week. When you need us, we are always here for you.",
          subtitle: "LEARN MORE",
        },
        {
          titleImage: "ProjectManagers.svg",
          title: "Premium Security",
          description:
              "Your personal information and trading activities are encrypted to ensure your safety and privacy. Your safety matters.",
          subtitle: "LEARN MORE",
        },
        {
          titleImage: "BusinessAnalyst.svg",
          title: "Registered Company",
          description:
              "Crypto Investment Limited is a fully registered company. The licensed trading firm has the FCA and PRA licenses.",
          subtitle: "LEARN MORE",
        },
      ],
    };
  },
};
</script>

<style scoped>
.career-choice-container {

  padding: 0 8% 100px;
  background-color: rgba(242, 250, 253, 0.4);
}

.career-choice-header {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.career-choice-header .one {
  margin: 0;
  font-family: GTEestiProDisplay-Regular, serif;
  font-size: 32px;
  line-height: 46px;
  letter-spacing: 0;
  text-align: center;
  color: rgba(25, 40, 80, 1);
  padding-bottom: 20px;
  width: 60%;
  font-weight: bold;
}

.career-choice-header .two {
  font-family: GTEestiProDisplay-Light, serif;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  color: rgba(125, 144, 184, 1);
  padding-bottom: 30px;
  width: 80%;
  margin: 0;
}

.career-choice-header button {
  outline: none;
  background: #0098da;
  border-radius: 70px;
  color: rgba(255, 255, 255, 1);
  font-family: GTEestiProDisplay-Regular, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: center;
  padding: 16px 25px;
  transition: background-color 0.5s ease-in;
  /*margin-bottom: 100px;*/
}

.career-choice-header button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.career-choice-header button:hover,
.career-choice-header button:focus {
  background-color: rgba(7, 19, 51, 1);
  color: white;
}

.career-choice-header button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: -3.5px;
  right: -20px;
  transition: 0.5s;
  font-size: 40px;
  color: white;
}

.career-choice-header button:hover span {
  padding-right: 25px;
}

.career-choice-header button:hover span:after {
  opacity: 1;
  right: 0;
}

.career {
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
}

.career-choice .three button img {
  animation: moveforwardbackward 2s infinite;
  animation-direction: reverse;
}

@keyframes moveforwardbackward {
  from {
    left: 0;
  }
  to {
    left: 200px;
  }
}

.career-choice button {
  border: none;
  background: transparent;
  outline: none;
}

@media (max-width: 990px) {
  .career-choice-header .one{
    font-size: 27px;
  }
  .career-choice-header .two{
    font-size: 17px;
  }
}

@media (max-width: 500px) {
  .career {
    display: block;
  }
  .career-choice-header .one {
    font-size: 25px;
    width: unset;
  }

  .career-choice-header .two {
    font-size: 16px;
    width: unset;
    line-height: 20px;
    padding-bottom: 28px;
  }
}

</style>