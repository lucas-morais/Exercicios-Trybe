import React from 'react';
import { connect } from 'react-redux';
import addClick from '../redux/actions';

class ButtonClicks extends React.Component {
  render() { 
    const { add } = this.props;
    return (
      <div>
        <button onClick={ add }>Click Aqui</button>
      </div>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick())
});

export default connect(null, mapDispatchToProps)(ButtonClicks);
