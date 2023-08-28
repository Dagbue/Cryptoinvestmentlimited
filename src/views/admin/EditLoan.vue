<template>
  <h3 class="user-info-header">
    List of Loans
  </h3>
  <div>
    <div class="container mt-3" >
      <table class="table" >
        <thead>
        <tr>
          <th>Email</th>
          <th>Loan Balance</th>
          <th>Prepayment Fee</th>
          <th>Loan Status</th>
          <th>Loan Plan</th>
        </tr>
        </thead>

        <tbody v-for="items in contacts" :key="items.id">
        <tr>
          <td>{{items.email}}</td>
          <td>$ {{items.loanDeposit}}</td>
          <td>$ {{items.prepaymentFee}}</td>
          <td>{{ items.statusLoan }}</td>
          <td>{{items.loanPlan}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <form>
      <div class="fields-alpha-2">
        <!--      <label>Select Email</label>-->
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Users Email" required>
          <option value="" disabled>Select Users Email</option>
          <option v-for="option in contacts" :key="option" :value="option.email" >
            {{ option.email}}
          </option>
        </select>

        <!--      <label>Enter Profit</label>-->
        <input type="number" v-model="loanBalance" placeholder="Enter Loan Balance"/>
        <button class="btn" @click="update1" type="button">Submit</button>

        <!--      <label>Enter Bonus</label>-->
        <input type="number" v-model="prepayment" placeholder="Enter Prepayment Fee"/>
        <button class="btn" @click="update2" type="button">Submit</button>

      </div>
    </form>
  </div>
</template>

<script>
import {collection, doc, getDocs, increment, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "EditLoan",
  data () {
    return {
      SelectEmail: "",
      contacts: [],
      loanBalance:"",
      prepayment:"",
    }
  },
  async created() {
    const querySnapshot2 = await getDocs(collection(db, "loans"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'email': doc.data().email,
        'loanDeposit': doc.data().loanDeposit,
        'prepaymentFee': doc.data().prepaymentFee,
        'statusLoan': doc.data().statusLoan,
        'loanPlan': doc.data().loanPlan,
      }
      this.contacts.push(data)
    })


  },

  methods: {
    async update1() {
      await setDoc(doc(db, "loans" ,this.SelectEmail ), {
        loanDeposit: increment(this.loanBalance),
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        loanDeposit: increment(this.loanBalance),
      },{ merge: true })
          .then(() => location.reload());
    },

    async update2() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        prepaymentFee: increment(this.prepayment),
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        prepaymentFee: increment(this.prepayment),
      },{ merge: true })
          .then(() => location.reload());
    },
  }
}
</script>

<style scoped>
.user-info-header{
  letter-spacing: 1px;
  font-family: GTEestiProDisplay-Bold,serif ;
  padding-top: 4%;
  color: #071333;
  text-align: center;
}

th{
  text-align: center;
  padding: 15px;
  color: white;
  font-family: GTEestiProDisplay-Regular,serif ;
}

td{
  color: white;
  text-align: center;
  padding: 20px;
  font-family: GTEestiProDisplay-Regular,serif ;
}


.table{
  box-shadow: 0 0 30px rgba(45, 82, 194, 0.3);
  background-color: #071333;
  border-radius: 10px;
}

.fields-alpha-2{
  box-shadow: 0 0 30px rgba(45, 82, 194, 0.3);
  background-color: #071333;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  margin-left: 3%;
  margin-right: 5%;
  border-radius: 12px;
  margin-top: 2%;
}

label{
  color: white;
  font-family: GTEestiProDisplay-Regular,serif ;
  padding-right: 5px;
  padding-left: 5px;
}

.btn{
  padding: 3px 11px;
  border-radius: 5px;
  color: white;
  background-color: #124DA8;
  margin-left: 1%;
  border-color: #124DA8;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

input{
  margin-left: 20px;
}

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
</style>