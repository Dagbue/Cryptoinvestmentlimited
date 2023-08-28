<template>
  <div>
    <loan-header/>
    <loan-body/>
    <partners-home/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import LoanHeader from "@/components/Loan/loan-header";
import LoanBody from "@/components/Loan/loan-body";
import PartnersHome from "@/components/Home/partners-home";
import ReadyToWork from "@/components/Home/ready-to-work";
import FooterHome from "@/components/Home/footer-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Loan",
  components: {FooterHome, ReadyToWork, PartnersHome, LoanBody, LoanHeader}
}
</script>

<style scoped>

</style>