<template>
<dash-content>
  <div class="settings-alpha">
  <h1 class="header-settings">Account Settings</h1>
  <div class="settings-links">
    <router-link to="/change-password" class="account-links">Change Password</router-link>
    <router-link to="/update-account" class="account-links2">Update Account</router-link>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
    <div class="content-sep">
      <hr class="line">
      <p class="foot">© 2022 Crypto Investment Limited | All Rights Reserved</p>
    </div>
  </div>
</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  name: "AccountSetting",
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
  font-size: 24px;
  color: #143159;
  text-transform: uppercase;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.settings-links{
  margin-top: 2%;
}
.account-links{
  text-decoration: none;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  padding: 18px 35px;
  background-color: #282E3BC7;
  margin-right: 1%;
  color: #143159;
  text-transform: uppercase;
  border-radius: 12px;
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
.account-links2{
  text-decoration: none;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  padding: 18px 35px;
  background-color: #282E3BC7;
  margin-left: 1%;
  color: #143159;
  text-transform: uppercase;
  border-radius: 12px;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.account-links2:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}

.account-links2:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.content-sep {
  margin-top: 8%;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.foot{
  text-align: center;
  padding-top: 5px;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}

@media (max-width: 990px) {
  .header-settings{
    font-size: 22px;
    margin-left: 15px;
  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
    font-size: 14px;
  }
}
@media (max-width: 550px) {
  .header-settings{
    font-size: 17px;
  }
  .account-links{
    padding: 15px 30px;
    margin-right: unset;
    font-size: 12px;
  }
  .account-links2{
    padding: 15px 30px;
    margin-right: unset;
    font-size: 12px;
  }
  .foot{
    font-size: 11px;
  }
}
</style>
