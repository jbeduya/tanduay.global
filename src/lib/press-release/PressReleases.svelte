<script>
  import LinkButton from "$lib/LinkButton.svelte";
  import PressRelease from "./PressRelease.svelte";

  const articles = [
    {
      photo: "/images/press/press.png",
      category: "Corporate Partnerships",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, minus!",
      date: "Sept 2021",
      author: "tastings.com",
      link: "/#press-release",
      description:
        "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor,  adipisicing elit. Facere inventore fuga ut, distinctio officiis recusandae libero labore necessitatibus magnam quo?",
    },
    {
      photo: "/images/press/press.png",
      category: "Corporate Partnerships",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, minus!",
      date: "Sept 2021",
      author: "tastings.com",
      link: "/#press-release",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere inventore fuga ut, distinctio officiis recusandae libero labore necessitatibus magnam quo?",
    },
    {
      photo: "/images/press/press.png",
      category: "Corporate Partnerships",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, minus!",
      date: "Sept 2021",
      author: "tastings.com",
      link: "/#press-release",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere inventore fuga ut, distinctio officiis recusandae libero labore necessitatibus magnam quo?",
    },
  ];
</script>

<section>
  <div class="content">
    <h1 id="press-release" class="h1">Press Release</h1>

    <div class="articles">
      {#each articles as article}
        <div class="article"><PressRelease {article} /></div>
      {/each}
    </div>

    <div class="more">
      <LinkButton href="/press-release">View All</LinkButton>
    </div>
  </div>
</section>

<style>
  h1 {
    margin: 3rem 0;
    font-size: 3rem;
  }
  section {
    background-color: white;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    max-width: calc(var(--max-width) + 100px);
    width: 100%;
  }

  .articles {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .more {
    margin-top: 50px;
    text-align: center;
  }

  @media (max-width: 930px) {
    .article:nth-child(2),
    .article:nth-child(3) {
      display: none;
    }

    .article:first-child {
      width: calc(100vw - 64px);
      margin-left: 32px;
    }
  }
</style>
