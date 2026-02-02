import blackFront from '../assets/products/black_shirt_front.PNG';
import blackBack from '../assets/products/black_shirt_back.png';
import whiteFront from '../assets/products/white_shirt_front.PNG';
import whiteBack from '../assets/products/white_shirt_back.png';

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
    stripePriceId: 'price_PLACEHOLDER_BLACK',
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
    stripePriceId: 'price_PLACEHOLDER_WHITE',
  },
];

export default products;