import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    nome: '',
    descricao: '',
    attr1: '',
    attr2: '',
    attr3: '',
    imge: '',
    raridade: '',
    check: false,
  };

  dadosInput = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { nome, descricao, attr1, attr2, attr3, imge, raridade, check } = this.state;
    const salvar = () => {
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
              return true;
            }
          }
        }
      }
      return false;
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
            isSaveButtonDisabled={ salvar() }
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
      </div>
    );
  }
}

export default App;
