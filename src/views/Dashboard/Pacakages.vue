<template>
<div>

  <div class="section-1">
    <h1 class="section-1-header">Choose your Plan</h1>
    <p class="section-1-para">Pick the best plan that meets your business needs.
      A free trial is available to help you with the decision-making.</p>
    <button class="section-1-btn" @click="showDialog">GET STARTED</button>
    <base-modal3 @click="handleSubmit" v-if="dialogIsVisible">

        <div class="modal-select">
          <label>Please select a Plan</label>
          <select  name="selected" v-model="selected" required>
            <option value="" ></option>
            <option value="BASIC">BASIC</option>
            <option value="STANDARD" >STANDARD</option>
            <option value="PREMIUM">PREMIUM</option>
            <option value="DELUXE">DELUXE</option>
            <option value="401K PLAN">401K PLAN</option>
          </select>

          <label>Please select Daily ROI</label>
          <select  name="selected" v-model="ROI" required>
            <option value="" ></option>
            <option value="10">BASIC</option>
            <option value="20" >STANDARD</option>
            <option value="30">PREMIUM</option>
            <option value="40">DELUXE</option>
            <option value="50">401K PLAN</option>
          </select>
          <button @click="handleSubmit" class="btn-sub">Proceed to Deposit</button>
        </div>


    </base-modal3>
  </div>

  <div class="section-alpha">
    <div class="box">
      <div class="color">
        <h4 class="color-header">BASIC</h4>
        <h2 class="text-1">10%</h2>
        <p class="text-1">4 MONTHS</p>
      </div>
      <p class="text">$500 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">1.3% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>-->
    </div>

    <div class="box">
      <div class="color">
        <h4 class="color-header">STANDARD</h4>
        <h2 class="text-1">20%</h2>
        <p class="text-1">8 MONTHS</p>
      </div>
      <p class="text">$10,000 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">1.5% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>-->
    </div>

    <div class="box">
      <div class="color">
        <h4 class="color-header">PREMIUM</h4>
        <h2 class="text-1">30%</h2>
        <p class="text-1">12 MONTHS</p>
      </div>
      <p class="text">$50,000 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">1.8% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>-->
    </div>
  </div>

  <div class="section-alpha">
    <div class="box">
      <div class="color">
        <h4 class="color-header">DELUXE</h4>
        <h2 class="text-1">40%</h2>
        <p class="text-1">12 MONTHS</p>
      </div>
      <p class="text">100,000 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">2.0% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>-->
    </div>

    <div class="box">
      <div class="color">
        <h4 class="color-header">401k PLAN</h4>
        <h2 class="text-1">50%</h2>
        <p class="text-1">24 MONTHS</p>
      </div>
      <p class="text">$1million MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">5% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>-->
    </div>

  </div>


</div>
</template>

<script>
import BaseModal3 from "@/components/BaseComponents/modal/BaseModal3";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth} from "firebase/auth";
import {doc, getFirestore, setDoc} from "firebase/firestore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pacakages",
  components: {BaseModal3},
  data() {
    return {
      dialogIsVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    // handleSubmit() {
    //   router.push("/deposit")
    // }
  },

  setup() {
    const selected = ref('')
    const  ROI = ref('')
    const error = ref(null)

    const router = useRouter()

    const handleSubmit = async () => {
      try {
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        setDoc(doc(db, auth.currentUser.email, "USER"), {
          selected: selected.value,
          ROI: ROI.value,
        },{ merge: true })
            .then(() => {
              console.log('saved again')
            })

        setDoc(doc(db, "Investment" ,auth.currentUser.email), {
          selected: selected.value,
        },{ merge: true })
            .then(() => {
              console.log('saved again')
            })
        await router.push('/deposit')
      }
      catch (err) {
        error.value = err.message
      }
    }

    const auth = getAuth();
    const db = getFirestore();

    return {
      selected, handleSubmit, error,
      ROI
    }

  }
}
</script>

<style scoped>

.section-1{
  display: flex;
  justify-content: space-evenly;
  padding-top: 5%;
  padding-bottom: 4%;
}

.section-1-header{
  width: 25%;
  font-size: 32px;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.section-1-para{
  width: 35%;
  font-size: 17px;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
  line-height: 1.5;
}
.section-1-btn{
  width: 25%;
  padding: 15px 25px;
  margin-right: 20px;
  border-radius: 12px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 16px;
}
.section-1-btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
i{
  font-size: 24px;
  color: #124DA8;
}

.section-2{
  display: flex;
  justify-content: space-evenly;
  padding-top: 2%;
}
.section-2-card{
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.6);
  padding: 50px;
  line-height: 2;
  text-align: center;
  font-size: 21px;
  border-radius: 15px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

span{
  font-weight: 700;
  font-size: 20px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
h2{
  font-family: GTEestiProDisplay-Regular,serif ;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
h3{
  color: #143159;
  font-weight: 700;
  font-size: 25px;
}
.btn-sub{
  padding: 12px 25px;
  margin-right: 50px;
  margin-left: 50px;
  border-radius: 12px;
  font-size: 15px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.btn-sub:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.modal-select{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
}

label{
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 10px;
}

select{
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 10px;
  margin-bottom: 7%;
  font-weight: bold;
}

option{
  font-family: GTEestiProDisplay-Regular,serif ;
  padding-bottom: 22px;
  font-size: 16px;
}

.box{
  background-color: #282E3BC7;
  padding: 60px;
  padding-left: 80px;
  padding-right: 80px;
  border-radius: 15px;
  margin-bottom: 12px;
  margin-top: 1%;
  text-align: center;
  font-family: GTEestiProDisplay-Regular, serif;
}
.box:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}
.box:active {
  transform: translateY(-1px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
}



.color-header{
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: bold;
}

.color{
  padding-bottom: 15px;
}

.text{
  color: #ffffff;
  padding-bottom: 10px;
  font-size: 17px;
  border-bottom: 4px solid #626B7F;
  letter-spacing: 1.5px;
}

.text-1{
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn:link,
.btn:visited {
}
.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}
.btn:active {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.btn-white {
  background-color:  #124DA8;
  color: white;
  font-size: 15px;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 50px;
  margin-top: 15%;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 15px;
}


@media (max-width: 990px) {
  .section-1-header{
    width: 20%;
    font-size: 28px;
    font-family: GTEestiProDisplay-Regular,serif ;
  }
}

@media (max-width: 550px) {
  .section-1-header{
    width: unset;
    font-size: 20px;
    text-align: center;
  }
  .section-1-para{
    width: unset;
    font-size: 15px;
    margin-left: 12px;
    margin-right: 7px;
  }
  .section-1-btn{
    width: unset;
    padding: 10px 22px;
    margin-right: unset;
    border-radius: 12px;
    font-size: 14px;
  }
  .section-alpha{
    display: block;
    justify-content: space-evenly;
  }
  .section-2{
    display: block;
  }
  .section-2-card{
    padding: 23px;
    font-size: 17px;
    line-height: 1;
    letter-spacing: unset;
  }
  h3{
    font-size: 20px;
  }
}

</style>

