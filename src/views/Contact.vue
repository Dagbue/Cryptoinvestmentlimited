<template>
<div>
  <contact-header/>
  <contact-body/>
  <br/>
  <br/>
  <contact-map/>
  <partners-home/>
  <footer-home/>
</div>
</template>

<script>
import ContactHeader from "@/components/contact/contact-header";
import ContactBody from "@/components/contact/contact-body";
import PartnersHome from "@/components/Home/partners-home";
import FooterHome from "@/components/Home/footer-home";
import ContactMap from "@/components/contact/contact-map";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {ContactMap, FooterHome, PartnersHome, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>

