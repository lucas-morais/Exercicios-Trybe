import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <div>
          {list.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
});

export default connect(mapStateToProps, null)(List);
