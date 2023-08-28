<template>
<div>
  <testimonial-header/>
  <testimonial-body/>
  <partners-home/>
  <ready-to-work/>
  <footer-home/>
</div>
</template>

<script>
import TestimonialHeader from "@/components/Testimonial/testimonial-header";
import PartnersHome from "@/components/Home/partners-home";
import ReadyToWork from "@/components/Home/ready-to-work";
import FooterHome from "@/components/Home/footer-home";
import TestimonialBody from "@/components/Testimonial/testimonial-body";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Testimonial",
  components: {TestimonialBody, FooterHome, ReadyToWork, PartnersHome, TestimonialHeader}
}
</script>

<style scoped>

</style>