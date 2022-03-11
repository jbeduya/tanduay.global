<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Pagination, Navigation, Scrollbar } from "swiper";

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import ArrowLeft from "./products/icons/ArrowLeft.svelte";
  import ArrowRight from "./products/icons/ArrowRight.svelte";
  import { onMount } from "svelte";
  let testimonies = [
    {
      photo: "/images/testimonies/richie-cruz.png",
      testimony: `I like Tanduay because its flavor profile goes well with local 
                fruits from the Philippines. All rums have different profiles, 
                for Tanduay, I would say it is the caramel aroma, and medium to 
                full bodied flavor and finish that differentiates it from  other rums.`,
      name: "Richie Cruz",
      designation: `(Trainer for Center for Bartending and Tourism Academy, Head Bartender for Cobbler Marikina, Toma Sessions Content Creator)`,
    },
    {
      photo: "/images/testimonies/jonathan-scinto.png",
      testimony: `One of the many reasons I like Tanduay Rum is the essence of that oak
               smell and bourbon taste. It's Silky smooth going down and has flavors of 
               vanilla, almonds and island spices. I'm known for infusing alcohol into my 
               food & beverage creations, Tanduay Rum doesn't disappoint. 
               The flavors don't disappear when I'm reducing the alcohol 
               and it enhances everything I'm trying to create.`,
      name: "Jonathan Scinto",
      designation: `(Food Artist, TV Host, Content Creator and Entrepreneur)`,
    },
    {
      photo: "/images/testimonies/dondz-bolante.png",
      testimony: `I like Tanduay Rum because it is easy to drink, and it has a smoky
              flavor profile. It can easily be paired with different food and
              fruits, making it a very good base in cocktails. Tanduay is
              different from other rums that I used because the taste is
              balanced and not too sweet. The best thing about it is that for
              its quality, it is still very affordable. Tanduay is best mixed
              with my specialty, the Manila Mule.`,
      name: "Dondz Bolante",
      designation: `(Top 10 Bartender in the Philippines, Barman in Chotto Matte,
                Coconut Club, Don’t Tell Poblacion, Versus Barcade, Tipple and
                Slaw and El Jardin de Manila)`,
    },
    {
      photo: "/images/testimonies/jake-alano.png",
      testimony: `As a rum drinker, Tanduay is a brand that I often use because it gives a 
              heavenly feeling when taken neat or straight. Although it is affordable compared 
              to other premium brands, its quality speaks for itself and it can compete with any 
              brand in the market. Because of its flexibility, Tanduay Rum goes well with all types
              of ingredients. It is easy to mix with all kinds of modifiers. Its caramel taste gives 
              a unique distinction to any type of concoctions that makes it different from other rums 
              in the market.`,
      name: "Jake Alano",
      designation: `(Host and Speaker Flairtending Seminars, Bar and Beverage Consultant of Minami Café Restaurant, Unkabogabar Mobile Bar Owner)`,
    },
    {
      photo: "/images/testimonies/lu-yao.png",
      testimony: `First, I like the history, it's one of the very few rums based in Asia that has 
              achieved prominence. I also love how versatile the rum is, certain ranges of the rum 
              are excellent canvases for cocktails while others are perfectly good drinking on its own. 
              What makes it different from the other rums is the general versatility, different 
              selections and what it applications can be.`,
      name: "Lu Yao",
      designation: `(Union Trading Company)`,
    },
    {
      photo: "/images/testimonies/satoshi-sugiura.png",
      testimony: `Taste very smooth and having potencial good for mix ability. Made by 
              wonderful sugar cane from asia so it is more familiar to us (Asian people.) 
              Especially, aging one has long finish and palate. My favorite one is 
              "Banana Daiquiri" as the taste and backborn.`,
      name: "Satoshi Sugiura",
      designation: `(The Odd Couple)`,
    },
    {
      photo: "/images/testimonies/lillian-sausset.png",
      testimony: `I greatly appreciate are heritage around the passion of this rum. 
              I particularly like its powerful aromas of dark sugar and oak. What I 
              like about this rum is the scale when you deguste, those vanilla aromas 
              with the character of Tanduay rum, I have direct inpisration to create 
              a cocktail. Very simple! a very refreshing cocktail, a dark'n stormy. or 
              Tanduay highball (the famous discoconut!): with carribean syrup and coconut water.`,
      name: "Lilian Sausset",
      designation: `(Forté)`,
    },
    {
      photo: "/images/testimonies/melody-liao.png",
      testimony: `Tanduay rum has perfect balance of alcohol and the sweetness of sugar cane.
              Tanduay rum tastes smooth and it has refined and elegant smells with hints of 
              burnt sugar. It’s just right for me.Tanduay rum is suitable for all kinds of 
              cocktails, especially tiki cocktails`,
      name: "Melody Liao",
      designation: `(The Broken Dagger)`,
    },
    {
      photo: "/images/testimonies/tammy-liu.png",
      testimony: `Tanduay rum has a good balance of alcohol level and sweetness, you can taste 
              the tropical flavor of rum but it’s not too sweet. It appreciates neat or combine 
              with other mixer. Its strong flavors is good for making cocktails. Tanduay rum has 
              expressive flavors of coconut and caramel persistent in harmony, and the taste of 
              alcohol won’t be too strong.I prefer to use Tanduay rum to make Treacle, it’s 
              rum based old fashioned with apple juice.`,
      name: "Tammy Liu",
      designation: `(12 Bar BLUES)`,
    },
    {
      photo: "/images/testimonies/an-chen.png",
      testimony: `Tanduay rum’s red and gold logo design plus its bright golden amber color makes 
              me feel the passion and vitality of tropical country - the Philippines at the first sight.
              Chocolate and cocoa flavor always be my thing. Tanduay rum can not only tastes 
              rum’s profile of sugar cane’s sweetness but also with hints of toasted almond and nutmeg. 
              So you can just drink it neat, not just using it to make cocktails.
              I would say Treacle, you can use Tanduay Asian rum Gold or dark rum to make it, 
              its tropical tastes mix with apple juice’s sweetness perfectly, you might also add some 
              black bitters to balance the flavor.
`,
      name: "An Chen",
      designation: `(12 Bar BLUES)`,
    },
    {
      photo: "/images/testimonies/match-chan.png",
      testimony: `I like Tanduay Rum it is because there are many differnet age and flavors of rum to 
              choose from, it can satisfy the flavor selevtion of the bartender to make cocktails, 
              and it can also be consumed directly or matched with food or tobacco. Compared with 
              other rum it has a longer history and traditon.  Although it has a long history, 
              this brand keep abrest of the times and keep updating and creative. I will recommend 
              using Tanduay Double Rum to make a  Pina colada because this siilky smooth rum can 
              bring carmelized pineapple, toasted nuts, vanilla and tropical fruits, 
              can make the drink with more layer and complex.`,
      name: "Match Chan",
      designation: `(Arena Luxe)`,
    },
    {
      photo: "/images/testimonies/roger-yamagishi.png",
      testimony: `Because, Taduay rum is good for neat, and good for making cocktails as well.
              Tanduay Asian rum Silver is sweet and smooth, and the aged one Double rum is 
              good for neat with cigar, totally different characters they have. For Asian rum 
              gold and silver, you can make Daiquiri, but for the aged Double rum I recommend 
              for neat, or you can make exclusive rum old fashioned.`,
      name: "Roger Yamagishi",
      designation: `(Sober Company)`,
    },
    {
      photo: "/images/testimonies/carson-xie.png",
      testimony: `As a rum drinker, Tanduay is a brand that I often use because it gives a 
              heavenly feeling when taken neat or straight. Although it is affordable compared 
              to other premium brands, its quality speaks for itself and it can compete with any 
              brand in the market. Because of its flexibility, Tanduay Rum goes well with all types
              of ingredients. It is easy to mix with all kinds of modifiers. Its caramel taste gives 
              a unique distinction to any type of concoctions that makes it different from other rums 
              in the market.`,
      name: "Carson Xie",
      designation: `(Bar Exchange 1924)`,
    },
    {
      photo: "/images/testimonies/masato-hika.png",
      testimony: `I like to use ingredients from different countries.  Filipino rum was 
              fascinating to me. I think it's a ram where you can actually feel the island 
              flavor that comes to mind in the Philippines. I recommend a banana shake with a 
              twist of Piña Colada from our summer cocktail menu`,
      name: "Masato “Martsu” Hika",
      designation: `(Root Down)`,
    }
  ];

  let innerWidth = 1100,
    numSlides = 2;

  $: numSlides = innerWidth < 930 ? 1 : 2;
</script>

<svelte:window bind:innerWidth />
<section>
  <div class="container">
    <div class="header">
      <h1 class="h1">What people say about us</h1>
      <div class="controls">
        <span id="swiper-button-prev"><ArrowLeft /></span>
        <span id="swiper-button-next"><ArrowRight /></span>
      </div>
    </div>
    {#if numSlides === 1}
      <div
        class="testimonials-slider"
        style="
        --swiper-pagination-color: #808D45;
        --swiper-pagination-bullet-width: 10px;
        --swiper-pagination-bullet-height: 10px;
      "
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          pagination={{
            el: "#testimonials-swiper-pages",
            type: "bullets",
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={numSlides}
          slidesPerGroup={numSlides}
          loop
        >
          {#each testimonies as testimonial}
            <SwiperSlide>
              <div class="bubble">
                <span class="quote garamond">’’</span>
                <img src={testimonial.photo} alt="Testimony" />
                <p class="garamond">{testimonial.testimony}</p>
                <div class="footnote">
                  <div class="name">{testimonial.name}</div>
                  <div class="acumin">{testimonial.designation}</div>
                </div>
              </div>
            </SwiperSlide>
          {/each}
        </Swiper>
        <div class="pages-wrapper">
          <div id="testimonials-swiper-pages" />
        </div>
      </div>
    {/if}
    {#if numSlides === 2}
      <div
        class="testimonials-slider"
        style="
        --swiper-pagination-color: #808D45;
        --swiper-pagination-bullet-width: 10px;
        --swiper-pagination-bullet-height: 10px;
      "
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          pagination={{
            el: "#testimonials-swiper-pages",
            type: "bullets",
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={2}
          slidesPerGroup={2}
          loop
        >
          {#each testimonies as testimonial}
            <SwiperSlide>
              <div class="bubble">
                <span class="quote garamond">’’</span>
                <img src={testimonial.photo} alt="Testimony" />
                <p class="garamond">{testimonial.testimony}</p>
                <div class="footnote">
                  <div class="name">{testimonial.name}</div>
                  <div class="acumin">{testimonial.designation}</div>
                </div>
              </div>
            </SwiperSlide>
          {/each}
        </Swiper>
        <div class="pages-wrapper">
          <div id="testimonials-swiper-pages" />
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  :global(.testimonials-slider .swiper-slide) {
    /* border: 10px solid red; */
    margin: 100px 0;
  }

  :global(.testimonials-slider .swiper-pagination-bullet-active) {
    position: relative;
  }
  :global(.testimonials-slider .swiper-pagination-bullet) {
    margin: 0 10px;
  }
  :global(.testimonials-slider .swiper-pagination-bullet-active:after) {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border: 1px solid var(--swiper-pagination-color);
    border-radius: 100%;
    top: -4px;
    left: -4px;
  }
  .testimonials-slider {
    padding: 0 48px;
  }

  .controls {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }

  .controls span {
    cursor: pointer;
  }

  .pages-wrapper {
    display: grid;
    place-items: center;
  }

  #testimonials-swiper-pages {
    width: auto;
  }

  section {
    --bubble-width: 600px;
    --bubble-height: 420px;
    --bubble-color: #d2c58a;
    --bubble-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(/images/testimonies/leaves.png) no-repeat top right;
    background-position-x: 120%;
    background-position-y: 10%;
    background-size: 30%;
    padding-top: 200px;
    padding-bottom: 80px;
  }

  .header {
    margin: 0 48px;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: top;
  }

  h1 {
    text-align: left;
    margin-bottom: 80px;
    font-size: 2.3rem;
  }
  p {
    letter-spacing: 0.5px;
    line-height: 150%;
  }

  .container {
    max-width: calc(var(--max-width) - 100px);
    width: 100vw;
    margin: 0 50px;
    /* border: 1px solid red; */
  }

  .bubble {
    position: relative;
    height: var(--bubble-height);
    padding: 60px;
    padding-top: 100px;
    background: var(--bubble-color);
    -webkit-border-radius: var(--bubble-radius);
    -moz-border-radius: var(--bubble-radius);
    border-radius: var(--bubble-radius);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bubble img {
    position: absolute;
    top: -60px;
    left: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  .bubble .quote {
    position: absolute;
    font-size: 200px;
    color: var(--secondary-color);
    right: 10%;
    top: -60px;
  }
  .name {
    text-transform: uppercase;
    font-weight: bold;
    color: #c17c31;
    padding-bottom: 10px;
  }
  .acumin {
    font-size: 14px;
  }

  .bubble:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 60px 30px 0;
    border-color: var(--bubble-color) transparent;
    transform: rotate(150deg);
    display: block;
    width: 0;
    z-index: 1;
    bottom: -3%;
    right: 15%;
  }

  @media (max-width: 1180px) {
    section {
      --bubble-height: 450px;
    }
  }

  @media (max-width: 930px) {
    section {
      padding-bottom: 0;
      padding-top: 48px;
    }
    .header {
      grid-template-columns: 1fr;
    }
    .controls {
      padding-bottom: 30px;
    }
    h1 {
      margin-bottom: 40px;
      width: 70%;
    }
    .bubble {
      padding-left: 16px;
      padding-right: 16px;
      font-size: 0.8rem;
    }
  }
</style>
