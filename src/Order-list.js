import React, { Component } from "react";
import productData from './data/product.js';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},
    };
    
  }
  // componentDidMount = async() => {
    // const data = await fetch("/json/product.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // }).then((response) => response.json());
    // this.setState({
    //   album: data,
    // });
    // console.log(data);
    // console.log(this.state.album);
  // };
  orderList = (status) => {
    return (status === 'run') ? 
      productData.productData.map((item) => (
        (item.status.code === 1 || item.status.code === 2) ?
          <li>
            <i className="fas fa-angle-right"></i>
            <div className="img-box">
              <img src={ item.logo } alt="" />
            </div>
            <div className="info-box">
              <div className="info-title">
                <span className="order-status">{ item.status.type }</span>
                <span className="order-shipment">預計出貨：{ item.date }</span>
              </div>
              <div className="info-desc">{ item.name }</div>
            </div>
          </li> 
        : null
      ))
      : productData.productData.map((item) => (
        (item.status.code === 3 || item.status.code === 4) ?
          <li>
            <i className="fas fa-angle-right"></i>
            <div className="img-box">
              <img src={ item.logo } alt="" />
            </div>
            <div className="info-box">
              <div className="info-title">
                <span className="order-status">{item.status.type}</span>
              </div>
              <div className="info-desc">{ item.name }</div>
            </div>
          </li> 
        : null
      ))
  }
  render() {
    return (
      <>
        <div className="title">進行中</div>
        <ul className="order-list">
          { this.orderList('run') }
        </ul>
        <div className="title">已完成</div>
        <ul className="order-list">
          { this.orderList() }
        </ul>
      </>
    );
  }
}

// const mapStateToProps = state => ({
//     name: state.name
// })

export default OrderList;
