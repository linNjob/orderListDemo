import React from "react";

function OrderItem(item) {
  return <li>
    <i className="fas fa-angle-right"></i>
    <div className="img-box">
      <img src={item.logo} alt="" />
    </div>
    <div className="info-box">
      <div className="info-title">
        <span className="order-status">{item.status.type}</span>
        {item.status.code === 1 || item.status.code === 2 ? (
          <span className="order-shipment">預計出貨：{item.date}</span>
        ) : null}
      </div>
      <div className="info-desc">{item.name}</div>
    </div>
  </li>;
}
export default OrderItem;