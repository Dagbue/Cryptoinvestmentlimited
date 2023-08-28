<template>

  <div class="landing-page-testimonial-header">
    <p class="landing-page-testimonial-header-two">
      Here's what people had to say about <span class="global">Crypto Investment</span> Limited
    </p>
  </div>

  <div class="outerdiv">

    <div class="innerdiv">
      <!-- div1 -->
      <div class="div1 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Daniel Clifford</p>
            <p class="designation">Architect</p>
          </div>
        </div>
        <div class="review">
          <h4>My only regret is not joining Crypto Investment Limited earlier, when I first learnt about it, but it's better late than never.and I have my whole family on this ship too sailing to financial freedom</h4>
<!--          <p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, ”</p>-->
        </div>
      </div>
      <!-- div2 -->
      <div class="div2 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Jonathan Walters</p>
            <p class="designation">Doctor</p>
          </div>
        </div>
        <div class="review">
          <h4>Everything that has been said about Crypto investment Limited is true. It does exactly what it says on the label." So far, the best.</h4>
<!--          <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>-->
        </div>
      </div>
      <!-- div3 -->
      <div class="div3 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name dark">Kira Whittle</p>
            <p class="designation dark">Travel Vlogger</p>
          </div>
        </div>
        <div class="review dark">
          <h4>"I'd like to thank Crypto investment Limited for their fantastic service in assisting me in developing a great and profitable investment plan for myself and my family.</h4>
<!--          <p>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of experience. ”</p>-->
        </div>
      </div>
      <!-- div4 -->
      <div class="div4 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name dark">Jeanette Harmon</p>
            <p class="designation dark">Student</p>
          </div>
        </div>
        <div class="review dark">
          <h4>"Excellent service, simple return procedure." Always dependable and trustworthy. "I'm in love with my new trader.</h4>
<!--          <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>-->
        </div>
      </div>
      <!-- div5 -->
      <div class="div5 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="">
          </div>
          <div class="detbox">
            <p class="name">Patrick Abrams</p>
            <p class="designation">Student</p>
          </div>
        </div>
        <div class="review">
          <h4>Crypto Investment Limited is the revelation, never has earning passive income been so easy to do and manage, from my mobile phone I earn daily and can withdraw anytime.I love this company</h4>
<!--          <p>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "testimonial-body"
}
</script>

<style scoped>

/*body{*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  box-sizing: border-box;*/
/*  font-family: 'Barlow Semi Condensed', sans-serif;*/
/*}*/

.landing-page-testimonial-header {
  font-family: GTEestiProDisplay-Regular sans-serif;
  font-size: 40px;
  color: #192850;
  line-height: 44px;
}

.landing-page-testimonial-header{
  text-align: center;
  padding-top: 80px;
}

.landing-page-testimonial-header-two{
  font-family: GTEestiProDisplay-Light, sans-serif;
  font-size: 23px;
  line-height: 24px;
  text-align: center;
  color: #676767;
  margin: 0;
}

.global{
  color: #124DA8;
  font-family: GTEestiProDisplay-Bold, sans-serif;
}
a:link,a:active,a:visited,a:hover{
  color:#3f51b5;
}

.outerdiv
{
  width: 100%;
  min-height: 100vh;
  /*background: #EDF2F8;*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.innerdiv
{
  transform: scale(0.9);
  margin: 1rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: repeat(2,22rem);
  grid-template-columns: repeat(4,17rem);
}
.eachdiv
{
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 5px 5px 20px #6d6b6b6b;
  color: white;
}
.div1
{
  background: #733FC8;
  grid-column: 1/3;
  grid-row: 1/2;
  background-image: url(https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/bg-pattern-quotation.svg);
  background-repeat: no-repeat;
  background-position-x: 25rem;
}
.div2
{
  background:#49556B;
  grid-column: 3/4;
  grid-row: 1/2;
}
.div3
{
  background: white;
  grid-column: 4/5;
  grid-row: 1/3;
  color: black;
}
.div4
{
  background: white;
  grid-column: 1/2;
  grid-row: 2/3;
  color: black;
}
.div5
{
  background: #18202D;
  grid-column: 2/4;
  grid-row: 2/3;
}
.userdetails
{
  display: flex;
}
.imgbox
{
  margin-right: 1rem;
}
.imgbox img
{
  border-radius: 50%;
  width: 6rem;
  border: 2px solid #cec5c5;
}
.detbox
{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.detbox p
{
  margin: 0;
}
.detbox .name
{
  color: hsl(0, 0%, 81%);
  font-size: 1rem;
  margin-bottom: 0.1rem;
  font-family: GTEestiProDisplay-Bold ,serif;
}
.detbox .name.dark
{
  color: #49505A;
}
.detbox .designation
{
  color: hsl(0, 0%, 81%);
  opacity: 50%;
  font-size: 0.9rem;
  font-family: GTEestiProDisplay-Regular ,serif;
}
.detbox .designation.dark
{
  color: #49505A;
}
.review h4
{
  font-size: 1.4rem;
  color: #F3DEFF;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  font-family: GTEestiProDisplay-Bold ,serif;
}
.review.dark h4{
  color:#4B5258;
}
.review p
{
  font-size: 0.95rem;
  color: #F3DEFF;
  opacity: 50%;
  line-height: 1.5;
  font-family: GTEestiProDisplay-Regular ,serif;
}
.review.dark p{
  color: #0e0e0e;
}

@media only screen and (max-width: 1000px)
{
  .innerdiv
  {
    transform: scale(0.7);
  }
}
@media only screen and (max-width: 800px)
{
  .innerdiv
  {
    transform: scale(0.6);
  }
}
@media only screen and (max-width: 600px)
{
  .div1 {
    background-position-x: 10rem;
  }
  .innerdiv
  {
    display: flex;
    flex-direction: column;
    transform: scale(1);
    margin: 2rem;
    margin-bottom: 5rem;
  }
  .attribution
  {
    position: relative;
  }
}

@media (max-width: 500px) {
  .landing-page-testimonial-header-two{
    font-size: 21px;
  }

}
</style>