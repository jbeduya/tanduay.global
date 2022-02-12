<script>
  let items = [
    { name: "Home", url: "/", active: true },
    { name: "Our Products", url: "/" },
    { name: "About Us", url: "/" },
    { name: "Cocktail Culture", url: "/" },
    { name: "Where to Find Us", url: "/" },
    { name: "Press", url: "/#press-release" },
    { name: "Contact", url: "/" },
  ];
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
