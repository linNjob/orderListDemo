import React, { Component } from "react";

import productData from "../../../data/product";
import OrderItem from "./OrderItem.js";
import { filterOrdersByStatus } from '../../units/unit';


class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doing : "1,2",
      done : "3,4",
    };
  }
  mapOrderStatus = (items, isDisplayDate) => {
    return items.map((item, index) => {
      return OrderItem(item, isDisplayDate, index)
    })
  }
  render() {
    const filterOrderIng = filterOrdersByStatus(productData.productData, this.state.doing);
    const filterOrderDone = filterOrdersByStatus(productData.productData, this.state.done);
    return (
      <>
        <div className="title">進行中 
          <input type="text" 
                value={this.state.doing} 
                onChange={(event) => {
                  this.setState({
                    doing: event.target.value
                  })
                }}/>
        </div>
        <ul className="order-list">{ this.mapOrderStatus(filterOrderIng, true) }</ul>
        
        <div className="title">已完成 
          <input type="text" 
                value={this.state.done}
                onChange={(event) => {
                  this.setState({
                    done: event.target.value
                  })
                }} />
        </div>
        <ul className="order-list">{ this.mapOrderStatus(filterOrderDone, false) }</ul>
      </>
    );
  }
}

export default OrderList;
