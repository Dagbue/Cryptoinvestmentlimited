<template>
  <dash-content>
    <h1 class="header-alpha">ADD YOUR WITHDRAWAL INFO</h1>
    <form @submit.prevent="handleSubmit">
      <div class="bank-trans">
        <div class="bank-trans-header">Bitcoin</div>
        <div class="bank-trans-form">
          <label>Bitcoin Address</label>
          <input type="text" placeholder="Enter Bitcoin Address" required name="Bitcoin" v-model="bitcoinAddress" />
        </div>
      </div>

      <div class="bank-trans">
        <div class="bank-trans-header">Ethereum</div>
        <div class="bank-trans-form">
          <label>Ethereum Address</label>
          <input type="text" placeholder="Enter Ethereum Address" required name="Ethereum" v-model="ethereumAddress"  />
        </div>
      </div>

      <div class="bank-trans">
        <div class="bank-trans-header">USDT</div>
        <div class="bank-trans-form">
          <label>USDT Address</label>
          <input type="text" placeholder="Enter USDT Address" required name="USDT"  v-model="litcoinAddress" />
        </div>
      </div>

      <button class="bank-trans-btn" >Submit</button>
    </form>
  </dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth} from "firebase/auth";
import {doc, updateDoc, getFirestore, serverTimestamp} from "firebase/firestore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Account",
  components: {DashContent},
  setup() {
    const bitcoinAddress = ref('')
    const ethereumAddress = ref('')
    const litcoinAddress = ref('')
    const error = ref(null)

    const router = useRouter()

    const handleSubmit = async () => {
      try {
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        updateDoc(doc(db, auth.currentUser.email, "USER"), {
          bitcoinAddress: bitcoinAddress.value,
          ethereumAddress: ethereumAddress.value,
          litcoinAddress: litcoinAddress.value,
          createdAt: serverTimestamp()
        })
            .then( async () => {
              await alert("Wallet Addresses Saved Successfully");
            })
        await router.push('/dash-board')
      }
      catch (err) {
        error.value = err.message
      }
    }

    const auth = getAuth();
    const db = getFirestore();


    return {
      bitcoinAddress,ethereumAddress,litcoinAddress,
      handleSubmit, error,
      updateDoc, doc
    }
  },
}
</script>

<style scoped>
.header-alpha{
  margin-top: 4%;
  margin-left: 3%;
  font-size: 22px;
  padding-bottom: 20px;
  text-align: center;
  color: #124DA8;
  padding-right: 110px;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.bank-trans{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  color: #FFFFFF;
  margin-bottom: 1.7%;
  margin-right: 15%;
  margin-left: 12%;
  padding: 32px 6% 42px;
  border-radius: 12px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
.bank-trans-header{
  padding-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}

input{
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
}

label{
  padding-top: 7px;
  padding-bottom: 17px;
  font-size: 15px;
  color: #071333;
  font-weight: 700;
  font-family: GTEestiProDisplay-Regular,serif ;
  display: none;
}

.bank-trans-btn{
  margin-bottom: 4%;
  padding: 13px 100px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  border-radius: 15px;
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 16px;
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


@media (max-width: 990px) {
  .header-alpha{
    font-size: 20px;
    margin-top: unset;
  }

  .bank-trans{
    padding: 20px 5% 35px;
    border-radius: 15px;
    margin-left: unset;
    margin-right: unset;
  }

  .bank-trans-header{
    font-size: 20px;
  }

  .bank-trans-btn{
    margin-bottom: 6%;
    padding: 14px 80px;
    font-size: 15px;
  }
}

</style>

