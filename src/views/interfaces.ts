interface Location {
  latitude: number,
  longitude: number,
  zoom: number,
}

interface Host {
  avatar_url: string,
  id: number,
  is_pro: boolean,
  name: string,
}

interface OfferCity {
  name: string,
  location: Location,
}

interface City {
  name: string,
  location: Array<number>,
  zoom: number,
}

interface Offer {
  bedrooms: number,
  city: OfferCity,
  description: string,
  goods: Array<string>,
  host: Host,
  id: number,
  images: Array<string>,
  is_favorite: boolean,
  is_premium: boolean,
  location: Location,
  max_adults: number,
  preview_image: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

interface User {
  id?: number,
  is_pro?: boolean,
  name?: string,
  avatar_url?: string,
  email?: string,
}

interface Review {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string,
}

interface Option {
  id: number,
  name: string,
}

type onAddToFavorities = (hotelId: number) => () => void
type onRemoveFromFavorities = (hotelId: number) => () => void
type onChangeCity = (city: { name: string, location: Array<number>, zoom: number }) => (event: React.MouseEvent<HTMLAnchorElement>) => void
type onSignIn = (email: FormDataEntryValue, password: FormDataEntryValue) => void

export { OfferCity, City, Offer, User, Option, Review, onAddToFavorities, onRemoveFromFavorities, onChangeCity, onSignIn };
