<template v-if="authIsReady">
  <div class="outer">

    <div v-if="user" class="sidebar" v-show="!mobile">
      <img src="@/assets/companylogo.jpg" alt="logo" class="footer-img" />
<!--      <div class="user">Welcome To</div>-->
<!--      <div class="user">CAPITAL & GROWTH LIMITED</div>-->
      <ul class="nav-list" >

        <li>
          <a>
            <i class='bx bxs-home'></i>
            <router-link to="dash-board" class="links-name">DashBoard</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-user'></i>
            <router-link to="/account" class="links-name">Account</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-support' ></i>
            <router-link to="/support" class="links-name">Support</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-line-chart' ></i>
            <router-link to="/loan-service" class="links-name">Request Loan</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-line-chart' ></i>
            <router-link to="/loan-dash-board" class="links-name">LoanDashBoard</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-briefcase' ></i>
            <router-link to="/transactionhistory" class="links-name">Transaction History</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-credit-card' ></i>
            <router-link to="/deposit" class="links-name">Deposit</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-wallet' ></i>
            <router-link to="/withdrawal" class="links-name">Withdrawal</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-grid-alt' ></i>
            <router-link to="/subscription-trade" class="links-name">Subscription Trade</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-package' ></i>
            <router-link to="/pacakages" class="links-name">Packages</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-recycle' ></i>
            <router-link to="/refer-users" class="links-name">Refer Users</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-cog' ></i>
            <router-link to="/account-settings" class="links-name">Account Settings</router-link>
          </a>
        </li>


        <button @click="handleClick" class="logout">Logout</button>
      </ul>
    </div>



    <div v-if="user" class="dropdown-nav-2" v-show="mobileNav" >

      <div class="icon-2">
        <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <ul>

        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bxs-home'></i>
            <router-link to="dash-board" class="">DashBoard</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bxs-user'></i>
            <router-link to="/account" class="">Account</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bx-support' ></i>
            <router-link to="/support" class="">Support</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bx-line-chart' ></i>
            <router-link to="/loan-service" class="">Request Loan</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bx-line-chart' ></i>
            <router-link to="/loan-dash-board" class="">LoanDashBoard</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bxs-briefcase' ></i>
            <router-link to="/transactionhistory" class="">Transaction History</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bx-credit-card' ></i>
            <router-link to="/pacakages" class="">Deposit</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bxs-wallet' ></i>
            <router-link to="/withdrawal" class="">Withdrawal</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bxs-grid-alt' ></i>
            <router-link to="/subscription-trade" class="">Subscription Trade</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bxs-package' ></i>
            <router-link to="/pacakages" class="">Packages</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bx-recycle' ></i>
            <router-link to="/refer-users" class="">Refer Users</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bxs-cog' ></i>
            <router-link to="/account-settings" class="">Account Settings</router-link>
          </a>
        </li>

        <button @click="handleClick" class="logout">Logout</button>
      </ul>
    </div>


    <dash-content v-if="user">
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.name">
            <div class="icon">
              <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
            </div>
          <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </dash-content>


    <div v-if="!user" class="final">
      <router-link to="/login" class="back-login">Go Back To The Login Page</router-link>
      <router-link to="/" class="back-home">Go Back To The Home Page</router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from "vue";
import router from "@/router";
import DashContent from "@/components/BaseComponents/dash/DashContent";


export default {
  name: "DashHome",
  components: {DashContent},
  setup() {
    const store = useStore()
    const handleClick = async () => {
      await store.dispatch('logout')
    }
    router.push('/dash-home')
    return { handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)}
  },
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2() {
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style scoped>
.outer{
  display: flex;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar{
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background: #071333;
  border: 2px solid black;
  padding: 6px 20px 37px;
}

img{
  width: 50%;
}

.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 4px;
  list-style: none;
  line-height: 20px;
}
.sidebar ul li input{
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: aliceblue;
  padding-left: 50px;
  font-size: 17px;
  color: black;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.sidebar ul li .bx-search-alt{
  position: absolute;
  z-index: 99;
  color: black;
  font-size: 20px;
}
.sidebar ul li a{
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  font-size: 15px;
}
.sidebar ul li a:hover{
  color: #124DA8;
  background: aliceblue;
}
.sidebar ul li a:active{
  color: #124DA8;
  background: aliceblue;
}
.sidebar ul li  i{
  height: 40px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 35px;
  text-align: center;
}
i{
  font-size: 25px;
}

.logout:hover {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.logout:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.logout{
  padding: 11px 70px;
  margin-left: 30px;
  border-radius: 12px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.user{
  color: #FFFFFF;
  font-size: 17px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.back-login{
  margin-right: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 50px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 15px;
  color: #143159;
  background-color: #282E3BC7;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.back-home{
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin-left: 30px;
  padding: 50px;
  text-decoration: none;
  font-size: 20px;
  background-color: #282E3BC7;
  border-radius: 15px;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
}

.nav-list{
  margin-top: 10px;
}

.final{
  margin-left: 28%;
  margin-top: 18%;
  display: flex;
}
.links-name{
  font-family: GTEestiProDisplay-Regular,serif ;
}



.dropdown-nav-2{
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-right: 7%;
  width: 100%;
  max-width: 280px;
  height: 100%;
  background-color: #071333;
  font-size: 17px;
  text-align: center;
}

.dropdown-nav-2 li {
  overflow: hidden;
  list-style: none;
  font-family: GTEestiProDisplay-Regular, serif;
  font-weight: bold;
}

.dropdown-nav-2 ul {
  padding-top: 10px;
}

.dropdown-nav-2 a {
  padding: 0.3em 0;
  color: #676767;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
  font-family: GTEestiProDisplay-Regular, serif;
}

.dropdown-nav-2 a:before,
.dropdown-nav-2 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav-2 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

.dropdown-nav-2 li:hover a,
.dropdown-nav-2.current a {
  color: #124DA8;
}

.logo-container {
  display: inline-block;
}
.footer-img {
  width: 75%;
  border-radius: 14px;
}

.bx-menu{
  font-size: 38px;
  cursor: pointer;
  transition: .8s ease all;
}
.icon-active{
  transform: rotate(180deg);
}

@media (max-width: 990px) {
  .logout{
    padding: 9px 60px;
    margin-left: 15px;
    margin-top: 13px;
    border-radius: 20px;
  }
  .icon-2{
    padding-left: 90%;
    color: white;
  }
  i{
    font-size: 20px;
    padding-right: 5px;
  }
  .icon{
    overflow-y: unset;
  }

  .final{
    margin-left: 10%;
    margin-top: 25%;
  }
}

@media (max-width: 550px) {
  .dropdown-nav-2{
    padding-right: 5%;
    max-width: 210px;
    font-size: 15px;
  }
  .icon-2{
    padding-left: 80%;
  }
  .dropdown-nav-2 ul {
    padding-top: unset;
  }
  .logout{
    padding: 8px 50px;
  }
  .final{
    margin-left: 12%;
    margin-top: 30%;
    display: flex;
    flex-direction: column;

  }
  .back-login{
    margin-right: unset;
    padding: 25px;
    font-size: 18px;
    margin-bottom: 15%;
  }
  .back-home{
    margin-left: unset;
    padding: 25px;
    font-size: 18px;

  }

}

</style>

