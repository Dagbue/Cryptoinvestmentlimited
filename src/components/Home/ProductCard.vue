<template>
  <main>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 v-if="showTitle" class="products-header">Our Core Services</h1>
    </transition>
    <transition-group
      tag="section"
      class="products"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <base-card
        v-for="product in products"
        :key="product.title"
        :product="product"
      />
    </transition-group>
  </main>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
import BaseCard from "@/components/Home/BaseCard";
export default {
  name: "ProductCard",
  components: {
    BaseCard,
  },
  data() {
    const showTitle = ref(true);
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-100px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };
    return {
      products: [
        {
          title: "Retirement Planning",
          content:
            "There is nothing better than a financially secure future. Dont spend all your money today," +
            "plan for a better tomorrow. We simply advise on how to go about your finances today and let you " +
            "smile about it tomorrow.",
          src: "https://cdn.pixabay.com/photo/2018/03/21/16/18/investment-3247252__340.jpg",
          image: "Granddad.png",
        },
        {
          title: "Risk Management",
          content:
            "Today, there are many investment companies all over the globe, and it may be tasking and " +
            "confusing to make the right choice. Our risk evaluation gives you a full report and final advice " +
            "on your investment plans.",
          src: "https://cdn.pixabay.com/photo/2017/08/18/18/56/dices-over-newspaper-2656028__340.jpg",
          image: "Risk.png",
        },
        {
          title: "Financial Market",
          content:
            "Aside our major investment portfolio being in cryptocurrency and forex, Our Parent company " +
            "partners in a lot of foreign short term projects. Partnerships in categories of Agriculture, " +
            "Oil & Gas.",
          src: "https://cdn.pixabay.com/photo/2018/04/05/02/25/analytics-3291738_960_720.jpg",
          image: "budget.png",
        },

        {
          title: "Loan Services",
          content:
              "Personal loan" +
              " unlock a world of possibilities, fulfil your future plans today with an unsecured" +
              " Personal Loan, flexible tenor up to 60 months of repayment period, As low as 1.083% interest rate per month.",
          src: "https://plus.unsplash.com/premium_photo-1663091572638-1b01d45fb9c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGxvYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          image: "budget.png",
        },
      ],
      showTitle,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style scoped>
.products {
  display: flex;
  /*max-width: 1280px;*/
  width: 90%;
  padding: 20px;
  margin: 0 auto;
}

.products-header {
  text-align: center;
  padding-top: 2%;
  margin-bottom: 0;
  color: #071333;
  font-size: 30px;
  font-family: GTEestiProDisplay-Bold, serif;
  letter-spacing: 1px;
}
@media (max-width: 990px) {
  .products-header{
    font-size: 29px;
    margin-bottom: 0;
  }
}

@media (max-width: 800px) {
  .products {
    display: block;
    justify-content: center;
  }
  .products-header{
    font-size: 25px;
    margin-bottom: 0;
  }
}

</style>
