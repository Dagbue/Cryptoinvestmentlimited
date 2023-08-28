<!--suppress BadExpressionStatementJS, JSCheckFunctionSignatures -->
<template>
  <dash-content v-for="items in contacts" :key="items.id">
    <h1 class="header"> <span class="global"> {{items.firstName}} {{items.lastName}}'s </span> DashBoard View</h1>


    <div class="card-margin">
      <div class="card-holder">
        <div class="card-1">
          <div class="card-icon">
            <i class='bx bx-download'>&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Deposited</p>
            <p class="card-big-text" v-show="approved === 'approved'">£ {{items.deposit}}</p>
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-wallet' >&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Withdrawn</p>
            <p class="card-big-text" v-show="approved2 === 'approved'">£ {{items.withdrawal}}</p>
            <p class="card-big-text" v-show="approved2 === 'pending'">£ 0</p>
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-coin'>&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Profits</p>
            <p class="card-big-text" v-show="approved === 'approved'">£ {{items.profits}}</p>
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-gift' >&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Bonus</p>
            <p class="card-big-text" v-show="approved === 'approved'">£ {{items.bonusMain}}</p>
          </div>
        </div>
      </div>

      <div class="card-holder">
        <div class="card-1">
          <div class="card-icon">
            <i class='bx bx-recycle'/>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Ref Bonus</p>
            <p class="card-big-text" v-show="approved === 'approved'">£ {{items.bonus}}</p>
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-coin-stack' >&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Balance</p>
            <p class="card-big-text" v-show="approved === 'approved'">£ {{ items.deposit + items.profits + items.bonusMain + items.bonus - items.withdrawal  }} </p>
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bx-mail-send'/>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Daily ROI</p>
            <p class="card-big-text" v-show="approved === 'approved'">{{items.ROI}}%</p>
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-envelope-open'/>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Investment Plan</p>
            <p class="card-big-text" v-show="approved === 'approved'">{{items.selected}}</p>
          </div>
        </div>
      </div>

    </div>



  </dash-content>
</template>



<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
import {useStore} from "vuex";
import {computed} from "vue";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";



export default {
  name: "DashBoard",
  components: {DashContent},
  data () {
    return {
      contacts: [],
      approved: '',
      approved2: '',
    }
  },

  setup() {
    const store = useStore()

    return {user: computed(() => store.state.user), authIsReady: computed(() => store.state.authIsReady)}
  },

  async created() {

    const querySnapshot = await getDocs(collection(db, auth.currentUser.email,));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'deposit': doc.data().deposit,
        'bonus': doc.data().bonus,
        'bonusMain': doc.data().bonusMain,
        'withdrawal': doc.data().withdrawal,
        'profits': doc.data().profits,
        'selected': doc.data().selected,
        'ROI': doc.data().ROI,
        'plan': doc.data().plan,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'statusDeposit': doc.data().statusDeposit,
        'statusWithdrawal': doc.data().withdrawal,
      }
      this.contacts.push(data)
      this.approved = doc.data().statusDeposit
      this.approved2 = doc.data().statusWithdrawal
    })


  },

}

</script>

<style scoped>

.card-margin {
  margin: 22px 50px 70px 50px;
}
.card-1 {
  display: flex;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 15px;
  width: 30%;
  margin-right: 15px;
}

.card-holder {
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
}


.card-content-margin {
  margin-left: 15px;
}

.card-text {
  font-size: 18px;
  line-height: 18px;
  color: rgba(0, 50, 92, 70%);
  font-family: GTEestiProDisplay-Bold,serif ;
  margin-bottom: 20px;
}

.card-big-text {
  font-size: 27px;
  line-height: 24px;
  color: rgba(0, 50, 92, 1);
  font-family: GTEestiProDisplay-Bold,serif ;
}


.card-1 {
  border: solid 1px #626B7F;
  border-radius: 5px;
}

.bx-download{
  color: #ffad46;
  font-size: 35px;
}
.bx-recycle{
  color: mediumvioletred;
  font-size: 35px;
}
.bxs-wallet{
  color: #1e6cd9;
  font-size: 35px;
}
.bxs-coin-stack{
  color: #31ce36;
  font-size: 35px;
}
.bxs-coin{
  color: #f25961;
  font-size: 35px;
}
.bx-mail-send{
  color: yellow;
  font-size: 35px;
}
.bxs-gift{
  color: #1e6cd9;
  font-size: 35px;
}
.bxs-envelope-open{
  color: orangered;
  font-size: 35px;
}

.bit-chart{
  margin-top: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
}

.header{
  font-size: 24px;
  margin-top: 4%;
  font-family: GTEestiProDisplay-Bold,serif ;
  color: #071333;
  text-align: center;
}
.sub-header{
  font-size: 19px;
  font-family: GTEestiProDisplay-Regular,serif ;
  padding-left: 6%;
  color: #071333;
}

span{
  text-transform: uppercase;
  font-size: 20px;
}
p{
  font-size: 20px;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.global{
  color: #124DA8;
  font-family: GTEestiProDisplay-Bold,serif ;
  letter-spacing: 1px;
}

@media only screen and (max-width: 912px) {
  .card-holder {
    display: block;
  }
  .card-1 {
    width: 100%;
    margin-bottom: 20px;
  }
  .card-margin {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 0;
  }
}
@media (max-width: 990px) {
  .value-alpha{
    display: block;
    margin-bottom: unset;
    margin-left: unset;
  }
  .value{
    position: relative;
    padding: 25px;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 20px;
    margin-top: unset;
    text-align: center;
  }
  .value-1{
    padding-bottom: unset;
  }
  .logo-text{
    display: block;
  }

  .separator .line {
    width: unset;
  }
  h1{
    text-align: center;
  }
  p{
    text-align: center;
  }
  .amount{
    padding-top: unset;
    font-size: 25px;
  }
  .amount-1{
    padding-top: unset;
    font-size: 25px;
  }
  .bx{
    font-size: 35px;
  }
}
@media (max-width: 550px) {
  .header{
    font-size: 20px;
    margin-top: 2%;
  }
  .sub-header{
    font-size: 16px;
  }
  .value{
    position: relative;
    padding: 25px;
    margin-left: unset;
    margin-right: unset;
    margin-bottom: 20px;
    margin-top: unset;
    text-align: center;
  }
}

</style>

