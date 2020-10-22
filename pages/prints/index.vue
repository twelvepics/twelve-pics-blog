<template>
    <section>
        <div class="prints-intro">
            <div class="rubric-wrapper">
                <h2 class="rubric"><span>Prints</span></h2>
            </div>
            <h1 class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, a!</h1>
            <div class="prints_body">
                <p class="intro-border-btm">
                From print to pixels. I love traditional printed photo zines, they are
                unique and precious objects. But they are commonly low runs, have a
                limited reach, and a cost. So I am curious to experiment with what
                could be a digital photo zine, just a simple start, I'm not so sure
                about how it will evolve. The sky and my tech abilities are the limit.
                Viewing photos on a good screen is fine to me, different from a real
                life print, sure, another experience. Anyway, welcome to the world of
                digital self-publishing.
                </p>
            </div>
        </div>
        <div class="print-pics">
            <div class="print-pics-item">
                <figure class="image is-3by2 hpic`">
                    <img src="/images/prints/print-1.jpg" class="big-shadowed"/>
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
             <div class="print-pics-item vpic">
                <figure class="image is-2by3">
                    <img src="/images/prints/print-2.jpg" class="big-shadowed" >
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
             <div class="print-pics-item">
                <figure class="image is-3by2">
                    <img src="/images/prints/print-3.jpg" class="big-shadowed" />
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
            <div class="print-pics-item">
                <figure class="image is-3by2">
                    <img src="/images/prints/print-4.jpg" class="big-shadowed" />
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
            <div class="print-pics-item vpic">
                <figure class="image is-2by3">
                    <img src="/images/prints/print-5.jpg" class="big-shadowed" >
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
            <div class="print-pics-item">
                <figure class="image is-3by2">
                    <img src="/images/prints/print-6.jpg" class="big-shadowed" />
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
            <div class="print-pics-item vpic">
                <figure class="image is-2by3">
                    <img src="/images/prints/print-7.jpg" class="big-shadowed" >
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
            <div class="print-pics-item">
                <figure class="image is-3by2">
                    <img src="/images/prints/print-9.jpg" class="big-shadowed" />
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
            <div class="print-pics-item">
                <figure class="image is-3by2">
                    <img src="/images/prints/print-13.jpg" class="big-shadowed" />
                </figure>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, est.</p>
            </div>
        </div>
    </section>
</template>
<style scoped>

/*********************************************
 * top Intro
 *********************************************/
 section {
   margin: 0 .5em 0 .5em;
 }
h1.title {
    font-size:2em;
  }
h2.rubric {
  color: white !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}
h2.rubric span {
  background-color: black;
  padding: 0.2rem 0.5rem;
}
.rubric-wrapper {
  /* border-bottom: 1px solid #666; */
  margin-bottom: 1.5rem;
}
.prints-intro {
  padding: 4em .75em 0 .75em;
  margin: 2em auto 0 auto;
  max-width: 700px;
  padding-top: 4em;
}
.prints-intro .prints_body {
  margin-top: 1.2em;
}
.intro-border-btm {
  border-bottom: 1px solid #9989;
  padding-bottom: 0.75rem;
}


/*********************************************
 * print items
 *********************************************/
 .caption {
  font-family: "PalanquinDark", Sans-serif;
  color: #444;
  font-size: .95em;
  line-height: 1.3em;
  margin-top: .5em;
}
.big-shadowed {
  box-shadow: 3px 3px 10px #999;
}
 .print-pics {
    width:100%;
    margin-top:3rem;
 }
 figure {
  background-color:#ddd;
 }  
.print-pics-item {
  margin: 0 auto;
  margin-bottom: 2.5rem;
  max-width: 900px;
    
}
.print-pics-item img {
  border:22px solid white;
}
.vpic {
  max-width:550px;
}
@media only screen and (max-width: 768px) {
  .vpic {
    max-width:70%;
  }
}
</style>