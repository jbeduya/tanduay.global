<script context="module">
  export async function load({ fetch, session }) {
    if (!session.accepted) {
      return {
        redirect: "/warning",
        status: 302,
      };
    }

    return {
      status: 200,
      body: {},
    };
  }
</script>

<script>
  import ContentList from "$lib/press-release/ContentList.svelte";
  import Featured from "$lib/press-release/Featured.svelte";
  import { navigation } from "$lib/stores/navigation";

  // navigation manipulation
  $navigation.forEach((item) => {
    item.active = false;
  });

  $navigation[3].url = "/cocktail-culture";
  $navigation[5].active = true;
  $navigation[5].url = "/press-release";

  let featured = [
    {
      id: 1,
      image: "/images/press/press-default.png",
      category: "lifestyle",
      title: "Tanduay Seen to Drive Rum Growth in Arizona",
      date: "Mar 2021",
      author: "businessinsider.com",
      url: "https://markets.businessinsider.com/news/stocks/tanduay-seen-to-drive-rum-growth-in-arizona-as-it-partners-with-hensley-beverage-company-1030242050",
      tags: ["USA"],
      excerpt:
        "Tanduay furthers its expansion in the U.S. by signing a partnership with Hensley Beverage Company, a top Arizona beverage wholesaler known for distributing a diverse range of alcoholic and non-alcoholic beverages.",
    },
    {
      id: 2,
      image: "/images/press/press2.jpg",
      category: "Corporate Partnerships",
      title: "Tanduay to sponsor five NBA teams",
      date: "Apr 2021",
      author: "espn.com",
      url: "https://www.espn.com/basketball/story/_/id/31293568/tanduay-now-sponsor-five-nba-teams-deal-phoenix-suns",
      tags: ["USA"],
      excerpt:
        "Just weeks after it sealed agreements with two other teams from the National Basketball Association (NBA), Tanduay has entered into a partnership with the Phoenix Suns. This makes it the first Philippine company to simultaneously sponsor five NBA teams, making an even more aggressive international marketing push.",
    },
    {
      id: 3,
      image: "/images/press/press3.jpg",
      category: "Awards",
      title: "The Top Rums",
      date: "May 2021",
      author: "forbes.com",
      url: "https://www.forbes.com/sites/joemicallef/2021/05/16/the-top-rums-according-to-new-york-international-spirits-competition/?sh=3e9446957f47",
      tag: ["USA"],
      excerpt:
        "The New York International Spirits Competition (NYISC) is an annual judging of spirits that takes place in New York City each spring. It’s unusual in that it is one of the few that rely entirely on judges drawn exclusively from the beverage trade.",
    },
    {
      id: 4,
      category: "lifestyle",
      title: "Review: Tanduay Double Rum",
      date: "May 2021",
      author: "drinkhacker.com",
      url: "https://www.drinkhacker.com/2021/05/18/review-tanduay-double-rum/",
      tags: ["USA"],
      image: "/images/press/press-featured.png",
      excerpt:
        "The Philippines-based Tanduay Rum is out with a new expression called Double Rum. It’s a blend of two rums, a “premium” rum that’s 16 years old and a “traditional” rum that’s 5 years old",
    },
    {
      id: 5,
      category: "lifestyle",
      title: "Rum Brand Champion 2021: Tanduay",
      date: "Jun 2021",
      author: "thespiritsbusiness.com",
      url: "https://www.thespiritsbusiness.com/2021/06/rum-brand-champion-2021-tanduay/",
      tags: ["USA"],
      image: "/images/press/press-default.png",

      excerpt:
        "The Covid‐19 crisis created a challenging environment for million‐case‐selling rum brands last year. Only a handful of the world’s top‐selling labels were able to offset international lockdowns and the economic headwinds that came with them.",
    },
    {
      id: 6,
      category: "lifestyle",
      title: "Tanduay: Rising to the World’s Top Spot",
      date: "Jul 2021",
      author: "brandingnerd.ph",
      url: "https://brandingnerd.ph/2021/07/12/tanduay-rising-to-the-worlds-top-spot-among-rum-brands-through-its-distribution-strategy/",
      tags: ["Philippines"],
      image: "/images/press/press-default.png",
      excerpt:
        "There are many reasons for the global success of this Filipino brand, including its strong brand identity and heritage, market segmentation, product quality and innovation, and more. However, one of the strongest pillars of this brilliant brand is its distribution strategy.",
    },
    {
      id: 7,
      category: "Awards",
      title: "Top US Spirits Buyers Award",
      date: "Sep 2021",
      author: "yahoo.com",
      url: "https://finance.yahoo.com/news/top-us-spirits-buyers-award-005000103.html",
      tags: ["USA"],
      image: "/images/press/press-default.png",
      excerpt:
        "There are many reasons for the global success of this Filipino brand, including its strong brand identity and heritage, market segmentation, product quality and innovation, and more. However, one of the strongest pillars of this brilliant brand is its distribution strategy.",
    },
    {
      id: 8,
      category: "corporate partnerships",
      title: "Tanduay, The World's Largest Rum Brand",
      date: "Aug 2021",
      author: "luxurylifestyle.com",
      url: "https://luxurylifestyle.com/headlines/tanduay-the-worlds-largest-rum-brand-enters-benelux.html",
      tags: ["USA"],
      image: "/images/press/press-default.png",
      excerpt:
        "Tanduay, a popular Filipino rum, is the world's best-selling rum for four consecutive years. However, the brand is not as popular in Europe. Undoubtedly, this will soon change, as Tanduay also wants to put the award-winning rum on its map and has chosen Belgium, the Netherlands, and Luxembourg (collectively, Benelux) as the first countries for this European expansion.",
    },
    {
      id: 9,
      category: "lifestyle",
      title: "Tanduay Holiday Cocktails",
      date: "Dec 2021",
      author: "yahoo.com",
      url: "https://finance.yahoo.com/news/tanduay-holiday-cocktails-sure-celebrations-094700287.html",
      tags: ["USA"],
      image: "/images/press/press-default.png",
      excerpt:
        "Get into the holiday spirit with these cocktails infused with Tanduay's most-awarded and best-selling rum products.",
    },
    {
      id: 10,
      category: "awards",
      title: "Tanduay awarded Brand of the Year",
      date: "Jan 2022",
      author: "manilatimes.net",
      url: "https://www.manilatimes.net/2022/01/20/public-square/tanduay-awarded-brand-of-the-year-for-7-years-at-intl-forum/1829906",
      tags: ["Philippines"],
      image: "/images/press/press-default.png",
      excerpt:
        "LUCIO Tan (LT) Group's Tanduay was named Brand of the Year 2021 to 2022 at the recent World Branding Awards at Kensington Palace.",
    },
    {
      id: 11,
      category: "lifestyle",
      title: "Do-it-Your-Own Tanduay Cocktails",
      date: "Jan 2022",
      author: "yahoo.com",
      url: "https://finance.yahoo.com/news/own-tanduay-cocktails-usher-luck-014100737.html",
      tags: ["USA"],
      image: "/images/press/press-default.png",
      excerpt:
        "To liven up the celebrations even more, whether people celebrate with family and friends or on a quiet night at home, here are some delish holiday cocktails people can try making on their own. These cocktails are inspired by the multi-awarded lucky spirits Tanduay Asian Rum Silver and Gold.",
    },
    {
      id: 12,
      category: "lifestyle",
      title: "Celebrate Love with Tanduay",
      date: "Feb 2022",
      author: "businessmirror.com.ph",
      url: "https://businessmirror.com.ph/2022/02/14/celebrate-love-with-tanduays-fun-and-festive-cocktails/",
      tags: ["Philippines"],
      image: "/images/press/press-default.png",
      excerpt:
        "Once again it’s that time of the year when love is in the air. Whether you’re celebrating the day of romance with your significant other or with your besties, these delightful cocktails are sure to make the occasion more special.",
    },
  ];

  let articles = featured;

  var featured_articles = featured.filter(function(item) {
    return item.id < 6;
  });

</script>

<Featured articles={featured_articles} />

<ContentList {articles} />
