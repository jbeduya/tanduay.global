import { writable } from "svelte/store";

export const navigation = writable([
    {
        name: "Home",
        url: "/#",
        active: true,
    },
    { name: "Our Products", url: "/#products" },
    { name: "About Us", url: "/#about-us" },
    { name: "Cocktail Culture", url: "/#cocktail-culture" },
    { name: "Where to Find Us", url: "/#where-to-find-us" },
    {
        name: "Press",
        url: "#press-release",
    },
    { name: "Contact", url: "/#contact-us" },
    { name: "Shop Now", url: "https://tanduay.thirstie.com/", target: "_blank" },
])