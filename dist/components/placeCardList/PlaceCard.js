'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_router_dom_1 = require('react-router-dom');
const classnames_1 = require('classnames');
const Label_1 = require('../Label');
const Button_1 = require('../Button');
const Image_1 = require('../Image');
const Rating_1 = require('../Rating');
const SvgIcon_1 = require('../SvgIcon');
const withActiveItem_1 = require('../../hocs/withActiveItem');
const propTypes = {
  className: PropTypes.string,
  offer: PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.object,
    }),
    description: PropTypes.string,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatar_url: PropTypes.string,
      id: PropTypes.number,
      is_pro: PropTypes.bool,
      name: PropTypes.string,
    }),
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    is_favorite: PropTypes.bool,
    is_premium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    max_adults: PropTypes.number,
    preview_image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onActiveOfferClick: PropTypes.func,
  onAddToFavorities: PropTypes.func.isRequired,
  onRemoveFromFavorities: PropTypes.func.isRequired,
};
function PlaceCard({
  className,
  offer,
  onActiveOfferClick,
  onAddToFavorities,
  onMouseEnter,
  onMouseLeave,
  onRemoveFromFavorities,
}) {
  const {
    id,
    title,
    preview_image: previewImage,
    price,
    type,
    rating,
    is_premium: isPremium,
    is_favorite: isFavorite,
  } = offer;
  const BookmarkButton = withActiveItem_1.default(Button_1.default);
  return React.createElement(
    'article',
    {
      className: classnames_1.default(
        'place-card',
        className === 'cities' && `${className}__place-card`,
        className === 'near-places' && `${className}__card`,
        className === 'favorites' && `${className}__card`
      ),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
    },
    React.createElement(Label_1.default, { isShow: isPremium, name: 'Premium', parentClassName: 'place-card' }),
    React.createElement(
      'div',
      { className: `${className}__image-wrapper place-card__image-wrapper` },
      React.createElement(
        'a',
        { href: '#', onClick: onActiveOfferClick },
        React.createElement(Image_1.default, {
          className: 'place-card__image',
          height: className === 'favorites' ? '110' : '200',
          label: 'Place image',
          src: previewImage,
          width: className === 'favorites' ? '150' : '260',
        })
      )
    ),
    React.createElement(
      'div',
      { className: classnames_1.default('place-card__info', className === 'favorites' && `${className}__card-info`) },
      React.createElement(
        'div',
        { className: 'place-card__price-wrapper' },
        React.createElement(
          'div',
          { className: 'place-card__price' },
          React.createElement('b', { className: 'place-card__price-value' }, '\u20AC', price),
          React.createElement('span', { className: 'place-card__price-text' }, '/\u00A0night')
        ),
        React.createElement(
          BookmarkButton,
          {
            className: 'place-card__bookmark-button',
            isActive: isFavorite,
            onClick: isFavorite ? onRemoveFromFavorities(id) : onAddToFavorities(id),
          },
          React.createElement(SvgIcon_1.default, {
            className: 'place-card__bookmark-icon',
            height: '19',
            isShowLabel: false,
            label: isFavorite ? 'In bookmarks' : 'To bookmarks',
            name: 'icon-bookmark',
            width: '18',
          })
        )
      ),
      React.createElement(Rating_1.default, { parentClassName: 'place-card', rating: rating }),
      React.createElement(
        'h2',
        { className: 'place-card__name' },
        React.createElement(react_router_dom_1.Link, { to: `/offer/${id}` }, title)
      ),
      React.createElement('p', { className: 'place-card__type' }, type)
    )
  );
}
PlaceCard.propTypes = propTypes;
exports.default = PlaceCard;
//# sourceMappingURL=PlaceCard.js.map
