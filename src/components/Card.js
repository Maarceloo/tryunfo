import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    const trunfo = () => {
      if (cardTrunfo === true) {
        return <p data-testid="trunfo-card">Super Trunfo</p>;
      }
    };

    return (
      <div>
        <div>
          <p data-testid="name-card">{cardName}</p>
        </div>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <div>
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div>
          <p data-testid="attr1-card">{cardAttr1}</p>
        </div>
        <div>
          <p data-testid="attr2-card">{cardAttr2}</p>
        </div>
        <div>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </div>
        <div>
          <p data-testid="rare-card">{cardRare}</p>
        </div>
        <div>{trunfo()}</div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
