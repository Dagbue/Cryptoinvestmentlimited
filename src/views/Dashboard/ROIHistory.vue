<template>
<dash-content>
  <div>
    <h1 class="history-header">Loan Services</h1>
<!--    <div class="fields-alpha">-->
<!--    <div class="container mt-3">-->
<!--      <table class="table" >-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th>Amount(€)</th>-->
<!--          <th>Type</th>-->
<!--          <th>Status</th>-->
<!--          <th>Date Created</th>-->
<!--        </tr>-->
<!--        </thead>-->

<!--        <tbody v-for="child in history" :key="child.key">-->
<!--&lt;!&ndash;        <tr>&ndash;&gt;-->
<!--&lt;!&ndash;          <td>{{child.amount}}</td>&ndash;&gt;-->
<!--&lt;!&ndash;          <td>{{child.selected}}</td>&ndash;&gt;-->
<!--&lt;!&ndash;          <td>{{child.status}}</td>&ndash;&gt;-->
<!--&lt;!&ndash;          <td>{{child.createdAt}}</td>&ndash;&gt;-->
<!--&lt;!&ndash;        </tr>&ndash;&gt;-->
<!--        </tbody>-->
<!--      </table>-->

<!--    </div>-->

<!--  </div>-->

    <form @submit.prevent="sendDeposit" >
      <div class="bank-trans">

        <div class="bank-trans-form2">
          <label>Choose A Loan Plan</label>
          <select aria-required  name="selected" required="required" v-model="loan" >
            <option value=""></option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Business Loan">Business Loan</option>
            <option value="Investment Loan">Investment Loan</option>
          </select>
        </div>

        <p class="note" v-if="this.loan === 'Personal Loan'">
          NB: loan amount ranges from $10,000 to $500,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>

        <p class="note" v-if="this.loan === 'Business Loan'">
          NB: loan amount ranges from $50,000 to $3,000,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>

        <p class="note" v-if="this.loan === 'Investment Loan'">
          NB: loan amount ranges from $500,000 to $10,000,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>
        <br/>
        <div class="bank-trans-form">
          <label>Enter Amount</label>
          <input type="number"  required="required" name="Amount" v-model="deposit" />
        </div>
        <br/>
        <div class="bank-trans-form2">
          <label>Choose Method Of Deposit</label>
          <select aria-required  name="selected" required="required" v-model="depositMethod" >
            <option value=""></option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="USDT">USDT</option>
<!--            <option value="GLC">Gold Coin</option>-->
            <option value="BCH">Bitcoin Cash</option>
          </select>
        </div>
      </div>
      <input type="submit" class="bank-trans-btn" placeholder="Request Loan" />
    </form>


  </div>

</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
import {doc, increment, setDoc} from "firebase/firestore";
import {auth, database, db} from "@/firebase/config";
import {push, ref, serverTimestamp, set} from "firebase/database";
import router from "@/router";
export default {
  name: "ROIHistory",
  components: {DashContent},
  data() {
    return {
      loan: "",
      depositMethod:"",
      deposit: "",
      statusDeposit: "Pending",
      email: auth.currentUser.email,
      prepaymentFee: 0
    }
  },
  methods: {
    onPostClick() {
      this.$router.push("/bitcoin");
      window.scrollTo(0, 0);
    },
    async sendDeposit() {
      await setDoc(doc(db, auth.currentUser.email, "USER"), {
        loanDeposit: increment(this.deposit),
        loanDepositMethod: this.depositMethod,
        statusLoan: this.statusDeposit,
        loanPlan: this.loan,
        prepaymentFee: this.prepaymentFee
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit')
          })

      await setDoc(doc(db,"loans", auth.currentUser.email), {
        loanDeposit: increment(this.deposit),
        loanDepositMethod: this.depositMethod,
        statusLoan: this.statusDeposit,
        loanPlan: this.loan,
        prepaymentFee: this.prepaymentFee,
        email: this.email
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit admin')
          })

      const myUserId = auth.currentUser.uid;
      const Deposit = ref(database, myUserId + "/loanRequests");
      const newDeposit = push(Deposit);
      await set(newDeposit, {
        loanDepositMethod: this.depositMethod,
        loanDeposit: this.deposit,
        email: this.email,
        createdAt: serverTimestamp(),
      })


      const Deposit2 = ref(database, "/loanRequests");
      const newDeposit2 = push(Deposit2);
      await set(newDeposit2, {
        loanDepositMethod: this.depositMethod,
        loanDeposit: this.deposit,
        email: this.email,
        statusLoan: this.statusDeposit,
        createdAt: serverTimestamp(),
      })
      await router.push('/bitcoin')
    },
  },
}
</script>

<style scoped>
.history-header{
  padding-top: 3%;
  padding-bottom: 30px;
  font-size: 25px;
  text-align: center;
  color: #143159;
  /*text-transform: uppercase;*/
  font-family: GTEestiProDisplay-Bold,serif ;
}
/*.fields-alpha{*/
/*  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);*/
/*  background-color: #282E3BC7;*/
/*  padding-top: 20px;*/
/*  padding-bottom: 50px;*/
/*  margin-left: 3%;*/
/*  margin-right: 2%;*/
/*  border-radius: 15px;*/
/*  text-align: center;*/
/*}*/
/*hr{*/
/*  margin-left: 5%;*/
/*  margin-right: 5%;*/
/*  margin-top: 1%;*/
/*}*/
/*.content-sep {*/
/*  margin-top: 39%;*/
/*  color: #071333;*/
/*}*/
/*.foot{*/
/*  text-align: center;*/
/*  padding-top: 5px;*/
/*}*/
/*p{*/
/*  font-family: GTEestiProDisplay-Regular,serif ;*/
/*}*/
/*th{*/
/*  color: #143159;*/
/*  font-family: GTEestiProDisplay-Regular,serif ;*/
/*}*/
/*td{*/
/*  color: #143159;*/
/*  font-family: GTEestiProDisplay-Regular,serif ;*/
/*}*/

/*.content-sep, hr{*/
/*  margin-top: 36%;*/
/*  color: #071333;*/
/*  margin-left: 2%;*/
/*  margin-right: 2%;*/
/*}*/

/*.foot{*/
/*  text-align: center;*/
/*  color: #071333;*/
/*  font-family: GTEestiProDisplay-Regular,serif ;*/
/*}*/




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
  /*padding-bottom: 10px;*/
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  /*padding-top: 20px;*/
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



@media (max-width: 990px) {
  .history-header{
    font-size: 22px;
  }
  .fields-alpha{
    margin-left: unset;
    margin-right: unset;

  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
  }
  .foot{
    font-size: 15px;
  }
}

.note {
  padding-top: 13px;
  color: white;
  font-family: GTEestiProDisplay-Bold, serif;
  font-size: 15px;
}

@media (max-width: 550px) {
  .history-header{
    font-size: 20px;
  }
  .foot{
    font-size: 11px;
  }
}
</style>

