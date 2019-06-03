import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const placeCards = [
  {
    id: 'card-1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    image: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    rating: 4.6,
    isPremium: true,
    isBookmark: false
  },
  {
    id: 'card-2',
    title: 'Wood and stone place',
    image: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    rating: 1,
    isPremium: false,
    isBookmark: true
  },
  {
    id: 'card-3',
    title: 'Canal View Prinsengracht',
    image: 'img/apartment-02.jpg',
    price: 132,
    type: 'Apartment',
    rating: 4,
    isPremium: false,
    isBookmark: false
  },
  {
    id: 'card-4',
    title: 'Nice, cozy, warm big bed apartment',
    image: 'img/apartment-03.jpg',
    price: 180,
    type: 'Apartment',
    rating: 5,
    isPremium: true,
    isBookmark: false
  },
  {
    id: 'card-5',
    title: 'Wood and stone place',
    image: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    rating: 4,
    isPremium: false,
    isBookmark: true
  }
];

const root = document.querySelector('#root');

ReactDOM.render(<App placeCards={placeCards} />, root);
