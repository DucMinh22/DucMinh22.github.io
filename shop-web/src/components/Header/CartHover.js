import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import Button from "../Button";
import "./index.scss";

function CartHover(props) {
  const { title, image, price, product, onRemove, key } = props;
  return (
    <div style={{ padding: "10px" }}>
      <div className="row itemProduct">
        <div className="col-2 image">
          <img className="img-fuild" src={image} alt="" />
        </div>
        <div className="col-6 productName"> {title}</div>
        <div className="col-4" style={{ textAlign: "right" }}>
          <div className="Price" style={{ color: "red" }}>
            ${price}
          </div>
          <div className="btn-delete">
            <DeleteOutlined
              onClick={() => onRemove(product.id)}
              style={{ fontSize: "16px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHover;
