<script>
  import Accordion from "./Accordion.svelte";
  import ContactItem from "./ContactItem.svelte";

  let contacts = [
    {
      category: "Philippines",
      name: "Tanduay Distillers Inc. (TBI)",
      address:
        "348 J. Nepomuceno St., San Miguel District, Quiapo, Manila, Philippines 1001",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "Belgium / Netherlands / Luxemburg",
      name: "Alcobrands",
      address: "Edward Pecherstraat 1, 2000 Antwerpen, Belgium",
      phone: "+32 3 336 30 21",
      url: "https://www.alcobrands.be/",
    },
    {
      category: "Singapore",
      name: "Octopus Group",
      address: "361 Ubi Rd 3, Singapore 408664",
      phone: "+65 6533 3312",
      url: "https://www.octopusgroup.com.sg/",
    },
    {
      category: "UAE",
      name: "Truebell Marketing & Trading LLC",
      address:
        "Industrial AreaIndustrial Area 13, Sharjah - United Arab Emirates",
      phone: "+971 6 534 2111",
      url: "https://www.truebell.org/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+1 415-986-2600",
      url: "https://global.tanduay.com/",
    },
    {
      category: "United States",
      name: "Hensley Beverage Company",
      address: "4201 N 45th Ave., Phoenix, AZ 85031",
      phone: "+1 602-264-1635",
      url: "https://hensley.com/",
    },
    {
      category: "United States",
      name: "Romano Beverage",
      address: "185 Industrial Dr., Elmhurst IL, 60126",
      phone: "+1 630-607-0430",
      url: "https://romanobeverage.com/",
    },
    {
      category: "United States",
      name: "Imperial Beverage",
      address: "1911 Griggs St. SE., Grand Rapids, MI 49506",
      phone: "+1 269-382-4200",
      url: "http://imperialbeverage.com/",
    },
    {
      category: "United States",
      name: "Johnson Brothers",
      address: "1999 Shepard Rd., St. Paul, MN 55116",
      phone: "+1 651-649-5800",
      url: "https://www.johnsonbrothers.com/",
    },
    {
      category: "United States",
      name: "Johnson Brothers",
      address: "1011 Munu St, Kapolei, HI 96707",
      phone: "+1 808-487-5355",
      url: "https://www.johnsonbrothers.com/",
    },
    {
      category: "United States",
      name: "Lipman Brothers LLC",
      address: "2815 Brick Church Pike, Nashville, TN 37207",
      phone: "+1 615-244-2230",
      url: "https://lipmanbrothers.com/",
    },
    {
      category: "United States",
      name: "General Beverage Sales",
      address: "16255 W Stratton Drive, New Berlin, WI 53151",
      phone: "+1 414-543-3300",
      url: "https://www.genbev.com/",
    },
    {
      category: "United States",
      name: "Empire Distributing",
      address: "16 Bridgewater St, Brooklyn, NY 11222",
      phone: "+1 718-383-5500",
      url: "https://www.empiremerchants.com/",
    },
    {
      category: "United States",
      name: "Empire MErchants North",
      address: "16 Houghtaling Rd, Coxsackie, NY 12051",
      phone: "+1 800-724-3960",
      url: "https://empirenorth.com/",
    },
  ];

  $: categories = contacts.map((contact) => contact.category);
  $: sideCategories = categories.slice(0, 4);
</script>

<section>
  <div class="container">
    <h1 class="h1">Contact Us</h1>
    <div class="content">
      <div class="side">
        {#each sideCategories as category}
          <Accordion expanded={category === "Philippines"}>
            <span slot="label">{category}</span>
            {#each contacts.filter((contact) => contact.category === category) as contact}
              <ContactItem {contact} />
            {/each}
          </Accordion>
        {/each}
      </div>
      <div class="main">
        <Accordion expanded>
          <span slot="label">United States</span>
          <div class="flexible">
            {#each contacts.filter((contact) => contact.category === "United States") as contact}
              <span class="contact-item">
                <ContactItem {contact} />
              </span>
            {/each}
          </div>
        </Accordion>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: left;
    margin: 100px 0;
    font-size: 3rem;
  }

  .container {
    max-width: calc(var(--max-width) - 200px);
    width: 100vw;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
  }
  .main {
    display: flex;
    flex-flow: column wrap;
  }
  .contact-item {
    width: 270px;
  }
  .flexible {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    column-gap: 1rem;
  }

  @media (max-width: 930px) {
    .content {
      grid-template-columns: 1fr;
      column-gap: 0;
      grid-gap: 0;
      padding: 0 24px;
    }
    .contact-item {
      width: auto;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
      margin: 1rem;
    }

    .contact-item {
      width: 300px;
    }
  }
</style>
