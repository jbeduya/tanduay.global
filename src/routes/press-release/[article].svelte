<script>
  import FeaturedList from "$lib/press-release/FeaturedList.svelte";

  let article = {
    id: 3,
    category: "corporate partnerships",
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 2021",
    author: "tastings.com",
    url: "#",
    tags: ["Philippines"],
    image:
      "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_brave_16x9_41b1e6e3.jpeg",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti laboriosam? Laborum, delectus, excepturi velit cum quisquam iste, libero suscipit earum id officiis doloremque iusto temporibus. Dicta, doloremque possimus suscipit esse quae nulla consectetur at harum saepe alias ab distinctio! Accusamus enim pariatur dolor neque eius. Modi fugit consequuntur pariatur, totam nisi quo animi quibusdam blanditiis nostrum. Ab alias voluptates excepturi numquam quam deserunt ea necessitatibus, magnam maiores obcaecati exercitationem harum itaque neque voluptatibus animi possimus, error quae quidem. Cum quidem explicabo alias id, deserunt doloribus incidunt. Assumenda, aut ipsam labore error cumque a eligendi vero illo, provident perspiciatis maiores?",
  };

  let featured = [
    {
      id: 1,
      category: "lifestyle",
      title: "Lorem ipsum dolor sit amet",
      date: "Sep 2021",
      author: "tastings.com",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_bugslife_16x9_d75b729e.jpeg",
      url: "#",
      tags: ["USA"],
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti laboriosam? Laborum, delectus, excepturi velit cum quisquam iste, libero suscipit earum id officiis doloremque iusto temporibus. Dicta, doloremque possimus suscipit esse quae nulla consectetur at harum saepe alias ab distinctio! Accusamus enim pariatur dolor neque eius. Modi fugit consequuntur pariatur, totam nisi quo animi quibusdam blanditiis nostrum. Ab alias voluptates excepturi numquam quam deserunt ea necessitatibus, magnam maiores obcaecati exercitationem harum itaque neque voluptatibus animi possimus, error quae quidem. Cum quidem explicabo alias id, deserunt doloribus incidunt. Assumenda, aut ipsam labore error cumque a eligendi vero illo, provident perspiciatis maiores?",
    },
    {
      id: 2,
      category: "corporate partnerships",
      title: "Lorem ipsum dolor sit amet",
      date: "Sep 2021",
      author: "tastings.com",
      url: "#",
      tags: ["Singapore"],
      image:
        "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_ratatouille_16x9_635a16bd.jpeg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti laboriosam? Laborum, delectus, excepturi velit cum quisquam iste, libero suscipit earum id officiis doloremque iusto temporibus. Dicta, doloremque possimus suscipit esse quae nulla consectetur at harum saepe alias ab distinctio! Accusamus enim pariatur dolor neque eius. Modi fugit consequuntur pariatur, totam nisi quo animi quibusdam blanditiis nostrum. Ab alias voluptates excepturi numquam quam deserunt ea necessitatibus, magnam maiores obcaecati exercitationem harum itaque neque voluptatibus animi possimus, error quae quidem. Cum quidem explicabo alias id, deserunt doloribus incidunt. Assumenda, aut ipsam labore error cumque a eligendi vero illo, provident perspiciatis maiores?",
    },
    {
      id: 3,
      category: "corporate partnerships",
      title: "Lorem ipsum dolor sit amet",
      date: "Sep 2021",
      author: "tastings.com",
      url: "#",
      tags: ["Philippines"],
      image:
        "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_brave_16x9_41b1e6e3.jpeg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti laboriosam? Laborum, delectus, excepturi velit cum quisquam iste, libero suscipit earum id officiis doloremque iusto temporibus. Dicta, doloremque possimus suscipit esse quae nulla consectetur at harum saepe alias ab distinctio! Accusamus enim pariatur dolor neque eius. Modi fugit consequuntur pariatur, totam nisi quo animi quibusdam blanditiis nostrum. Ab alias voluptates excepturi numquam quam deserunt ea necessitatibus, magnam maiores obcaecati exercitationem harum itaque neque voluptatibus animi possimus, error quae quidem. Cum quidem explicabo alias id, deserunt doloribus incidunt. Assumenda, aut ipsam labore error cumque a eligendi vero illo, provident perspiciatis maiores?",
    },
    {
      id: 4,
      category: "corporate partnerships",
      title: "Lorem ipsum dolor sit amet",
      date: "Sep 2021",
      author: "tastings.com",
      url: "#",
      tags: ["Philippines"],
      image:
        "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_findingnemo_16x9_f74d315e.jpeg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti laboriosam? Laborum, delectus, excepturi velit cum quisquam iste, libero suscipit earum id officiis doloremque iusto temporibus. Dicta, doloremque possimus suscipit esse quae nulla consectetur at harum saepe alias ab distinctio! Accusamus enim pariatur dolor neque eius. Modi fugit consequuntur pariatur, totam nisi quo animi quibusdam blanditiis nostrum. Ab alias voluptates excepturi numquam quam deserunt ea necessitatibus, magnam maiores obcaecati exercitationem harum itaque neque voluptatibus animi possimus, error quae quidem. Cum quidem explicabo alias id, deserunt doloribus incidunt. Assumenda, aut ipsam labore error cumque a eligendi vero illo, provident perspiciatis maiores?",
    },
    {
      id: 5,
      category: "corporate partnerships",
      title: "Lorem ipsum dolor sit amet",
      date: "Sep 2021",
      author: "tastings.com",
      url: "#",
      tags: ["USA"],
      image:
        "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_up_16x9_1f36fba7.jpeg",

      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti laboriosam? Laborum, delectus, excepturi velit cum quisquam iste, libero suscipit earum id officiis doloremque iusto temporibus. Dicta, doloremque possimus suscipit esse quae nulla consectetur at harum saepe alias ab distinctio! Accusamus enim pariatur dolor neque eius. Modi fugit consequuntur pariatur, totam nisi quo animi quibusdam blanditiis nostrum. Ab alias voluptates excepturi numquam quam deserunt ea necessitatibus, magnam maiores obcaecati exercitationem harum itaque neque voluptatibus animi possimus, error quae quidem. Cum quidem explicabo alias id, deserunt doloribus incidunt. Assumenda, aut ipsam labore error cumque a eligendi vero illo, provident perspiciatis maiores?",
    },
    {
      id: 6,
      category: "corporate partnerships",
      title: "Lorem ipsum dolor sit amet",
      date: "Sep 2021",
      author: "tastings.com",
      url: "#",
      tags: ["Philippines"],
      image:
        "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_insideout_16x9_cbaa0517.jpeg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti laboriosam? Laborum, delectus, excepturi velit cum quisquam iste, libero suscipit earum id officiis doloremque iusto temporibus. Dicta, doloremque possimus suscipit esse quae nulla consectetur at harum saepe alias ab distinctio! Accusamus enim pariatur dolor neque eius. Modi fugit consequuntur pariatur, totam nisi quo animi quibusdam blanditiis nostrum. Ab alias voluptates excepturi numquam quam deserunt ea necessitatibus, magnam maiores obcaecati exercitationem harum itaque neque voluptatibus animi possimus, error quae quidem. Cum quidem explicabo alias id, deserunt doloribus incidunt. Assumenda, aut ipsam labore error cumque a eligendi vero illo, provident perspiciatis maiores?",
    },
  ];
</script>

<section>
  <div class="container">
    <div class="article">
      <img src={article.image} alt={article.title} />

      <div class="content">
        <div class="category">{article.category}</div>
        <h2>{article.title}</h2>
        <div class="credit">
          <div class="date">{article.date}</div>
          <div class="divider" />
          <div class="author">
            by <span class="name">{article.author}</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          commodi ea odio esse fuga laborum, minus ratione amet culpa modi
          voluptatibus sapiente nemo quod exercitationem iusto blanditiis soluta
          illum error placeat? Alias esse harum voluptas ex consequatur ullam ut
          totam quam. Velit nostrum explicabo animi eaque ipsam dolore
          aspernatur! Voluptatem at, quis doloremque architecto nam distinctio
          tempora nesciunt, vel impedit facilis et ullam fugit similique
          officiis dolore totam labore! Numquam cupiditate aperiam iste autem
          quia rem tempore debitis velit delectus vel molestias enim ducimus
          nesciunt minus quaerat voluptatem quae beatae excepturi, at, pariatur
          quam. Beatae enim nostrum eaque delectus tempore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          praesentium eius aut, omnis veritatis aperiam facere fugit voluptatum
          magni delectus labore aliquid, quia recusandae sed. Corrupti illo
          rerum maiores atque sed laboriosam sit quos aperiam necessitatibus
          dicta veritatis ipsam exercitationem quasi vel modi, culpa quam a
          officiis consequatur molestiae porro?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          reiciendis sit aut doloremque odio, amet voluptatibus! At, odio.
          Maiores, quaerat voluptates recusandae odio reiciendis hic suscipit.
          Odio sed recusandae, error placeat laborum, optio doloribus assumenda
          accusamus pariatur dolores repudiandae consequuntur. Amet nobis
          molestiae alias, soluta exercitationem deserunt velit nesciunt
          repellendus magni! Unde maxime eum illo, nulla vero consequuntur quam
          quibusdam atque tempore inventore totam exercitationem sed ipsum
          similique cupiditate praesentium obcaecati iure placeat assumenda
          deleniti perferendis nobis laborum itaque architecto? Harum iste
          dolore, dolores, inventore repellat placeat numquam at, natus expedita
          incidunt praesentium quos maiores saepe! Consequuntur, ipsa quae quas
          quasi impedit vel quos sint doloremque, earum possimus fugiat laborum
          nihil, quam esse quibusdam sequi nulla nesciunt ducimus odio
          necessitatibus ullam totam explicabo? Sit laborum qui, quae corrupti,
          provident ducimus delectus debitis ex facilis nisi esse. Distinctio
          dolorem velit ducimus cum, nesciunt soluta sunt. Possimus nostrum
          doloremque tenetur id distinctio iusto nemo non accusamus recusandae
          nisi molestiae ducimus sed deserunt, atque repellendus? Voluptatibus
          velit eos corrupti. Repellat dolorum consequuntur saepe, ipsa quos
          unde debitis incidunt laborum praesentium nam natus voluptatibus
          asperiores assumenda tempora. Quod saepe inventore, fugiat quia ea
          fugit harum laboriosam earum iste sed eos velit. Blanditiis,
          aspernatur at.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          accusamus minima, sequi dignissimos blanditiis mollitia recusandae
          aperiam molestiae, tempore, velit unde reiciendis ex exercitationem!
          Cupiditate dolor ab omnis, neque incidunt eos vel aperiam fugiat
          consequatur et architecto odio quibusdam rem fuga harum obcaecati
          molestias consectetur necessitatibus! Iste quia doloremque porro aut
          voluptas possimus, totam dolorum veniam necessitatibus beatae aliquid
          reprehenderit explicabo enim quas nostrum laudantium eius maxime
          molestias. Ipsa doloribus sunt repellendus reiciendis nisi excepturi
          voluptatem autem quo tenetur eum. Reiciendis, repellendus consequuntur
          eos esse magni commodi eligendi? Accusamus voluptates suscipit
          voluptatibus, aliquam inventore tempore? Facere corrupti quam magni
          temporibus molestias accusamus inventore doloremque, delectus possimus
          perspiciatis magnam nisi voluptatibus fuga commodi quod eos et
          obcaecati natus explicabo! Quod, perferendis debitis rerum fugiat quae
          fuga sunt nobis alias cupiditate, harum eum dolorum nihil, veniam sint
          explicabo consequatur libero eaque laboriosam? Sit nisi, at veniam
          laboriosam beatae consequatur voluptas nobis iure!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          aut ea placeat in obcaecati culpa debitis earum maxime quia magni
          magnam iste et sed id ut quod eaque expedita quo, aliquid, quaerat
          modi quos reiciendis mollitia. Ut assumenda adipisci et dolor harum
          quod sunt ipsum fuga aliquid. Non, impedit ipsum!
        </p>
      </div>
    </div>
    <div class="featured">
      <h4>Featured Articles</h4>

      <FeaturedList articles={featured} />
    </div>
  </div>
</section>

<style>
  section {
    padding: 2rem 0;
  }
  .container {
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }

  .article img {
    width: 100%;
    border-radius: 1rem;
  }
  h2 {
    margin: 1rem 0 0.5rem;
  }
  h4 {
    margin-bottom: 2rem;
  }
  .article .content {
    padding: 1rem;
  }
  @media (max-width: 1100px) {
    .container {
      grid-template-columns: 3fr 2fr;
    }
  }

  @media (max-width: 930px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>
