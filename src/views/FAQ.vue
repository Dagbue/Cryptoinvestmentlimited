<template>
<div>
  <f-a-q-header/>
  <f-a-q-body/>
  <partners-home/>
  <footer-home/>
</div>
</template>

<script>
import FAQHeader from "@/components/FAO/f-a-q-header";
import FAQBody from "@/components/FAO/f-a-q-body";
import PartnersHome from "@/components/Home/partners-home";
import FooterHome from "@/components/Home/footer-home";
export default {
  name: "FAQ",
  components: {FooterHome, PartnersHome, FAQBody, FAQHeader}
}
</script>

<style scoped>

</style>