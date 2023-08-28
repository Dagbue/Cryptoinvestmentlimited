suppress JSUnresolvedFunction, JSCheckFunctionSignatures
<!--suppress JSCheckFunctionSignatures -->
<template>
  <div></div>
  <form class="update-account"  @submit.prevent>
    <div v-for="items in contacts" :key="items.id">
      <i class='bx bxs-user-rectangle'></i>
      <p>{{items.firstName}} {{items.lastName}}</p>
    </div>


    <div v-for="items in contacts" :key="items.id" >
      <i class='bx bxs-home'></i>
      <p>{{items.address}}</p>
    </div>

    <div v-for="items in contacts" :key="items.id">
      <i class='bx bx-info-circle' ></i>
      <p>{{items.bio}}</p>
    </div>


    <div v-for="items in contacts" :key="items.id">
      <i class='bx bx-phone-call'></i>
      <p>{{items.phoneNumber}}</p>
    </div>


    <div v-for="items in contacts" :key="items.id">
      <i class='bx bxs-calendar' ></i>
      <p>{{items.dateOfBirth}}</p>
    </div>

    <button @click="showDialog" class="bank-trans-btn">Update Account</button>
  </form>

  <base-modal4  @close="hideDialog" v-if="dialogIsVisible" class="subscribe">
    <h4 class="header-update">Update Your Account Details</h4>

    <form @submit.prevent="sendDeposit">
      <div class="five">
        <label class="account">Address:</label>
        <input type="text" placeholder="" required=""   class="full-name" v-model="address" />
      </div>
      <div class="five">
        <label class="account">Bio:</label>
        <textarea type="text" placeholder=""  class="full-name" rows="2" v-model="bio" />
      </div>
      <div class="five">
        <label class="account">Phone Number:</label>
        <input type="number" placeholder="" required=""   class="full-name" v-model="phoneNumber"/>
      </div>
      <div class="five">
        <label class="account">Date Of Birth:</label>
        <input type="text" placeholder="" required=""   class="full-name" v-model="dateOfBirth" />
      </div>
      <input type="submit"  class="bank-trans-btn" placeholder="Update Account" />
    </form>

  </base-modal4>
</template>


<script>
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import router from "@/router";
import BaseModal4 from "@/components/BaseComponents/modal/BaseModal4";
export default {
  name: "UpdateAccount",
  components: {BaseModal4},
  data () {
    return {
      contacts: [],
      dialogIsVisible: false,
      firstName: "",
      lastName: "",
      address: "",
      bio:"",
      phoneNumber: "",
      dateOfBirth: "",
    }
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    sendDeposit() {
      updateDoc(doc(db, auth.currentUser.email, "USER" ), {
        address: this.address,
        bio: this.bio,
        phoneNumber: this.phoneNumber,
        dateOfBirth: this.dateOfBirth,
      })
          .then(() => {
            alert("Account Updated")
          })
      router.push('/wallet')
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'email': doc.data().email,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'address': doc.data().address,
        'bio': doc.data().bio,
        'phoneNumber': doc.data().phoneNumber,
        'dateOfBirth': doc.data().dateOfBirth,
      }
      this.contacts.push(data)
    })

  },

}
</script>

<style scoped>
textarea{
  padding-left: 20px;
}
.update-account{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  color: #FFFFFF;
  margin: 5% 25% 1.5% 20%;
  padding: 4% 5% 4% 6%;
  border-radius: 10px;
}
i{
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
}
.bank-trans-btn{
  padding: 10px 50px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  border-radius: 10px;
  margin-right: 5%;
  margin-top: 1%;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.bank-trans-btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

div{
  display: flex;
  justify-content: center;
}
.five{
  padding-bottom: 6%;
}
.header-update{
  padding-bottom: 15px;
  color: #143159;
}
.account{
  padding-right: 10px;
}
.full-name{
  padding: 2px 25px;
  border-radius: 10px;
}
p{
  font-size: 20px;
}
@media (max-width: 550px) {
  .update-account{
    margin-top: 30px;
  }
  .full-name{
    padding: 1px 12px;
    border-radius: 10px;
    margin-right: 12px;
  }
  label{
    margin-left: 12px;
  }
  .header-update{
    font-size: 16px;
  }
}
</style>
