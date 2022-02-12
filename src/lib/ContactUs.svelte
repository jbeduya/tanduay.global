<script>
  import Accordion from "./Accordion.svelte";
  import ContactItem from "./ContactItem.svelte";

  let contacts = [
    {
      category: "Philippines",
      name: "Tanduay Distillers Inc",
      address:
        "348 J. Nepomuceno St., San Miguel District, Quiapo, Manila, Philippines 1001",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "Belgium / Netherlands / Luxemburg",
      name: "Tanduay Distillers Inc",
      address:
        "348 J. Nepomuceno St., San Miguel District, Quiapo, Manila, Philippines 1001",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "Singapore",
      name: "Tanduay Distillers Inc",
      address:
        "348 J. Nepomuceno St., San Miguel District, Quiapo, Manila, Philippines 1001",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "UAE",
      name: "Tanduay Distillers Inc",
      address:
        "348 J. Nepomuceno St., San Miguel District, Quiapo, Manila, Philippines 1001",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
    },
    {
      category: "United States",
      name: "Midway Trading Corp.",
      address: "130 Battery St. STE #560, San Francisco, CA 94111",
      phone: "+63 2 8790-0500",
      url: "https://ph.tanduay.com/",
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
    margin: 50px 0;
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
    column-gap: 25px;
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
      margin: 16px;
    }
  }
</style>
