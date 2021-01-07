import React, { Component } from "react";
import { connect } from 'react-redux';

// import productData from "../../reducers/data/product";
import productData from "../../reducers/json-server/db";

import OrderItem from "./OrderItem.js";
import { filterOrdersByStatus } from './unit';

import { changeInput } from '../../action/changeInput';


class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  mapOrderStatus = (items, isDisplayDate) => {
    return items.map((item, index) => {
      return OrderItem(item, isDisplayDate, index)
    })
  }
  componentDidMount() {
  //   var sendobj = {
  //     "name": "小名",
  //     "money": "1000"
  // }
  
  // let xhr = new XMLHttpRequest();
  // xhr.open('post', 'http://localhost:3000/posts', true);
  // xhr.setRequestHeader('Content-type', 'application/json');
  // let data = JSON.stringify(sendobj);
  // xhr.send(data);
  
  }
  render() {
    const {onInput} = this.props;
    const filterOrderIng = filterOrdersByStatus(productData.productData, this.props.inputValue);
    return (
      <>
        <div className="title">進行中 
          <input type="text" 
                value={this.props.inputValue} 
                onChange={(e) => onInput(e.target.value)}/>
        </div>
        <ul className="order-list">{ this.mapOrderStatus(filterOrderIng, true) }</ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.todoReducer.inputValue,
})
const mapDispatchToProps = (dispatch) => ({
  onInput: (value) => {
      dispatch(changeInput(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderList);
