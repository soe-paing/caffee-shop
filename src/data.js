import cartImg from './assets/logo.jpg';
import heroSlide1 from './assets/slide_01-1.jpg';
import heroSlide2 from './assets/slide_02-1.jpg';
import heroSlide3 from './assets/slide_03-1.jpg';
import heroQ1 from './assets/slogan_01.png';
import heroQ2 from './assets/slogan_02.png';
import heroQ3 from './assets/slogan_03.png';
import coffeeImg1 from './assets/coffee/bacsiuda-new-110x110.png';
import coffeeImg2 from './assets/coffee/cafenong-new-110x110.png';
import coffeeImg3 from './assets/coffee/cafe-da-110x110.png';
import coffeeImg4 from './assets/coffee/cafe-sua-110x110.png';
import cooktailImg1 from './assets/cooktail/2-110x110.png';
import cooktailImg2 from './assets/cooktail/3-110x110.png';
import cooktailImg3 from './assets/cooktail/5-110x110.png';
import cooktailImg4 from './assets/cooktail/6-110x110.png';
import teaImg1 from './assets/Tea/tra-chanh-new-110x110.png';
import teaImg2 from './assets/Tea/tra-dao-cam-sa-new-110x110.png';
import teaImg3 from './assets/Tea/tra-dau-new-110x110.png';
import teaImg4 from './assets/Tea/dualuoi-png-110x110.png';
import teaImg5 from './assets/Tea/tra-vai-new-110x110.png';
import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';
import about3 from './assets/about3.jpg';
import about4 from './assets/about4.jpg';
import about5 from './assets/about5.jpg';
import product1 from './assets/products/rook3.jpg';
import product2 from './assets/products/redbay3.jpg';
import product3 from './assets/products/masawa3.jpg';
import categoryImg1 from './assets/products/categories/coffee.jpg';
import categoryImg2 from './assets/products/categories/tools.jpeg';
import categoryImg3 from './assets/products/categories/condiments.jpg';

export const NAV_DATA = ['home','about', 'investment', 'contact'];

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

export const ABOUT_iMGS = [
  product1, product2, product3
]

export const MENU_DATAS = [
  {
    head: 'Coffee',
    menu: [
    {
      img: coffeeImg3,
      name: 'Black Ice Coffee',
      price: '$12.00/-'
    },
    {
      img: coffeeImg2,
      name: 'Black Hot Coffee',
      price: '$12.00/-'
    },
    {
      img: coffeeImg4,
      name: 'Milk Ice Coffee',
      price: '$12.00/-'
    },
    {
      img: coffeeImg2,
      name: 'Milk Hot Coffee',
      price: '$12.00/-'
    },
    {
      img: coffeeImg1,
      name: 'Silver Coin Stone',
      price: '$12.00/-'
    },
    {
      img: coffeeImg2,
      name: 'Hot Poker',
      price: '$12.00/-'
    },
  ]
  },
  {
    head: 'Cooktail',
    menu: [
      {
        img: cooktailImg4,
        name: 'Blue Magarita',
        price: '$12.00/-'
      },
      {
        img: cooktailImg3,
        name: 'Baby Love',
        price: '$12.00/-'
      },
      {
        img: cooktailImg2,
        name: 'Mist SaiGon',
        price: '$12.00/-'
      },
      {
        img: cooktailImg1,
        name: 'Sweet and sour (*)',
        price: '$12.00/-'
      },
    ]
  },
  {
    head: 'Tea',
    menu: [
    {
      img: teaImg1,
      name: 'lemon tea',
      price: '$12.00/-'
    },
    {
      img: teaImg2,
      name: 'Peach Orange Lemongrass Tea',
      price: '$12.00/-'
    },
    {
      img: teaImg3,
      name: 'Fruit tea',
      price: '$12.00/-'
    },
    {
      img: teaImg4,
      name: 'Pink Guava Tea',
      price: '$12.00/-'
    },
    {
      img: teaImg5,
      name: 'Jasmine Tea',
      price: '$12.00/-'
    },
  ]
  },
]

export const CATEGORIES = [
  {
    img: categoryImg1,
    title: "Coffee",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas.",
  },
  {
    img: categoryImg2,
    title: "Making Tools",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas.",
  },
  {
    img: categoryImg3,
    title: "Coffee Condiments",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas.",
  }
]

export const PRODUCTS = [
  {
    id: "p1",
    title: 'Rook Coffee',
    price: '12.33$',
    image: product1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas, fugiat perferendis sed ea quam officiis quia, ducimus rem perspiciatis.',
  },
  {
    id: "p2",
    title: 'Redbay Coffee',
    price: '12.33$',
    image: product2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas, fugiat perferendis sed ea quam officiis quia, ducimus rem perspiciatis.',
  },
  {
    id: "p3",
    title: 'Masawa Coffee',
    price: '12.33$',
    image: product3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas, fugiat perferendis sed ea quam officiis quia, ducimus rem perspiciatis.',
  },
  {
    id: "p4",
    title: 'Rook Coffee',
    price: '12.33$',
    image: product1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas, fugiat perferendis sed ea quam officiis quia, ducimus rem perspiciatis.',
  },
  {
    id: "p5",
    title: 'Redbay Coffee',
    price: '12.33$',
    image: product2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas, fugiat perferendis sed ea quam officiis quia, ducimus rem perspiciatis.',
  },
  {
    id: "p6",
    title: 'Masawa Coffee',
    price: '12.33$',
    image: product3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae blanditiis consectetur qui aliquam eos corrupti similique ex natus voluptas, fugiat perferendis sed ea quam officiis quia, ducimus rem perspiciatis.',
  }
]