import cartImg from './assets/logo.png';
import sysImg1 from './assets/system_1.jpg';
import sysImg2 from './assets/system_2.jpg';
import sysImg3 from './assets/system_3.jpg';
import heroSlide1 from './assets/slide_01-1.jpg';
import heroSlide2 from './assets/slide_02-1.jpg';
import heroSlide3 from './assets/slide_03-1.jpg';
import heroQ1 from './assets/slogan_01.png';
import heroQ2 from './assets/slogan_02.png';
import heroQ3 from './assets/slogan_03.png';

export const NAV_DATA = ['home','about', 'menu', 'products', 'review', 'content', 'blogs'];

export const CART_ITEMS = [
    {
        name: "cart item 1",
        image: cartImg,
        price: "$15.99/-",
    },
    {
        name: "cart item 2",
        image: cartImg,
        price: "$15.99/-",
    },
    {
        name: "cart item 3",
        image: cartImg,
        price: "$15.99/-",
    }
]

export const HERO_DATA = [
    {
      bgImg: heroSlide2,
      image: heroQ1,
      quote: "At the Outdour Coffee system, we offer the physical appearance of limited iced milk coffee to anyone who loves this drink. Price just again with the market!..",
    },
    {
      bgImg: heroSlide1,
      image: heroQ2,
      quote: "Stemming from a special love for coffee, considering coffee as a proud start, The Coffee VN was born to satisfy the desire to provide the best coffee service to the people who enjoy it.",
    },
    {
      bgImg: heroSlide3,
      image: heroQ3,
      quote: "Stemming from a special love for coffee, considering coffee as a proud start, The Coffee VN was born to satisfy the desire to provide the best coffee service to the people who enjoy it.",
    }
]

export const SYSTEM_DATA = [
  {
    image: sysImg1,
    content: 'Outdoor Bar'
  },
  {
    image: sysImg2,
    content: 'Ground Floor'
  },
  {
    image: sysImg3,
    content: 'First Floor'
  }
]

export const ABOUT_iMGS = [
  sysImg1, sysImg2, sysImg3
]

// testing commit