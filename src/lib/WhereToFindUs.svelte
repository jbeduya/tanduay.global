<script>
  import mapboxgl from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";

  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Distance from "./maps/Distance.svelte";
  import Location from "./maps/Location.svelte";
  import SearchOptions from "./maps/SearchOptions.svelte";

  mapboxgl.accessToken =
    "pk.eyJ1IjoiamJlZHV5YSIsImEiOiJja3p0a3RuY2kweTZrMm9tb2lrY2V1eTUyIn0.xK2YMpqJNe_htL8K2ulpcQ";

  let map;

  const onSuccess = (position) => {
    map.setCenter([position.coords.longitude, position.coords.latitude]);
  };
  const onFail = (position) => {};

  let markers = [],
    checked = "location",
    distance = 20;

  onMount(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFail, {
      enableHighAccuracy: true,
    });
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [123.93375, 10.325807],
      zoom: 8,
    });
  });

  const updateCenter = (e) => {
    map.setCenter(e.detail);
  };

  const setCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFail, {
      enableHighAccuracy: true,
    });
  };

  const optionChanged = (e) => {
    checked = e.detail;
  };

  const search = async () => {
    let center = map.getCenter();
    let result = await fetch("/api/maps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: center.lat,
        distance,
        lng: center.lng,
      }),
    });
    let data = await result.json();
    markers.forEach((marker) => marker.remove());
    if (data && data.length) {
      data.forEach((location) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `
        <div class="marker-popup">
          <h3>${location.dba}</h3>
          <div class="marker-popup-item">
            <i class="fa-solid fa-location-dot"></i> 
            <span>${location.street} ${location.city}, ${location.state} ${location.zip}</span>
          </div>
          <div class="marker-popup-item">
            <span><i class="fa-solid fa-phone"></i></span>
            <span>${location.phoneFormatted}</span>
          </div>
        </div>
        `
        );
        const el = document.createElement("div");
        el.classList.add("marker");

        let m = new mapboxgl.Marker(el)
          .setLngLat([location.long, location.lat])
          .setPopup(popup)
          .addTo(map);
        markers.push(m);
      });
    }
  };
</script>

<section id="where-to-find-us">
  <div class="container">
    <h1 class="h1">Where to find Us</h1>
    <div class="controls">
      <SearchOptions on:check={optionChanged} checked={"location"} />

      <Distance bind:distance />
      <Location
        on:found={updateCenter}
        on:currentLocation={setCurrentLocation}
      />

      <div class="search-button">
        <Button active on:click={search}>Search</Button>
      </div>
    </div>
  </div>
  <div id="map" />
</section>

<style>
  #where-to-find-us {
    --form-height: 130px;
    --header-color: #9a8d45;
    --header-font-size: 0.8rem;
    --surface-color: #fff;
    --form-surface: #eeeeee;
    position: relative;
    padding: 4rem 0 0;
  }
  h1 {
    margin-bottom: 2rem;
  }
  :global(.marker) {
    width: 32px;
    height: 32px;
    background: url("/images/t-icon.png") no-repeat;
    background-position: 50% 50%;
    background-size: 18px;
    background-color: #fefef8;
    border: 1px solid #d4203c;
    border-radius: 50%;
    cursor: default;
  }
  #map {
    height: 600px;
    width: 100%;
  }

  .container {
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    padding: 2rem 6rem;
  }

  .controls {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    position: relative;
    /* top: 100px; */
    z-index: 667;
  }

  :global(.marker-popup-item) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    justify-content: start;
    align-items: flex-start;
    padding: 0.2rem 1rem;
  }

  :global(.marker-popup-item .fa-location-dot) {
    padding-top: 5px;
  }

  :global(.mapboxgl-popup-close-button) {
    top: 5px;
    right: 10px;
  }

  .search-button {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding-bottom: 1.6rem;
  }

  @media (max-width: 930px) {
    .controls {
      grid-template-columns: 1fr 1fr;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 570px) {
    .controls {
      grid-template-columns: 1fr;
    }
    .container {
      padding: 1rem 2rem;
    }

    .search-button {
      padding: 0;
    }

    h1 {
      font-size: 2rem;
    }
  }
</style>
