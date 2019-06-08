const imgPath = 'img';

export default [
  {
    id: 'card-1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    image: `${imgPath}/apartment-01.jpg`,
    price: 120,
    type: 'Apartment',
    rating: 4.6,
    isPremium: true,
    isBookmark: false,
    location: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 'card-2',
    title: 'Wood and stone place',
    image: `${imgPath}/room.jpg`,
    price: 80,
    type: 'Private room',
    rating: 1,
    isPremium: false,
    isBookmark: true,
    location: [52.369553943508, 4.85309666406198]
  },
  {
    id: 'card-3',
    title: 'Canal View Prinsengracht',
    image: `${imgPath}/apartment-02.jpg`,
    price: 132,
    type: 'Apartment',
    rating: 4,
    isPremium: false,
    isBookmark: false,
    location: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 'card-4',
    title: 'Nice, cozy, warm big bed apartment',
    image: `${imgPath}/apartment-03.jpg`,
    price: 180,
    type: 'Apartment',
    rating: 5,
    isPremium: true,
    isBookmark: false,
    location: [52.3809553943508, 4.939309666406198]
  }
];
