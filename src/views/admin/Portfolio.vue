<template>
<div v-for="items in contacts" :key="items.id">
  <h3 class="user-info-header">
    Portfolio
  </h3>
  <div class="value-alpha">

    <div class="value">
      <div class="value-1">
        <div class="logo-text">
          <i class='bx bx-download'>&nbsp;</i>
          <p>Deposited</p>
        </div>
        <p class="amount">£ {{items.deposit}}.00</p>
      </div>
      <div class="separator">
        <div class="line"></div>
      </div>
      <div class="value-2">
        <div class="logo-text">
          <i class='bx bx-recycle'/>
          <p>Ref Bonus</p>
        </div>
        <p class="amount">£ {{items.bonus}}.00</p>
      </div>
    </div>
    <div class="value">
      <div class="value-1">
        <div class="logo-text">
          <i class='bx bxs-wallet' >&nbsp;</i>
          <p>Withdrawn</p>
        </div>
        <p class="amount">£ {{items.withdrawn}}.00</p>
      </div>
      <div class="separator">
        <div class="line"></div>
      </div>
      <div class="value-2">
        <div class="logo-text">
          <i class='bx bxs-coin-stack' >&nbsp;</i>
          <p>Balance</p>
        </div>
        <p class="amount">£{{ items.deposit  + items.profits + items.bonusMain + items.bonus - items.withdrawn  }} </p>
      </div>
    </div>



    <div class="value">
      <div class="value-1">
        <div class="logo-text">
          <i class='bx bxs-coin'>&nbsp;</i>
          <p>Profits</p>
        </div>
        <p class="amount-1">£ {{items.profits}}.00</p>
      </div>
      <div class="separator">
        <div class="line"></div>
      </div>
      <div class="value-2">
        <div class="logo-text">
          <i class='bx bx-mail-send'/>
          <p class="ROI">Daily ROI</p>
        </div>
        <p class="amount">{{items.ROI}}%</p>
      </div>
    </div>
    <div class="value">
      <div class="value-1">
        <div class="logo-text">
          <i class='bx bxs-gift' >&nbsp;</i>
          <p>Bonus</p>
        </div>
        <p class="amount-1">£ {{items.bonusMain}}.00</p>
      </div>
      <div class="separator">
        <div class="line"></div>
      </div>
      <div class="value-2">
        <div class="logo-text">
          <i class='bx bxs-envelope-open'/>
          <p class="plan-inv">Investment Plan</p>
        </div>
        <p class="plan">{{items.selected}}</p>
      </div>
    </div>


  </div>
</div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Portfolio",
  data () {
    return {
      contacts: [],
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, auth.currentUser.email,));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'country': doc.data().country,
        'deposit': doc.data().deposit,
        'bonus': doc.data().bonus,
        'bonusMain': doc.data().bonusMain,
        'withdrawn': doc.data().withdrawn,
        'profits': doc.data().profits,
        'selected': doc.data().selected,
        'ROI': doc.data().ROI,
        'plan': doc.data().plan,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
      }
      this.contacts.push(data)
    })
  },
}
</script>

<style scoped>
.value{
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  position: relative;
  /*padding: 25px 92px 25px 52px;*/
  padding: 35px 66px 35px 71px;
  margin-top: 2%;
  margin-right: 2.7%;
  border-radius: 10px;
  text-align: center;
}
.value-alpha{
  display: flex;
  margin-bottom: 1%;
  margin-left: 1%;
}
.amount{
  padding-top: 10px;
  font-size: 25px;
}
.amount-1{
  padding-top: 10px;
  font-size: 25px;
}
.bx-download{
  color: #ffad46;
  font-size: 27px;
}
.bx-recycle{
  color: mediumvioletred;
  font-size: 27px;
}
.bxs-wallet{
  color: #1e6cd9;
  font-size: 27px;
}
.bxs-coin-stack{
  color: #31ce36;
  font-size: 27px;
}
.bxs-coin{
  color: #f25961;
  font-size: 27px;
}
.bx-mail-send{
  color: yellow;
  font-size: 27px;
}
.bxs-gift{
  color: #1e6cd9;
  font-size: 27px;
}
.bxs-envelope-open{
  color: orangered;
  font-size: 27px;
}
.value-1{
  padding-bottom: 8px;
}
.value-2{
  padding-top: 8px;
}
.separator {
  align-items: center;
  padding-top: 1px;
  padding-bottom: 1px;
}

.separator .line {
  height: 2px;
  width: 115%;
  background-color: white;
}
span{
  text-transform: uppercase;
  font-size: 20px;
}
.logo-text{
  display: flex;
}
p{
  font-size: 20px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.amount{
  font-family: GTEestiProDisplay-Regular,serif ;
  padding-left: 11px;
  padding-top: 1px;
}
.amount-1{
  font-family: GTEestiProDisplay-Regular,serif ;
}

.plan{
  font-size: 16px;
  font-family: GTEestiProDisplay-Regular,serif ;
  color: #0098da;
  font-weight: 700;
  padding-left: 20px;
  padding-top: 10px;
}
.plan-inv{
  font-size: 19.2px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.ROI{
  font-size: 16px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.user-info-header{
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: GTEestiProDisplay-Regular,serif ;
  padding-top: 3%;
  text-align: center;
}
</style>

