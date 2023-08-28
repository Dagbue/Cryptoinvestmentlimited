<template>
<dash-content>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>


  <h1 class="header-alpha">DEPOSIT</h1>

  <form @submit.prevent="sendDeposit" >
    <div class="bank-trans">
      <div class="bank-trans-form">
        <label>Enter Amount</label>
        <input type="number" placeholder="Enter Amount" required="required" name="Amount" v-model="deposit" />
      </div>
      <div class="bank-trans-form2">
        <label>Choose Method Of Deposit</label>
        <select aria-required  name="selected" required="required" v-model="depositMethod">
          <option value=""></option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="USDT">USDT</option>
          <option value="GLC">Gold Coin</option>
          <option value="BCH">Bitcoin Cash</option>
        </select>
      </div>
    </div>
    <input type="submit"  class="bank-trans-btn" placeholder="Enter Amount" />
  </form>

</dash-content>
</template>


<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
import router from "@/router";
import {  ref, set, push, serverTimestamp,} from "firebase/database";
import {database, auth ,db} from "@/firebase/config";
import {doc, setDoc, increment} from "firebase/firestore";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Deposit",
  components: {DashContent},
  data() {
    return {
      deposit: 0,
      withdrawal : 0,
      bonus : 0,
      bonusMain : 0,
       profits :0,
      depositMethod:"",
      email: auth.currentUser.email,
      statusDeposit: "Pending",
    }
  },
  methods: {
    async sendDeposit() {
      // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
      await setDoc(doc(db, auth.currentUser.email, "USER"), {
        deposit: increment(this.deposit),
        depositMethod: this.depositMethod,
        statusDeposit: this.statusDeposit,
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit')
          })

      await setDoc(doc(db,"Investment", auth.currentUser.email), {
        deposit: increment(this.deposit),
        depositMethod: this.depositMethod,
        statusDeposit: this.statusDeposit,
        withdrawal: this.withdrawal,
        bonus: this.bonus,
        bonusMain: this.bonusMain,
        profits: this.profits,
        email: this.email
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit admin')
          })

      const myUserId = auth.currentUser.uid;
      const Deposit = ref(database, myUserId + "/DepositRequests");
      const newDeposit = push(Deposit);
      await set(newDeposit, {
        depositMethod: this.depositMethod,
        deposit: this.deposit,
        createdAt: serverTimestamp(),
      })


      const Deposit2 = ref(database, "/DepositRequests");
      const newDeposit2 = push(Deposit2);
      await set(newDeposit2, {
        depositMethod: this.depositMethod,
        deposit: this.deposit,
        email: this.email,
        statusDeposit: this.statusDeposit,
        createdAt: serverTimestamp(),
      })
      await router.push('/bitcoin')
    },
  },

  }




</script>

<style scoped>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.header-alpha{
  padding-top: 60px;
  margin-left: 10%;
  font-size: 26px;
  padding-bottom: 10px;
  text-align: center;
  padding-right: 110px;
  font-family: GTEestiProDisplay-Bold,serif ;
  letter-spacing: 3px;
  color: #143159;
}
.bank-trans{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  color: #FFFFFF;
  margin-bottom: 3%;
  margin-right: 10%;
  margin-left: 13%;
  padding: 5% 5% 7% 6%;
  border-radius: 12px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 17px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
option{
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  font-family: GTEestiProDisplay-Regular,serif ;
}
label{
  padding-top: 2px;
  padding-bottom: 12px;
  font-size: 19px;
  color: #143159;
  font-weight: 700;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.bank-trans-btn{
  padding: 15px 85px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  border-radius: 10px;
  font-size: 17px;
  font-family: GTEestiProDisplay-Regular,serif ;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.bank-trans-btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.content-sep, hr{
  margin-top: 10%;
  color: #071333;
  margin-left: 2%;
  margin-right: 2%;
}

.foot{
  text-align: center;
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}


@media (max-width: 550px) {
  .bank-trans{
    margin-right: unset;
    margin-left: unset;
  }
  .header-alpha{
    padding-top: 30px;
    margin-left: unset;
    font-size: 24px;
    padding-bottom: 10px;
    text-align: center;
    padding-right: unset;
  }
}

</style>
