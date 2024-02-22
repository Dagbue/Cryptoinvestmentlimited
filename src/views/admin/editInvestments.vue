<template>
  <h3 class="user-info-header">
    Edit Investments
  </h3>
  <div>
    <div class="container mt-3" >
      <table class="table" >
        <thead>
        <tr>
          <th>Email</th>
          <th>Trade Plans</th>
          <th>Account Balance</th>
          <th>Deposit</th>
          <th>Profits</th>
          <th>Bonus</th>
          <th>Ref Bonus</th>
          <th>Withdrawal</th>
        </tr>
        </thead>

        <tbody v-for="items in contacts" :key="items.id">
        <tr>
          <td>{{items.email}}</td>
          <td>{{items.selected}}</td>
          <td>$ {{items.balance}}</td>
          <td>$ {{ items.deposit }}</td>
          <td>$ {{items.profits}}</td>
          <td>$ {{items.bonusMain}}</td>
          <td>$ {{items.bonus}}</td>
          <td>$ {{items.withdrawal}}</td>
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
        <input type="number" v-model="deposit" placeholder="Edit Deposit"/>
        <button class="btn" @click="update4" type="button">Edit</button>

        <!--      <label>Enter Profit</label>-->
        <input type="number" v-model="profits" placeholder="Edit Profit"/>
        <button class="btn" @click="update1" type="button">Edit</button>

        <!--      <label>Enter Bonus</label>-->
        <input type="number" v-model="bonusMain" placeholder="Edit Bonus"/>
        <button class="btn" @click="update2" type="button">Edit</button>

        <!--      <label>Enter Ref Bonus</label>-->
        <input type="number" v-model="bonus" placeholder="Edit Ref Bonus"/>
        <button class="btn" @click="update3" type="button">Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "editInvestments",
  data () {
    return {
      SelectEmail: "",
      contacts: [],
      profits:"",
      bonus:"",
      bonusMain:"",
      deposit:""
    }
  },
  async created() {
    const querySnapshot2 = await getDocs(collection(db, "Investment"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'email': doc.data().email,
        'selected': doc.data().selected,
        'deposit': doc.data().deposit,
        'withdrawal': doc.data().withdrawal,
        'profits': doc.data().profits,
        'bonus': doc.data().bonus,
        'bonusMain': doc.data().bonusMain,
        'balance': doc.data().deposit +++ doc.data().profits +++ doc.data().bonus +++ doc.data().bonusMain --- doc.data().withdrawal,
      }
      this.contacts.push(data)
    })


  },
  methods: {
    async update1() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        profits: this.profits,
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        profits: this.profits,
      },{ merge: true })
          .then(() => location.reload());
    },

    async update2() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        bonusMain: this.bonusMain,
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        bonusMain: this.bonusMain,
      },{ merge: true })
          .then(() => location.reload());
    },

    async update3() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        bonus: this.bonus,
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        bonus: this.bonus,
      },{ merge: true })
          .then(() => location.reload());
    },

    async update4() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        deposit: this.deposit,
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        deposit: this.deposit,
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
  padding-left: 20px;
  margin-left: 1%;
  margin-right: 1%;
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
  margin-left: 10px;
  width: 13.5%;
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