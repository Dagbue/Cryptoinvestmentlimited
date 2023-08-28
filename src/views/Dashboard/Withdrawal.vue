<!--suppress JSCheckFunctionSignatures, JSUnresolvedFunction -->
<template>
  <dash-content>
    <h1 class="header-alpha">WITHDRAWAL REQUEST</h1>


    <form @submit.prevent="sendWithdrawl" v-show="deposit">
      <div class="bank-trans">
        <div class="bank-trans-form">
          <label>Enter Amount</label>
          <input type="number" placeholder="Enter Amount" required name="amount" v-model="withdrawal" />
        </div>

        <div class="bank-trans-form2">
          <label>Choose Method Of Withdrawal</label>
          <select   name="selected"  required v-model="withdrawalmethod">
            <option value=""></option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="USDT">USDT</option>
            <option value="GLC">Gold Coin</option>
            <option value="BCH">Bitcoin Cash</option>
          </select>
        </div>


      </div>
      <button class="bank-trans-btn" @click="sendWithdrawl" type="button">Submit</button>
      <base-modal3 @close="hideDialog" v-if="dialogIsVisible">
        <h1 class="modal-text">Your Request Has Been Sent For Processing!! </h1>
        <p class="modal-text-2">Kindly Note:For Faster Response you can contact support at <span>  <a href="mailto:support@cryptoinvestmentlimited.com" class="para-last">support@cryptoinvestmentlimited.com</a></span></p>
        <div class="bank-trans-form2">
        </div>
        <button @click="hideDialog" class="btn-sub">Close</button>
      </base-modal3>
    </form>


    <p v-show="deposit === 0" class="zero">Kindly make a deposit to access this feature</p>

  </dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
import BaseModal3 from "@/components/BaseComponents/modal/BaseModal3";

import router from "@/router";
import {  ref, set, push, serverTimestamp,} from "firebase/database";
import { database, auth , db } from "@/firebase/config";
import {collection, doc, getDocs, increment, setDoc} from "firebase/firestore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Withdrawal",
  components: {BaseModal3, DashContent},
  data() {
    return {
      dialogIsVisible: false,
      withdrawal: 0,
      withdrawalmethod:"",
      statusWithdrawal: "Pending",
      email: auth.currentUser.email,
      contacts: [],
      walletAddress: "",
      deposit:'',
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, auth.currentUser.email,));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'bitcoinAddress': doc.data().bitcoinAddress,
        'litcoinAddress': doc.data().litcoinAddress,
        'ethereumAddress': doc.data().ethereumAddress,
      }
      this.contacts.push(data)
    })

    const querySnapshot2 = await getDocs(collection(db ,auth.currentUser.email,));
    querySnapshot2.forEach((doc) => {
      this.deposit = doc.data().deposit
    })
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
      alert("Withdrawal Request Sent")
      router.push('/dash-board')
    },


    async sendWithdrawl() {
      await setDoc(doc(db, auth.currentUser.email, "USER"), {
        withdrawal: increment(this.withdrawal),
        withdrawalmethod: this.withdrawalmethod,
        statusWithdrawal: this.statusWithdrawal
      }, {merge: true})
          .then(() => {
            console.log('saved the Withdrawal')
          })

      await setDoc(doc(db,"Investment", auth.currentUser.email), {
        withdrawal: increment(this.withdrawal),
        withdrawalmethod: this.withdrawalmethod,
        statusWithdrawal: this.statusWithdrawal,
        email: this.email
      }, {merge: true})
          .then(() => {
            console.log('saved the Withdrawal admin')
          })

      const myUserId = auth.currentUser.uid;
      const Deposit = ref(database, myUserId + "/WithdrawalRequests");
      const newDeposit = push(Deposit);
      await set(newDeposit, {
        withdrawalmethod: this.withdrawalmethod,
        withdrawal: this.withdrawal,
        createdAt: serverTimestamp(),
      })

      const Deposit2 = ref(database, "/WithdrawalRequests");
      const newDeposit2 = push(Deposit2);
      await set(newDeposit2, {
        withdrawalmethod: this.withdrawalmethod,
        withdrawal: this.withdrawal,
        statusWithdrawal: this.statusWithdrawal,
        email: this.email,
        createdAt: serverTimestamp(),
      })

      await this.showDialog()
      // await alert("Withdrawal Successful pending confirmation")

      // await router.push('/dash-board')
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
  margin-left: 8%;
  font-size: 23px;
  padding-bottom: 10px;
  text-align: center;
  color: #143159;
  padding-right: 110px;
  font-family: GTEestiProDisplay-Bold,serif ;
  letter-spacing: 2px;
}
.bank-trans{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  color: #FFFFFF;
  margin-bottom: 1.5%;
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
  padding-top: 10px;
  padding-bottom: 10px;
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
  padding: 12px 75px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.bank-trans-btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.content-sep {
  margin-top: 17%;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.foot{
  text-align: center;
  padding-top: 5px;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
.modal-text{
  text-align: center;
  font-size: 20px;
  padding-bottom: 12px;
  padding-top: 40px;
}
.modal-text-2{
  text-align: center;
  font-size: 14px;
  line-height: 1.3;
}
span{
  margin-top: 20px;
  color: #143159;
  font-size: 19px;
}

.zero{
  padding-left: 5%;
  padding-top: 20px;
  font-size: 18px;
  color: #f25961;
  font-weight: 700;
}

.btn-sub{
  margin-left: 35%;
  padding: 8px 50px;
  color: white;
  margin-top: 20px;
  background-color: #124DA8;
  border-color: #124DA8;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 16px;
}

.btn-sub:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.para-last{
  font-size: 20px;
  list-style: none;
  text-decoration: none;
}

.para-last:hover{
  font-size: 21px;
  font-weight: bold;
  transition:font-size 4ms ease-in;
}


@media (max-width: 550px) {
  .bank-trans{
    margin-right: unset;
    margin-left: unset;
  }
  .header-alpha{
    padding-top: 30px;
    margin-left: unset;
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
    padding-right: unset;
  }
  .modal-text{
    font-size: 18px;
  }
  .modal-text-2{
    font-size: 15px;
  }
  .btn-sub{
    margin-left: 27%;
    padding: 8px 50px;
    font-size: 15px;
  }
  span{
    width: 100%;
    font-size: 14px;
  }
  input{
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 15px;
  }
  .modal-text{
    font-size: 20px;
  }
  .modal-text-2{
    font-size: 15px;
  }
}
</style>

