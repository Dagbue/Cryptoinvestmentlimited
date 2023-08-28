<template>
<div>
  <h4 class="user-info-header">withdrawal request</h4>
  <div class="fields-alpha">
    <div class="container mt-3">
      <table class="table" >
        <thead>
        <tr>
          <th>Email</th>
          <th>Requested(€)</th>
          <th>Receiving Mode</th>
<!--          <th>Wallet Address</th>-->
          <th>Status</th>
<!--          <th>createdAt</th>-->
        </tr>
        </thead>

        <tbody v-for="child in history" :key="child.key">
        <tr>
          <td>{{child.email}}</td>
          <td>{{child.withdrawal}}</td>
          <td>{{child.withdrawalmethod}}</td>
<!--          <td>{{child.bitcoinAddress}}</td>-->
          <td>{{child.statusWithdrawal}}</td>
<!--          <td>{{child.createdAt}}</td>-->
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <form>
    <div class="fields-alpha-2">
      <label>Select Users Email</label>
      <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
        <option v-for="option in history" :key="option" :value="option.email" >
          {{ option.email}}
        </option>
      </select>

      <button class="btn" @click="update" type="button">Approve</button>
      <button class="btn" @click="deletee" type="button">Decline</button>
    </div>
  </form>
</div>
</template>

<script>
import {database, db} from "@/firebase/config";
import {onValue, ref, remove} from "firebase/database";
import {doc,setDoc} from "firebase/firestore";
import router from "@/router";

export default {
  name: "withdrawalRequest",
  data () {
    return {
      SelectEmail: "",
      history: [],
      statusUpdate:"approved",
      statusUpdate2:"declined",
      depositValue: 0
    }
  },
  async created() {
    const HistoryRef = ref(database,"/WithdrawalRequests");
    onValue(HistoryRef, (snapshot) => {
      let _history = [];
      snapshot.forEach((child) => {
        const key = child.key;
        const data = child.val()
        _history.push({
          key: key,
          withdrawalmethod: data.withdrawalmethod,
          withdrawal: data.withdrawal,
          email: data.email,
          createdAt: data.createdAt,
          statusWithdrawal: data.statusWithdrawal,
        })
      })
      this.history = _history;
    })
  },

  methods: {
    async update() {
      await setDoc(doc(db, this.SelectEmail, "USER"), {
        statusWithdrawal: this.statusUpdate,
      }, {merge: true})
      await setDoc(doc(db, "Investment", this.SelectEmail), {
        statusWithdrawal: this.statusUpdate,
      }, {merge: true})
      await remove(ref(database, "WithdrawalRequests/"))
          .then(() => {
            router.push("/investments")
          });
    },



    async deletee() {
      // const db = getFirestore();
      // const docRef = doc(db, "Investment", this.SelectEmail);
      // await deleteDoc(docRef)
      //     .then(() => {
      //       console.log("Entire Document has been deleted successfully.")
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     })
      await setDoc(doc(db, "Investment", this.SelectEmail), {
        withdrawal: this.depositValue,
        statusWithdrawal: this.statusUpdate2,
      }, {merge: true})

      await setDoc(doc(db, this.SelectEmail, "USER"), {
        withdrawal: this.depositValue,
        statusWithdrawal: this.statusUpdate2,
      }, {merge: true})

      await remove(ref(database, "WithdrawalRequests/"))
          .then(() => {
            router.push("/investments")
          });
    }
  }
}
</script>

<style scoped>
.fields-alpha{
  box-shadow: 0 0 30px rgba(45, 82, 194, 0.3);
  background-color: #071333;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 12px;
  margin-top: 3%;
}

.user-info-header{
  color: #071333;
  letter-spacing: 1px;
  font-family: GTEestiProDisplay-Bold,serif ;
  padding-top: 3%;
  text-align: center;
}

.fields-alpha-2{
  box-shadow: 0 0 30px rgba(45, 82, 194, 0.3);
  background-color: #071333;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 12px;
  margin-top: 2%;
}

label{
  color: white;
  font-family: GTEestiProDisplay-Regular,serif ;
  padding-right: 10px;
}

.btn{
  padding: 5px 20px;
  border-radius: 5px;
  color: white;
  background-color: #124DA8;
  margin-left: 2%;
  border-color: #124DA8;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
th{
  color: white;
  text-align: center;
  font-family: GTEestiProDisplay-Regular,serif ;
}
td{
  color: white;
  text-align: center;
  font-family: GTEestiProDisplay-Regular,serif ;
}
</style>