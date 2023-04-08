/*
 **received string
 **return an array
 */
export const splitString = str => {
  return str.split(/ (.*)/, 2);
};

export const trendingProducts = [
  {
    id: 1,
    category: 'Fashion For Women',
    products: [
      {
        id: 1,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/9yb7CYy/p1.png',
      },
      {
        id: 2,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/nnwQ6k8/p2.png',
      },
      {
        id: 3,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/MhpmMxc/p3.png',
      },
    ],
  },
  {
    id: 2,
    category: 'Food For Health',
    products: [
      {
        id: 1,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/GQ1pT0Z/f1.png',
      },
      {
        id: 2,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/SshnKvh/f2.png',
      },
      {
        id: 3,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/gJW8vwC/f3.png',
      },
    ],
  },
  {
    id: 3,
    category: 'Cosmetics For Winter',
    products: [
      {
        id: 1,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/54xBB2W/c1.png',
      },
      {
        id: 2,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/r6zCkt5/c2.png',
      },
      {
        id: 3,
        title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
        salePrice: 2036.0,
        offerPrice: 3000.0,
        rating: 5.0,
        image: 'https://i.ibb.co/x1k7Dth/c3.png',
      },
    ],
  },
];

export const flashProducts = [
  {
    id: 1,
    type: 'Sale',
    category: 'Smart TV',
    title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
    salePrice: 2036.0,
    offerPrice: 3000.0,
    rating: 5.0,
    image: 'https://i.ibb.co/hsqkJW0/tv1.png',
    slides: [
      'https://i.ibb.co/JKjGRff/tv2.png',
      'https://i.ibb.co/0yRqnKr/fun2.png',
      'https://i.ibb.co/hsqkJW0/tv1.png',
    ],
  },
  {
    id: 2,
    type: 'New',
    category: 'Cosmetics',
    title:
      'Lomitech F310 - Wifi & USB RGB Dual Gamepad - for smooth experience',
    salePrice: 36.0,
    offerPrice: 40.0,
    rating: 5.0,
    image: 'https://i.ibb.co/YkBb8Gb/head2.png',
    slides: [
      'https://i.ibb.co/YkBb8Gb/head1.png',
      'https://i.ibb.co/YkBb8Gb/head2.png',
      'https://i.ibb.co/64hLJ1b/fun1.png',
    ],
  },
  {
    id: 3,
    type: 'Sale',
    category: 'Headphone',
    title: 'Fabitech Sonata MH90 Multi-Platform RGB Gaming Headset',
    salePrice: 124.0,
    offerPrice: 150.0,
    rating: 5.0,
    image: 'https://i.ibb.co/5XDXQnt/head1.png',
    slides: [
      'https://i.ibb.co/YkBb8Gb/head2.png,https://i.ibb.co/SPs5tgk/game1.png',
      'https://i.ibb.co/5XDXQnt/head1.png',
    ],
  },
  {
    id: 4,
    type: 'Sale',
    category: 'Furniture',
    title: 'Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television',
    salePrice: 2036.0,
    offerPrice: 3000.0,
    rating: 5.0,
    image: 'https://i.ibb.co/64hLJ1b/fun1.png',
    slides: [
      'https://i.ibb.co/0yRqnKr/fun2.png',
      'https://i.ibb.co/YkBb8Gb/head2.png',
      'https://i.ibb.co/64hLJ1b/fun1.png',
    ],
  },
  {
    id: 5,
    type: 'New',
    category: 'Gaming',
    title:
      'Lomitech F310 - Wifi & USB RGB Dual Gamepad - for smooth experience',
    salePrice: 36.0,
    offerPrice: 49.0,
    rating: 5.0,
    image: 'https://i.ibb.co/SPs5tgk/game1.png',
    slides: [
      'https://i.ibb.co/jJ3X2b5/game3.png',
      'https://i.ibb.co/YkBb8Gb/head2.png',
      'https://i.ibb.co/SPs5tgk/game1.png',
    ],
  },
];
