
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  link: string;
  liked: boolean;
  numLikes: number;
}

export type Category = {
  category: string;
  products: Product[];
}



export const categories: Category[] = [
    { 
      category: 'Computers',
      products: [
      {
        id: 1,
        name: 'Macbook Air M1',
        price: 999.99,
        description: 'MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661',
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 2,
        name: "Lenovo Legion 5",
        price: 952.19,
        description: "Next-generation gaming performance with Lenovo AI Engine+13th Gen Intel® Core™ processors and NVIDIA® GeForce RTX™ graphics for the ultimate gaming experienceSSD storage & DDR5 memory for faster load times and storage",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h4a/hc6/64348756541470.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/lenovo-legion-5-15ach6h-82ju000vrk-chernyi-103904710/?c=514420100",
        liked: false,
        numLikes: 0,
      },
      {
        id: 3,
        name: "Acer Nitro 5",
        price: 900.00,
        description: "Reign over the game world with the combined power of a 12th Gen Intel® Core™ i7 processor1 with its new performance hybrid architecture and NVIDIA® GeForce RTX™ 30 Series GPUs=",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hc8/h11/64377753796638.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeler-008-chernyi-102710820/?c=750000000",
        liked: false,
        numLikes: 0,
      },
      {
        id: 4,
        name: "ASUS Rog Strix Scar 18",
        price: 3500.00,
        description: "Get the drop on the competition with a lightning-fast and crystal-clear 16-inch 2.5K 240Hz Nebula HDR display Mini LED panel with over 2000 dimming zones. Powered by Intel® Core™ i9 Processor 14900HX and up to NVIDIA® GeForce RTX™ 4090 Laptop GPU with a max TGP of 175W, the SCAR 18 easily handles even the most demanding games. ",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/he7/h5e/80569304547358.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/asus-rog-strix-scar-18-g834jy-n6038w-90nr0cg1-m004n0-chernyi-110148074/",
        liked: false,
        numLikes: 0,
      },
      {
        id: 5,
        name: "Apple MacBook Pro 16",
        price: 2000.00,
        description: "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-mnwe3-serebristyi-108645905/?c=750000000",
        liked: false,
        numLikes: 0,
      }
    ]
    },
    {
      category: 'Smartphones',
      products: [
      {
        id: 6,
        name: 'IPhone 15',
        price: 799.99,
        description: 'Premium smartphone with a stunning display, powerful camera, and long battery life.',
        imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large_2x.jpg',
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128-gb-dual-sim-chernyi-113933011/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 7,
        name: 'Galaxy S24',
        price: 699.99,
        description: 'Imagine the videos youll shoot, the pics youll edit and the connections you make, all elevated to new heights with mobile AI.1',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-zheltyi-podarok-116004092/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 8,
        name: 'Nothing Phone 2',
        price: 675.99,
        description: 'Uniquely designed Nothing OS 2.0. New Glyph Interface 50 MP dual rear camera + 32 MP front camera 6.7” flexible LTPO AMOLED display Snapdragon® 8+ Gen 1',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h4b/82547092291614.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/nothing-phone-2-12-gb-256-gb-belyi-112354665/',
        liked: false,
        numLikes:0,
      },
      {
        id: 9,
        name: 'OnePlus 12',
        price: 990.99,
        description: 'Flowy Emerald 16 GB RAM + 512 GB Storage',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h48/hf1/85092040769566.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/oneplus-12-12-gb-256-gb-chernyi-116425514/',
        liked: false,
        numLikes: 0,
      },
       {
        id: 10,
        name: 'Asus Rog Phone 6',
        price: 1090.99,
        description: 'ROG Phone introduces a landscape-oriented design, featuring unique AirTriggers that enable precise control with a more comfortable grip. Its specially tuned high-performance processor stretches beyond stock speeds to deliver dominating performance, while its responsive, ultrafast display offers an unbeatable blend of high refresh rates and visual fidelity.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h55/64849776377886.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/asus-rog-phone-6-16-gb-512-gb-chernyi-106955302/',
        liked: false,
        numLikes:0,
      },
    ]
    },
    {
      category: "Headphones",
      products: [
      {
        id: 11,
        name: 'Marshall Major IV',
        price: 150.99,
        description: 'Noise-canceling wireless headphones for an immersive audio experience.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 12,
        name: 'Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case',
        price: 250.99,
        description: 'Noise-canceling wireless headphones for an immersive audio experience.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 13,
        name: 'Sony WH-1000XM5',
        price: 350.99,
        description: 'Noise-canceling wireless headphones for an immersive audio experience.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 14,
        name: 'Beats Solo 3 Wireless',
        price: 200.99,
        description: 'Noise-canceling wireless headphones for an immersive audio experience.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h49/63774399856670.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/beats-solo-3-wireless-chernyi-4801909/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 15,
        name: 'CAT EAR STN-28',
        price: 3.99,
        description: 'Noise-canceling wireless headphones for an immersive audio experience.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h46/hd1/64251276197918.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/cat-ear-stn-28-rozovyi-101768468/?c=750000000',
        liked: false,
        numLikes:0,
      },
    ]
    },
    {
      category: "Cameras",
      products: [
      {
        id: 16,
        name: 'Canon EOS 250D EF-S 18-55 IS STM Kit',
        price: 499.99,
        description: 'Professional-grade digital camera with advanced features for stunning photography.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hf6/63832508596254.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/canon-eos-250d-ef-s-18-55-is-stm-kit-2240118/?c=750000000',
        liked: true,
        numLikes: 0,
      },
      {
        id: 17,
        name: 'Sony Alpha ILCE-6400 Kit',
        price: 899.99,
        description: 'Professional-grade digital camera with advanced features for stunning photography.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h73/64159784894494.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/sony-alpha-ilce-6400-kit-chernyi-102238049/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 18,
        name: 'Sony Alpha ILCE-7C Body',
        price: 2099.99,
        description: 'Professional-grade digital camera with advanced features for stunning photography.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hbb/64020050935838.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/sony-alpha-ilce-7c-body-serebristyi-101137965/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 19,
        name: 'Nikon Z8 Body',
        price: 5199.99,
        description: 'Professional-grade digital camera with advanced features for stunning photography.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h01/84618254975006.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/nikon-z8-body-114315579/?c=750000000',
        liked: false,
        numLikes: 0,
      },
      {
        id: 20,
        name: 'Fujifilm X-H2S Body',
        price: 2599.99,
        description: 'Professional-grade digital camera with advanced features for stunning photography.',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h77/hbe/65918289772574.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/fujifilm-x-h2s-body-107636460/?c=750000000',
        liked: false,
        numLikes: 0,
      },
    ]
    }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/