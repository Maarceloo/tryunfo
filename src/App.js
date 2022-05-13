import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const dados = {
  nome: '',
  descricao: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  imge: '',
  raridade: 'normal',
};

class App extends React.Component {
  state = {
    nome: '',
    descricao: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    imge: '',
    raridade: 'normal',
    check: false,
    card: [],
  };

  dadosInput = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  salvarCard = () => {
    const {
      nome,
      descricao,
      attr1,
      attr2,
      attr3,
      imge,
      raridade,
      check,
      card,
    } = this.state;
    card.push({ nome, descricao, attr1, attr2, attr3, imge, raridade, check });
    this.setState({ ...dados, card });
  };

  checkTrunfo = () => {
    const { card } = this.state;
    return card.some((item) => item.check === true);
  };

  // EXERCICIO 09
  deletaCard = (elemento) => {
    console.log(elemento);
  };

  baralho = () => {
    const { card } = this.state;
    return card.map((carta) => (
      <div key={ carta.nome }>
        <Card
          cardName={ carta.nome }
          cardDescription={ carta.descricao }
          cardAttr1={ carta.attr1 }
          cardAttr2={ carta.attr2 }
          cardAttr3={ carta.Attr3 }
          cardImage={ carta.imge }
          cardRare={ carta.raridade }
          cardTrunfo={ carta.check }
        />
        <button
          type="button"
          data-testid="delete-button"
          onClick={ this.deletaCard }
        >
          Excluir
        </button>
      </div>
    ));
  };

  render() {
    const { nome, descricao, attr1, attr2, attr3, imge, raridade, check } = this.state;
    const salvarButton = () => {
      if (nome !== '' && descricao !== '' && imge !== '' && raridade !== '') {
        const max = 90;
        if (
          parseInt(attr1, 10) <= max
          && parseInt(attr2, 10) <= max
          && parseInt(attr3, 10) <= max
        ) {
          const min = 0;
          if (
            parseInt(attr1, 10) >= min
            && parseInt(attr2, 10) >= min
            && parseInt(attr3, 10) >= min
          ) {
            const maxValue = 210;
            if (
              parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10)
              <= maxValue
            ) {
              return false;
            }
          }
        }
      }

      return true;
    };
    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form
            cardName={ nome }
            cardDescription={ descricao }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ imge }
            cardRare={ raridade }
            cardTrunfo={ check }
            onInputChange={ this.dadosInput }
            isSaveButtonDisabled={ salvarButton() }
            onSaveButtonClick={ this.salvarCard }
            hasTrunfo={ this.checkTrunfo() }
          />
        </div>
        <div>
          <Card
            cardName={ nome }
            cardDescription={ descricao }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ imge }
            cardRare={ raridade }
            cardTrunfo={ check }
          />
        </div>
        <div>
          <h2>Baralho</h2>
          {this.baralho()}
        </div>
      </div>
    );
  }
}

export default App;
