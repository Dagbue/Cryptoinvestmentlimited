<template>
<div>
  <h3 class="user-info-header">
    List Of Users
  </h3>
  <div class="fields-alpha"  >
    <div class="container mt-3" >
      <table class="table"  >
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Mobile Number</th>
          <th>Password</th>
<!--          <th>Referral Email</th>-->
          <th>Date Created</th>
        </tr>
        </thead>

        <tbody v-for="items in contacts" :key="items.id">
        <tr>
          <td>{{items.firstName}}</td>
          <td>{{items.lastName}}</td>
          <td>{{items.email}}</td>
          <td>{{items.country}}</td>
          <td>{{items.phoneNumber}}</td>
          <td>{{items.password}}</td>
<!--          <td>{{items.referral}}</td>-->
          <td>{{items.createdAt.toDate().toDateString()}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <form>
    <div class="fields-alpha-2">
      <label>Select Users Email</label>
      <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
        <option v-for="option in contacts" :key="option" :value="option.email" >
          {{ option.email }}
        </option>
      </select>

      <button class="btn" @click="update">Delete User</button>
    </div>
  </form>
</div>
</template>

<script>
import {collection, getDocs, doc, } from "firebase/firestore";
import {db} from "@/firebase/config";
import {deleteDoc,getFirestore} from "@firebase/firestore";

export default {
  name: "usersList",
  data()  {
    return {
      contacts: [],
      SelectEmail: "",
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "listOfUsers"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'email': doc.data().email,
        'referral': doc.data().referral,
        'phoneNumber': doc.data().phoneNumber,
        'withdrawal': doc.data().withdrawal,
        'password': doc.data().password,
        'country': doc.data().country,
        'createdAt': doc.data().createdAt,
      }
      this.contacts.push(data)
    })
  },

  methods: {
    async update() {
      const db = getFirestore();
      const docRef = doc(db, "listOfUsers", this.SelectEmail);
      await deleteDoc(docRef)
          .then(() => {
            console.log("Entire Document has been deleted successfully.")
          })
          .catch(error => {
            console.log(error);
          })

      const docRef2 = doc(db, this.SelectEmail, "USER");
      await deleteDoc(docRef2)
          .then(() => {
            console.log("Entire Document has been deleted successfully.")
          })
          .catch(error => {
            console.log(error);
          })
    },
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
  margin-top: 2%;
}

.fields-alpha-2{
  box-shadow: 0 0 30px rgba(45, 82, 194, 0.3);
  background-color: #071333;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-left: 28%;
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

.user-info-header{
  font-family: GTEestiProDisplay-Bold,serif ;
  padding-top: 3%;
  text-align: center;
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
