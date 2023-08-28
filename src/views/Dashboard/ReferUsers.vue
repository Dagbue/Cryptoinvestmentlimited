<template>
<dash-content>
  <h1 class="header-alpha">Refer users to <span>Crypto Investment Limited</span> community</h1>
  <div class="support">
    <h1 class="support-header">You can refer users by sharing your referral link:</h1>
    <a href="https://Tradingassetslimited.com/register" class="support-subheader">www.cryptoinvestmentlimited.com/register</a>
    <div class="user">
      <p class="user-1">Your sponsor</p>
      <i class='bx bxs-user-rectangle'></i>
      <p class="user-1">null</p>
    </div>
  </div>
  <div>
    <h1 class="history-header">Your Referrals.</h1>
    <div class="fields-alpha">
      <div class="container mt-3">
        <table class="table" >
          <thead>
          <tr>
            <th>Ref. Name</th>
            <th>Ref. level</th>
            <th>Parent</th>
            <th>Ref. status</th>
            <th>Date registered</th>
          </tr>
          </thead>

          <tbody v-for="child in history" :key="child.key">
          <tr>
<!--            <td>{{child.amount}}</td>-->
<!--            <td>{{child.selected}}</td>-->
<!--            <td>{{child.status}}</td>-->
<!--            <td>{{child.createdAt}}</td>-->
          </tr>
          </tbody>
        </table>

      </div>
    </div>
<!--    <div class="content-sep">-->
<!--      <hr class="line">-->
<!--      <p class="foot">© 2022 Trading Assets Limited | All Rights Reserved</p>-->
<!--    </div>-->
  </div>
</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  name: "ReferUsers",
  components: {DashContent}
}
</script>

<style scoped>
.header-alpha{
  padding-top: 30px;
  font-size: 22px;
  text-align: center;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.support{
  text-align: center;
  padding-right: 6%;
  padding-top: 5%;
  padding-bottom: 3%;
  background-color: #282E3BC7;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
  border-radius: 15px;
}
.support-header{
  font-size: 22px;
  padding-bottom: 10px;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.support-subheader{
  font-size: 20px;
  padding-bottom: 10px;
  text-decoration: none;
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}
p{
  font-size: 17px;
  padding-bottom: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.user{
  padding-top: 25px;
}
.bxs-user-rectangle{
  font-size: 70px;
}
.user-1{
  font-size: 18px;
  color: #143159;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.history-header{
  text-align: center;
  padding-top: 5%;
  padding-bottom: 20px;
  font-size: 23px;
  font-family: GTEestiProDisplay-Bold,serif ;
  color: #143159;
}
.fields-alpha{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  padding-top: 20px;
  background-color: #282E3BC7;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 12px;
}
hr{
  /*margin-left: 5%;*/
  /*margin-right: 5%;*/
  margin-top: 1%;
}
.content-sep {
  margin-top: 5%;
  color: white;
  margin-left: 2%;
  margin-right: 2%;
}
.foot{
  text-align: center;
  padding-top: 5px;
}
span{
  color: #143159;
}
th{
  color: #143159;
  text-align: center;
  font-family: GTEestiProDisplay-Regular,serif ;
}
td{
  color: white;
  font-family: GTEestiProDisplay-Regular,serif ;
}
@media (max-width: 990px) {
  .header-alpha{
    padding-top: 25px;
    font-size: 22px;
    padding-left: unset;
    text-align: center;
  }

  .support{
    padding-right: unset;
  }
  .history-header{
    margin-left: unset;
    font-size: 22px;
    text-align: center;
  }

  .content-sep, hr{
    display: none;
  }
}

@media (max-width: 550px) {
  .header-alpha{
    padding-top: 25px;
    font-size: 20px;
    padding-left: unset;
  }
  .support-header{
    padding-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 15px;
    width: 100%;
  }

  th{
    font-size: 12px;
  }
  td{
    font-size: 12px;
  }
  .table{
    width: 100%;
  }
  .support-subheader{
    font-size: 13px;
  }
  .support{
    margin-left: unset;
    margin-right: unset;
  }
}
</style>

