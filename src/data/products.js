import blackFront from '../assets/products/black_shirt_front.PNG';
import blackBack from '../assets/products/black_shirt_back.png';
import whiteFront from '../assets/products/white_shirt_front.PNG';
import whiteBack from '../assets/products/white_shirt_back.png';
import hoodieFront from '../assets/products/rhinestone_hoodie_front.png';
import hoodieBack from '../assets/products/rhinestone_hoodie_back.png';

const products = [
  {
    id: 'fp-tee-black',
    name: 'Faithfully Patient Tee — Black',
    shortName: 'FP Tee — Black',
    price: 50,
    description:
      'Premium heavyweight cotton tee in black. Features the Faithfully Patient clock emblem on the front chest and the signature praying skeleton graphic on the back. Built for those who move in silence and let success make the noise.',
    sizes: ['S', 'M', 'L'],
    color: 'Black',
    images: {
      front: blackFront,
      back: blackBack,
    },
    paymentLink: 'https://buy.stripe.com/9B67sM72wcd88G9d5ZafS01',
  },
  {
    id: 'fp-tee-white',
    name: 'Faithfully Patient Tee — White',
    shortName: 'FP Tee — White',
    price: 50,
    description:
      'Premium heavyweight cotton tee in white. Features the Faithfully Patient clock emblem on the front chest and the signature praying skeleton graphic on the back. Clean, bold, and built to stand out.',
    sizes: ['S', 'M', 'L'],
    color: 'White',
    images: {
      front: whiteFront,
      back: whiteBack,
    },
    paymentLink: 'https://buy.stripe.com/eVq5kE72welg8G9c1VafS00',
  },
  {
    id: 'fp-rhinestone-hoodie',
    name: 'Faithfully Patient Rhinestone Hoodie',
    shortName: 'FP Rhinestone Hoodie',
    price: 120,
    description:
      'Premium heavyweight hoodie in black with rhinestone detailing on the hood and sleeves. Features the Faithfully Patient clock emblem on the front chest and the signature praying skeleton graphic on the back. A statement piece for those who shine in silence.',
    sizes: ['S', 'M', 'L'],
    color: 'Black',
    images: {
      front: hoodieFront,
      back: hoodieBack,
    },
    paymentLink: 'https://buy.stripe.com/bJe28s4Uoelgg8B7LFafS02',
  },
];

export default products;