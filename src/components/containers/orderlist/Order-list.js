import React, { Component } from "react";
import productData from "../../../data/product";
import OrderItem from "./OrderItem.js";
import { filterOrdersByStatus } from '../../units/unit';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  mapOrderStatus = (items, isDisplayDate) => {
    return items.map((item) => {
      return OrderItem(item, isDisplayDate)
    })
  }
  render() {
    const filterOrderIng = filterOrdersByStatus(productData.productData, [1, 2]);
    const filterOrderDone = filterOrdersByStatus(productData.productData, [3, 4]);
    return (
      <>
        <div className="title">進行中</div>
        <ul className="order-list">{ this.mapOrderStatus(filterOrderIng, true) }</ul>
        
        <div className="title">已完成</div>
        <ul className="order-list">{ this.mapOrderStatus(filterOrderDone, false) }</ul>
      </>
    );
  }
}

export default OrderList;
