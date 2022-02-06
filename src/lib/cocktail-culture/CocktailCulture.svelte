<script>
  import { onMount } from "svelte";

  let items = [
    {
      id: 1,
      category: "Asian Rum",
      product: "Tanduay Asian Rum",
      name: "Classic Daiquiri",
      photo: "",
      description:
        "Combine all ingredients in a cocktail shaker with ice, shake until completely chilled. Double strain into coupe glass. Garnish with lime peel.",
      garnish: "Lime Peel",
      glass: "Couple Glass",
      ingredients: [
        "1oz Tanduay Asian Rum Silver",
        "1oz Tanduay Asian Rum Gold",
        "1oz Lime Juice",
        ".07oz Brown Sugar Syrup",
      ],
      suggestions: [2, 3],
    },
  ];

  onMount(() => {
    const resize = (e) => {
      let el = document.getElementById("product-container-dummy");
      let box = el.getBoundingClientRect();
      // @ts-ignore
      paddingLeft = `${box.x + 20}px`;
    };
    window.addEventListener("resize", resize);

    // initial call
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  });
</script>
