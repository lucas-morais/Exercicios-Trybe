import React from 'react';
import { connect } from 'react-redux';
import addAssignment from '../actions';

class InputsList extends React.Component {
  constructor() {
    super();
    this.state = { texValue: '' };
  }
  render() {
    const { textValue } = this.state;
    const { add } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={({ target }) => {
            this.setState({ textValue: target.value });
          }}
        />
        <button type="button" onClick={() => add(textValue)}>
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value)),
});

export default connect(null, mapDispatchToProps)(InputsList);
