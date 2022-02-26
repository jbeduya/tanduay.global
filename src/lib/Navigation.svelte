<script>
  import { browser } from "$app/env";

  import { onMount } from "svelte";
  const isPressReleaseActive =
    browser && document.location.pathname.startsWith("/press-release");

  let items = [
    {
      name: "Home",
      url: "/#",
      active: true,
    },
    { name: "Our Products", url: "/#products" },
    { name: "About Us", url: "/#about-us" },
    { name: "Cocktail Culture", url: "/#cocktail-culture" },
    { name: "Where to Find Us", url: "/#where-to-find-us" },
    {
      name: "Press",
      url: "/#press-release",
    },
    { name: "Contact", url: "/#contact-us" },
  ];

  $: if (browser && document.location.pathname.startsWith("/press-release")) {
    for (let i = 0; i < items.length; i++) {
      items[i].active = false;
    }
    items[5].active = true;
  } else if (
    browser &&
    document.location.pathname === "/" &&
    document.location.hash.length === 0
  ) {
    for (let i = 0; i < items.length; i++) {
      items[i].active = false;
    }
    items[0].active = true;
  }

  onMount(() => {
    document.addEventListener("scroll", (e) => {
      if (document.location.pathname.startsWith("/press-release")) return;

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
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 400) {
          currentIndex = idx;
        }
      });
      for (let i = 0; i < items.length; i++) {
        items[i].active = false;
      }
      items[currentIndex].active = true;
    });
  });
</script>

<div>
  {#each items as item}
    <a href={item.url} class:active={item.active}>{item.name}</a>
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
