<template>
  <div>
    <pricing-header/>
    <pricing-body/>
    <br/>
    <partners-home/>
    <footer-home/>
  </div>
</template>

<script>
import PricingHeader from "@/components/Pricing/pricing-header";
import PricingBody from "@/components/Pricing/pricing-body";
import PartnersHome from "@/components/Home/partners-home";
import FooterHome from "@/components/Home/footer-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pricing",
  components: {FooterHome, PartnersHome, PricingBody, PricingHeader}
}
</script>

<style scoped>

</style>

