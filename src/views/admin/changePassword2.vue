<template>
<div>
  <h3 class="user-info-header">
    Change Password
  </h3>
  <form @submit.prevent="onPostClick">
    <div class="bank-trans">
      <div class="bank-trans-form">
        <input type="password" placeholder="Enter Old Password" required="" name="bank-name"  />
      </div>
      <div class="bank-trans-form2">
        <input type="password" placeholder="Enter New Password" required="" name="bank-name" />
      </div>
      <div class="bank-trans-form2">
        <input type="password" placeholder="Confirm New Password" required="" name="bank-name"  />
      </div>
    </div>
    <button class="bank-trans-btn">Submit</button>
  </form>
</div>
</template>

<script>


export default {
  name: "changePassword2",

  methods: {
    onPostClick() {
      alert("Password Successfully Changed")
      this.$router.push('/user-list');
    }
  },
}
</script>

<style scoped>
.user-info-header{
  margin-top: 3%;
  font-size: 27px;
  text-align: center;
  color: #124DA8;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.bank-trans{
  margin-top: 2%;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #071333;
  color: #FFFFFF;
  margin-bottom: 1.5%;
  margin-right: 17%;
  margin-left: 13%;
  padding-left: 6%;
  padding-right: 5%;
  padding-bottom: 7%;
  padding-top: 5%;
  border-radius: 12px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.bank-trans-btn{
  padding: 11px 80px;
  color: white;
  background-color: #124DA8;
  border-color: #124DA8;
  border-radius: 12px;
  font-family: GTEestiProDisplay-Regular,serif ;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.bank-trans-btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
