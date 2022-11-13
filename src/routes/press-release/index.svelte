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
    {
      id: 13,
      category: "Corporate Partnerships",
      title: "Tanduay City View Lounge Opens at the Timberwolves' Target Center",
      date: "Feb 2022",
      author: "finance.yahoo.com",
      url: "https://finance.yahoo.com/news/tanduay-city-view-lounge-opens-022200845.html",
      tags: ["USA"],
      image: "/images/press/press-13.jpg",
      excerpt:
        "Leading Philippine rum maker Tanduay recently opened a bar at the Minnesota Timberwolves' Target Center. Called the Tanduay City View Lounge, the bar is a result of the partnership that the World's Number 1 Rum brand inked with the team in 2021.",
    },
    {
      id: 14,
      category: "Corporate Partnerships",
      title: "Tanduay Reveals Global Expansion Plans",
      date: "Mar 2022",
      author: "thespiritsbusiness.com",
      url: "https://www.thespiritsbusiness.com/2022/03/tanduay-reveals-global-expansion-plans/",
      tags: ["UK"],
      image: "/images/press/press-14.jpg",
      excerpt:
        "Philippine rum brand Tanduay doubled its export business last year and has revealed plans for further international expansion.",
    },
    {
      id: 15,
      category: "Corporate Partnerships",
      title: "Tanduay Brings Tropical Filipino Flavors to the Phoenix Suns' Footprint Center",
      date: "Mar 2022",
      author: "jsonline.com",
      url: "https://finance.yahoo.com/news/tanduay-brings-tropical-filipino-flavors-222200106.html",
      tags: ["USA"],
      image: "/images/press/press-19.jpg",
      excerpt:
        "Filipino brand Tanduay, the World's Number 1 Rum, recently opened its own bar at the home of the Phoenix Suns.",
    },
    {
      id: 16,
      category: "Corporate Partnerships",
      title: "The World's No.1 Selling Rum Tanduay Signs U.K. Distribution Deal",
      date: "Apr 2022",
      author: "barmagazine.co.uk",
      url: "https://barmagazine.co.uk/the-worlds-no-1-selling-rum-tanduay-signs-u-k-distribution-deal-with-emporia-brands/",
      tags: ["UK"],
      image: "/images/press/press-16.jpg",
      excerpt:
        "Tanduay Rum, made in the heart of the Philippines, is a multiple award-winning spirit that carries with it the true heritage and culture of East Asia.",
    },
    {
      id: 17,
      category: "awards",
      title: "Especia, Tanduay's New Spiced Rum, Wins Double Gold in San Diego Spirits Festival",
      date: "Apr 2022",
      author: "markets.businessinsider.com",
      url: "https://markets.businessinsider.com/news/stocks/especia-tanduay-s-new-spiced-rum-wins-double-gold-in-san-diego-spirits-festival-1031368341",
      tags: ["USA"],
      image: "/images/press/press-18.jpg",
      excerpt:
        "Especia Rum, the latest product from the Philippines' Tanduay Distillers, Inc., has won a Double Gold at the San Diego Spirits Festival.",
    },
    {
      id: 18,
      category: "Corporate Partnerships",
      title: "Tanduay's Specialty Cocktails at the Milwaukee Bucks' Fiserv Forum",
      date: "May 2022",
      author: "finance.yahoo.com",
      url: "https://finance.yahoo.com/news/tanduays-specialty-cocktails-fans-milwaukee-023600256.html",
      tags: ["USA"],
      image: "/images/press/press-15.jpg",
      excerpt:
        "Tanduay, the World’s Number 1 Rum, recently opened a bar in the home arena of the National Basketball Association (NBA) champions, Milwaukee Bucks. The Tanduay bar at the Fiserv Forum provides an exciting, refreshing cocktail experience with a tropical twist.",
    },
    {
      id: 19,
      category: "Corporate Partnerships",
      title: "The Beer Garden in Deer District",
      date: "May 2022",
      author: "jsonline.com",
      url: "https://www.jsonline.com/story/sports/nba/bucks/2022/05/02/milwaukee-bucks-deer-district-tap-room-changes-into-tanduay-tiki-hut/9569673002/",
      tags: ["USA"],
      image: "/images/press/press-17.jpg",
      excerpt:
        "The Tap Room has been transformed into The Tanduay Tiki Hut, according to a news release from the Bucks.",
    },
    {
      id: 20,
      category: "awards",
      title: "Tanduay Wins Platinum, Innovation Honors in Consumer-Judged SIP Awards",
      date: "May 2022",
      author: "finance.yahoo.com",
      url: "https://finance.yahoo.com/news/tanduay-wins-platinum-innovation-honors-054300585.html",
      tags: ["USA"],
      image: "/images/press/press-20.jpg",
      excerpt:
        "Four Tanduay Rum products received top honors at the 2022 SIP Awards, the only wines and spirits competition where the judging panel is comprised of consumers.",
    },
    {
      id: 21,
      category: "lifestyle",
      title: "The 25 Best Rum Brands You Need on Your Bar Cart Like, Yesterday",
      date: "May 2022",
      author: "cosmopolitan.com",
      url: "https://www.cosmopolitan.com/food-cocktails/g28509902/rum-brands/",
      tags: ["USA"],
      image: "/images/press/press-default.png",
      excerpt:
        "Mixing piña coladas, don't text.",
    },
    {
      id: 22,
      category: "lifestyle",
      title: "168 Years Of Tanduay Rum",
      date: "July 2022",
      author: "thetastingalliance.com",
      url: "https://thetastingalliance.com/168-years-of-tanduay-rum/",
      tags: ["USA"],
      image: "/images/press/press-22.jpg",
      excerpt:
        "Rum is a spirit with rich history, but only a handful of rum producers are over 150 years old.",
    },
    {
      id: 23,
      category: "lifestyle",
      title: "Tanduay Releases \"Cocktail Culture\" Book of Recipes",
      date: "July 2022",
      author: "finance.yahoo.com",
      url: "https://finance.yahoo.com/news/tanduay-releases-cocktail-culture-book-023200698.html",
      tags: ["USA"],
      image: "/images/press/press-23.jpg",
      excerpt:
        "Iconic Philippine rum brand Tanduay recently released a collection of cocktail recipes featuring its different rums.",
    },
    {
      id: 24,
      category: "lifestyle",
      title: "Tanduay Sells More Than 23.7M 9-Case Liters in 2021, Is Declared World\'s Number 1 Rum for 5th Consecutive Year",
      date: "July 2022",
      author: "markets.businessinsider.com",
      url: "https://markets.businessinsider.com/news/stocks/tanduay-sells-more-than-23-7m-9-case-liters-in-2021-is-declared-world-s-number-1-rum-for-5th-consecutive-year-1031602693",
      tags: ["USA"],
      image: "/images/press/press-24.jpg",
      excerpt:
        "Tanduay continued to outsell other global rum brands last year, according to Drinks International Magazine which collected annual data on 154 million-case brands from public company reports and directly requested results.",
    },
    {
      id: 25,
      category: "Corporate Partnerships",
      title: "Tanduay el ron más vendido del mundo incursiona en Costa Rica",
      date: "Sep 2022",
      author: "larepublica.net",
      url: "https://www.larepublica.net/noticia/tanduay-el-ron-mas-vendido-del-mundo-incursiona-en-costa-rica",
      tags: ["Costa Rica"],
      image: "/images/press/press-25.jpg",
      excerpt:
        "Tanduay, ron originario de Filipinas y posicionado como el más vendido del mundo, llega a Costa Rica como tercer país en América y primero en Latinoamérica, tras incursionar en Estados Unidos y Canadá.",
    },
    {
      id: 26,
      category: "Corporate Partnerships",
      title: "Philippine Brand Tanduay Partners with Kreyenhop & Kluge, Brings Its Most-Awarded Rums to Germany",
      date: "Oct 2022",
      author: "bloomberg.com",
      url: "https://www.bloomberg.com/press-releases/2022-10-07/philippine-brand-tanduay-partners-with-kreyenhop-kluge-brings-its-most-awarded-rums-to-germany",
      tags: ["Germany"],
      image: "/images/press/press-default.png",
      excerpt:
        "Top Philippine rum producer Tanduay has now entered the German market after signing a partnership with Kreyenhop \& Kluge, a leading distributor of international products in Germany.",
    },
  ];

  let articles = featured.reverse();

  var featured_articles = featured.filter(function(item) {
    return item.id < 6;
  });

</script>

<Featured articles={featured_articles} />

<ContentList {articles} />
