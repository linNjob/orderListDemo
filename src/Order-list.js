import React, { Component } from "react";
import productData from "./data/product.js";
import OrderItem from "./unit.js";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const filterOrderStatus = (orders, orderStatus) => {
      return orders.filter((item) => {
        item.status.code === orderStatus[0] || item.status.code === orderStatus[1] ?
          item.map(() => { OrderItem(item) })
        : null
      })
    };
    return (
      <>
        <div className="title">進行中</div>
        <ul className="order-list">{ filterOrderStatus(productData.productData, [1,2]) }</ul>
        <div className="title">已完成</div>
        {/* <ul className="order-list">{ filterOrderStatus(productData.productData, [3, 4]) }</ul> */}
      </>
    );
  }
}

export default OrderList;
