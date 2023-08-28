<template>
  <div class="section-alpha">
    <p class="section-header-1">Loan Features</p>



    <div class="section-content">

      <div class="first-part">

        <div class="separate">
          <div class="icon-part">
            <i class='bx bxs-megaphone'></i>
          </div>
          <div class="text-part">
            <p style="font-weight: 900">No Security Required</p>
            <p>Loans are fully unsecured with no security required.</p>
          </div>
        </div>
        <div class="separate">
          <div class="icon-part">
            <i class='bx bx-notepad' ></i>
          </div>
          <div class="text-part">
            <p style="font-weight: 900">Easy Repayment.</p>
            <p>Repayment directly from your account with us.</p>
          </div>
        </div>
        <div class="separate">
          <div class="icon-part">
            <i class='bx bxs-hourglass' ></i>
          </div>
          <div class="text-part">
            <p style="font-weight: 900">Convenience.</p>
            <p>Wide range of channels where you can make repayment.</p>
          </div>
        </div>

      </div>

      <div class="second-part">
        <div class="separate">
          <div class="icon-part">
            <i class='bx bx-money' ></i>
          </div>
          <div class="text-part">
            <p style="font-weight: 900">Take Over Facility</p>
            <p>We can help you move your loan with another bank <br/>to take advantage of our competitive terms.</p>
          </div>
        </div>

        <div class="separate">
          <div class="icon-part">
            <i class='bx bx-laptop' ></i>
          </div>
          <div class="text-part">
            <p style="font-weight: 900">No Preliquidation Charges</p>
            <p>You can make free partial or full liquidation at your<br/> conveninece through our 24/7 online banking.</p>
          </div>
        </div>


        <div class="separate">
          <div class="icon-part">
            <i class='bx bx-wallet' ></i>
          </div>
          <div class="text-part">
            <p style="font-weight: 900">Top Up For Your Needs.</p>
            <p>If you need additional financing during your loan tenor, <br/>
              we offer you a top up as long as you have made regular repayments.</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LoanFeatures"
}
</script>

<style scoped>
.section-alpha{
  background-color: #f0f2f4;
  padding-bottom: 4%;
  padding-left: 5%;
  padding-right: 4%;
}

.section-header-1{
  font-size: 32px;
  color: #071333;
  font-weight: bold;
  padding-top: 3%;
  text-align: center;
  font-family: GTEestiProDisplay-Regular, serif;
}

.section-content{
  display: flex;
  justify-content: space-evenly;
  padding-top: 3%;
  padding-bottom: 2%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(20, 49, 89, 0.5);
}

.separate{
  display: flex;
  padding-top: 3%;
  padding-bottom: 5%;
}

.bx{
  font-size: 70px;
  color: #124DA8;
}

.text-part p {
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 18px;
  font-family: GTEestiProDisplay-Regular, serif;
}
.icon-part{
  padding-right: 2%;
}

@media (max-width: 1280px) {
  .first-part{
  margin-left: 6%;
}
  .second-part{
    margin-right: 3%;
  }
}

@media (max-width: 1100px) {
  .first-part{
    margin-top: 2%;
  }
  .text-part p {
    font-size: 16px;
  }
}

@media (max-width: 900px) {
  /*.section-content{*/
  /*  display: block;*/
  /*  margin-right: auto;*/
  /*  margin-left: auto;*/
  /*}*/
  .bx{
    font-size: 60px;
  }
  .text-part p {
    font-size: 14px;
  }
}

@media (max-width: 700px) {
  .section-content{
    display: block;
  }
  .bx{
    padding-top: 10%;
    font-size: 45px;
  }
  .icon-part{
  }
  .text-part{
    text-align: center;
  }
  .text-part p {
    font-size: 17px;
  }
  .separate{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  .first-part{
    margin-left: unset;
  }
  .second-part{
    margin-right: unset;
  }
}

@media (max-width: 500px) {
  .text-part p {
    font-size: 15px;
  }
}

</style>