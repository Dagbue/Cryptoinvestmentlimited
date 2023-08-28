<template>
  <div class="fields-alpha">
    <div class="container mt-3">
      <table class="table" >
        <thead>
        <tr>
          <th>S/N</th>
          <th>Requested(€)</th>
          <th>Receiving Mode</th>
          <th>Status</th>
        </tr>
        </thead>

        <tbody v-for="child in history" :key="child.key">
        <tr>
          <td></td>
          <td>{{child.withdrawal}}</td>
          <td>{{child.withdrawalmethod}}</td>
          <td v-for="items in investments" :key="items.id">{{items.statusWithdrawal}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {database, auth, db} from "@/firebase/config";
import {  ref, onValue } from "firebase/database";
import {collection, getDocs} from "firebase/firestore";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Withdrawal2",
  data () {
    return {
      history: [],
      investments: [],
    }
  },
  async created() {
    const myUserId = auth.currentUser.uid;
    const HistoryRef = ref(database, myUserId + "/WithdrawalRequests");
    onValue(HistoryRef, (snapshot) => {
      let _history = [];
      snapshot.forEach((child) => {
        const key = child.key;
        const data = child.val()
        _history.push({
          key: key,
          withdrawal: data.withdrawal,
          withdrawalmethod: data.withdrawalmethod,
          createdAt: data.createdAt,
        })
      })
      this.history = _history;
    })

    const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'statusWithdrawal': doc.data().statusWithdrawal,
      }
      this.investments.push(data)
    })

  },
}
</script>

<style scoped>
.fields-alpha{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 2%;
  border-radius: 12px;
  margin-top: 5%;
}
.fields{
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
}
hr{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
th{
  color: #143159;
  text-align: center;
  font-family: GTEestiProDisplay-Regular,serif ;
}
td{
  color: #143159;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.table{
  border-collapse: separate;
}

tr td:first-child:before
{
  counter-increment: Serial;      /* Increment the Serial counter */
  content:counter(Serial); /* Display the counter */
}

@media (max-width: 990px) {
  .fields-alpha{

    margin-left: unset;
    margin-right: unset;

  }
}
@media (max-width: 550px) {
  th{
    font-size: 12px;
  }
  td{
    font-size: 12px;
  }
  .table{
    width: 100%;
  }
  .fields-alpha{
    padding-top: 15px;
    margin-top: 3%;
  }
}
</style>

