<script>
  import { browser } from "$app/env";
  import { createEventDispatcher, onMount } from "svelte";
  import { navigation } from "$lib/stores/navigation";

  const dispatch = createEventDispatcher();

  let scrollTimeout = null;
  const onScroll = () => {
    if (
      document.location.pathname.startsWith("/press-release") ||
      document.location.pathname.startsWith("/cocktail-culture")
    ) {
      return;
    }

    const home = document.getElementById("home");
    const product = document.getElementById("products");
    const aboutUs = document.getElementById("about-us");
    const cocktailCulture = document.getElementById("cocktail-culture");
    const map = document.getElementById("where-to-find-us");
    const press = document.getElementById("press-release");
    const contactUs = document.getElementById("contact-us");

    const sections = [
      home,
      product,
      aboutUs,
      cocktailCulture,
      map,
      press,
      contactUs,
    ];

    let currentIndex = 0;
    sections.forEach((section, idx) => {
      if (!section) return;
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 400) {
        currentIndex = idx;
      }
    });

    for (let i = 0; i < $navigation.length; i++) {
      $navigation[i].active = false;
    }

    $navigation[currentIndex].active = true;
  };

  if (browser && requestAnimationFrame) {
    onScroll();
  }

  const scrollListener = () => {
    document.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        requestAnimationFrame(onScroll);
      }, 250);
    });
  };

  onMount(() => {
    window.addEventListener("load", scrollListener);
  });
</script>

<div>
  {#each $navigation as item}
    <a
      href={item.url}
      target={item.target}
      on:click={() => dispatch("click", item)}
      class:active={item.active}>{item.name}</a
    >
  {/each}
</div>

<style>
  div {
    display: flex;
    align-items: center;
    border-top: 2px solid #c7b49e;
    position: relative;
    height: 59px;
  }
  a {
    font-family: adobe-garamond-pro, serif;
    text-transform: uppercase;
    text-decoration: none;
    color: #50330d;
    padding: 20px 8px;
    white-space: nowrap;
    border-top: 4px solid transparent;
  }
  a.active,
  a:hover {
    border-top: 3px solid #d18b3f;
  }
  a:last-child {
    font-weight: bolder;
    color: #d18b3f;
  }

  @media (max-width: 930px) {
    div {
      flex-direction: column;
      align-items: flex-start;
      border-top: none;
    }
    a {
      padding: 10px 0;
      color: #fcfcfc;
    }

    a {
      border-top: 0px solid transparent;
    }
    a.active,
    a:hover {
      border-top: 0px solid transparent;
    }
  }
</style>
