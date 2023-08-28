<template>
  <transition-group name="fade" mode="out-in" tag="div" class="slides">
    <div class="slideParent" :key="image.id">
      <div class="slideImage" :style="setBackgroundImage">
        <div class="slideTitle">
          <transition appear name="fade2" mode="out-in">
            <h2>{{ image.title }}</h2>
          </transition>

          <transition appear name="fade2" mode="out-in">
            <p>{{ image.para }}</p>
          </transition>

          <a @click.prevent="onPostClick" class="btn btn-white btn-animated"
            >GET STARTED</a
          >
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slides",
  props: ["image"],
  computed: {
    setBackgroundImage() {
      return { backgroundImage: "url(" + this.image.url + ")" };
    },
  },
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.slides .slideParent {
  height: 72vh;
  width: 100%;
}
.slides .slideImage {
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation-fill-mode: forwards;
  animation-name: zoom;
  animation-duration: 3s;
  animation-iteration-count: 1;
}
@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
.slideTitle {
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 4%;
  text-align: center;
  margin-left: 13%;
  margin-right: 15%;
}

.slideTitle h2 {
  font-family: GTEestiProDisplay-Bold, serif;
  padding-top: 10%;
  font-size: 32px;
}

.slideTitle p {
  font-size: 22px;
  line-height: 1.5;
  font-family: GTEestiProDisplay-Bold, serif;
}

.slideTitle a {
  line-height: 2;
  margin-left: 40%;
  margin-right: 40%;
  margin-top: 1%;
  font-family: GTEestiProDisplay-Bold, serif;
}

.fade-enter-active {
  animation-name: fadeEnter;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
.fade-move {
  transition: all 1s;
}
.fade-leave-active {
  animation-name: fadeLeave;
  animation-duration: 1s;
  animation-iteration-count: 1;
  position: absolute;
}
@keyframes fadeEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}



.btn:hover {
  background-color: #f25961;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
.btn:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.btn-white {
  background-color: #124DA8;
  color: white;
  font-size: 12px;
  font-family: GTEestiProDisplay-Bold, serif;
  padding: 7px 5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.5s;
  position: relative;
  border-radius: 10px;
}

.fade2-enter-from {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 5s ease-in;
}
.fade2-leave-to {
  opacity: 0;
}
.fade2-leave-active {
  transition: opacity 5s ease-in;
}

@media (max-width: 990px) {
  .slideTitle{
    padding-top: 15%;
  }
  .slideTitle h2{
    font-size: 39px;
    margin-right: 20%;
  }
}

@media (max-width: 500px) {
  .slideTitle{
    padding-top: 25%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    align-content: center;
  }
  .slideTitle h2{
    font-size: 20px;
    margin-left: 6%;
    margin-right: 5%;
    padding-left: unset;
  }
  .slideTitle p{
    line-height: unset;
    margin-left: 6%;
    margin-right: 5%;
    padding-left: unset;
  }

  .slideTitle a {
    margin-left: 28%;
    margin-right: 25%;
    font-size: 9px;
    padding: 6px 12px;
    text-align: center;
    align-content: center;
  }
}
</style>
