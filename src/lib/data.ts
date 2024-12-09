import { DestinationProps, SelectInputType, YachtType } from "./types";

export const destinations: SelectInputType[] = [
  { value: "croatia", label: "Croatia" },
  { value: "greece", label: "Greece" },
  { value: "spain", label: "Spain" },
  { value: "italy", label: "Italy" },
  { value: "france", label: "France" },
  { value: "turkey", label: "Turkey" },
];

export const cabins: SelectInputType[] = [
  { value: "1", label: "1 cabins" },
  { value: "2", label: "2 cabins" },
  { value: "3", label: "3 cabins" },
  { value: "4", label: "4 cabins" },
  { value: "5", label: "5 cabins" },
  { value: "5", label: "6 cabins" },
];

export const allDestinations: DestinationProps[] = [
  { title: "Greece", bgImage: "/img/greece.jpg", popular: true, yachtsCount: 250, slug: "greece" },
  { title: "Caribbean", bgImage: "/img/greece.jpg", popular: true, yachtsCount: 259, slug: "caribbean" },
  { title: "Dubai", bgImage: "/img/greece.jpg", popular: true, yachtsCount: 340, slug: "dubai" },
  { title: "Maldives", bgImage: "/img/greece.jpg", popular: true, yachtsCount: 100, slug: "maldives" },
  { title: "French Riviera", bgImage: "/img/greece.jpg", popular: true, yachtsCount: 350, slug: "french-riviera" },
  { title: "Bahamas", bgImage: "/img/greece.jpg", popular: true, yachtsCount: 450, slug: "bahams" },
  { title: "Croatia", bgImage: "/img/greece.jpg", popular: false, yachtsCount: 1240, slug: "croatia" },
];

export const yachts: YachtType[] = [
  { _id: "0", name: "Sun Odissey 1", mainImage: "/img/yacht-demo.jpg", location: "Croatia", rating: 4.5, minPrice: 600 },
  { _id: "1", name: "Sun Odissey 2", mainImage: "/img/yacht-demo.jpg", location: "Greece", rating: 4.6, minPrice: 500 },
  { _id: "2", name: "Sun Odissey 3", mainImage: "/img/yacht-demo.jpg", location: "Italy", rating: 3.9, minPrice: 800 },
  { _id: "3", name: "Sun Odissey 4", mainImage: "/img/yacht-demo.jpg", location: "Croatia", rating: 4.9, minPrice: 650 },
  { _id: "4", name: "Sun Odissey 5", mainImage: "/img/yacht-demo.jpg", location: "Spain", rating: 4.8, minPrice: 700 },
  { _id: "5", name: "Sun Odissey 6", mainImage: "/img/yacht-demo.jpg", location: "Spain", rating: 4.3, minPrice: 700 },
  { _id: "6", name: "Sun Odissey 7", mainImage: "/img/yacht-demo.jpg", location: "Spain", rating: 4, minPrice: 700 },
];
