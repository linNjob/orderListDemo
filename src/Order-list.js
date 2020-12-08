import React, { Component } from "react";
import productData from "./data/product.js";
import OrderItem from "./unit.js";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="title">進行中</div>
        <ul className="order-list">{OrderItem(productData, [1, 2])}</ul>
        <div className="title">已完成</div>
        <ul className="order-list">{OrderItem(productData, [3, 4])}</ul>
      </>
    );
  }
}

export default OrderList;
