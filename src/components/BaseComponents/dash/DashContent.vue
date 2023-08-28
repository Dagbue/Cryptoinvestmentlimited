<template>
  <section class="home-section">
    <div class="home-content">
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "DashContent",
}
</script>

<style scoped>
.home-content{
  position: fixed;
  left: 290px;
  background-color: white;
  width: calc(100% - 300px);
  height: 100%;
  transition: all 0.5s ease;
  color: black;
  margin: 0 10px;
  cursor: pointer;
  overflow-y: scroll;
}

@media (max-width: 990px) {
  .home-content{
    position: fixed;
    left: unset;
    width: 100%;
    height: 100%;
    margin: unset;
    /*padding: 10px;*/
    padding-left: 12px;
    padding-right: 20px;
    overflow-y: scroll;
  }

}

</style>

