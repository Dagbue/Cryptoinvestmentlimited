<template>
  <div>
<!--    <header-home/>-->
    <Slider/>
    <product-card/>
    <about-company/>
    <why-choose/>
    <how-it-works/>
    <benefits-investing/>
    <investment-principles/>
    <trusted/>
    <partners-home/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>



import AboutCompany from "@/components/Home/about-company";
import WhyChoose from "@/components/Home/why-choose";
import HowItWorks from "@/components/Home/how-it-works";
import BenefitsInvesting from "@/components/Home/benefits-investing";
import InvestmentPrinciples from "@/components/Home/investment-principles";
import PartnersHome from "@/components/Home/partners-home";
import ReadyToWork from "@/components/Home/ready-to-work";
import FooterHome from "@/components/Home/footer-home";
import Trusted from "@/components/Home/Trusted";
import Slider from "@/components/Home/slideshow/Slider";
import ProductCard from "@/components/Home/ProductCard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    ProductCard,
    Slider,
    Trusted,
    FooterHome,
    ReadyToWork,
    PartnersHome, InvestmentPrinciples, BenefitsInvesting, HowItWorks, WhyChoose, AboutCompany, },
}
</script>
