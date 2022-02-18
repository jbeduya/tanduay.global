<script>
  import ContentList from "$lib/press-release/ContentList.svelte";
  import Featured from "$lib/press-release/Featured.svelte";

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

  let articles = featured;

  $: console.log("Articles", articles);
</script>

<Featured articles={featured} />

<ContentList {articles} />
