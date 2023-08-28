<template>
  <dash-content>
    <div class="settings-alpha">
      <h1 class="header-settings">Transaction History</h1>
      <div class="settings-links">
        <router-link to="/deposit2" class="account-links">Deposit</router-link>
        <router-link to="/withdrawal2" class="account-links">Withdrawal</router-link>
        <router-link to="/roihistory2" class="account-links-last">Loan Request</router-link>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>

    </div>
  </dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  name: "TransactionHistory",
  components: {DashContent}
}
</script>

<style scoped>
.settings-alpha{
  text-align: center;
  padding-top: 40px;
}
.header-settings{
  padding-bottom: 20px;
  font-size: 23px;
  text-transform: uppercase;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.settings-links{
  margin-top: 2%;
}
.account-links{
  text-decoration: none;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  padding: 18px 40px;
  margin-right: 2%;
  color: #143159;
  text-transform: uppercase;
  border-radius: 12px;
  font-size: 17px;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.account-links:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}

.account-links:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.account-links-last{
  text-decoration: none;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  padding: 18px 35px;
  margin-right: 2%;
  color: #143159;
  text-transform: uppercase;
  border-radius: 12px;
  font-size: 17px;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.account-links-last:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.account-links-last:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.content-sep, hr{
  margin-top: 25%;
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
@media (max-width: 990px) {

  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
  }
  .foot{
    font-size: 15px;
  }

  .header-settings{
    font-size: 22px;
  }
}
@media (max-width: 550px) {
  .header-settings{
    font-size: 18px;
  }
  .account-links{
    padding: 15px 30px;
    margin-right: 5px;
    margin-left: 5px;
    font-size: 12px;
  }
  .account-links-last{
    display: none;
  }
  .foot{
    font-size: 11px;
  }
}
</style>


