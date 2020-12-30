import React, { Component } from "react";
import { connect } from 'react-redux';

import productData from "../../reducers/data/product"

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
