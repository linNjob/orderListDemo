import React, { Component } from "react";
import productData from './data/product.js';

function OrderItem  (props) {
  return (<li>
          <i className="fas fa-angle-right"></i>
          <div className="img-box">
            <img src={ props.logo } alt="" />
          </div>
          <div className="info-box">
            <div className="info-title">
              <span className="order-status">{ props.statusType }</span>
              {
                props.status === 1 || props.status === 2 ? 
                <span className="order-shipment">預計出貨：{ props.date }</span>
                : null
              }
            </div>
            <div className="info-desc">{ props.name }</div>
          </div>
        </li>);
}
class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  render() {
    return (
      <>
        <div className="title">進行中</div>
        <ul className="order-list">
          { productData.productData.map((item) => (
              (item.status.code === 1 || item.status.code === 2) ?
              < OrderItem 
                logo={item.logo}
                statusType={item.status.type}
                name={item.name}
                date={item.date}
                status={item.status.code}
              /> : null
            ))
          }
        </ul>
        <div className="title">已完成</div>
        <ul className="order-list">
          { productData.productData.map((item) => (
            (item.status.code === 3 || item.status.code === 4) ?
              < OrderItem 
                logo={item.logo}
                statusType={item.status.type}
                name={item.name}
                status={item.status.code}
              /> : null
            ))
          }
        </ul>
      </>
    );
  }
}

export default OrderList;
