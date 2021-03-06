import React, { useState } from "react";
import { Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.scss";
import { useSelector } from "react-redux";
import ItemProducts from "../ItemProducts/index";
import { useTranslation } from "react-i18next";
import LazyComponent from "../LazyComp";

export default function ProductItem() {
  const [adloading, setadloading] = useState(false);
  const stateProducts = useSelector((state) => state.products);
  const { t } = useTranslation("common");
  const { products } = stateProducts;
  console.log(products);
  const renderData = (categoryId) => {
    if (products.length === 0) {
      return new Array(3)
        .fill(true)
        .map((item, index) => <LazyComponent key={index} />);
    }
    const data = products.filter(
      (product) => product.categoryId === categoryId
    );
    return data.map((value, key) => (
      <div className="wrapper-item" key={key}>
        <ItemProducts
          id={value.id}
          image={value.image}
          title={value.name}
          price={value.price}
          percent={value.percent}
          categoryId={value.categoryId}
          type={"home"}
        ></ItemProducts>
      </div>
    ));
  };

  const renderLink = (categoryId) => {
    return (
      <div>
        <Link
          to={{
            pathname: "/category",
            state: { chosen: categoryId },
          }}
        >
          <Button
            style={{
              float: "right",
              color: "#7fad39",
              border: "1px solid #7fad39",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {t(`homepage.viewMore`)} <DoubleRightOutlined />
          </Button>
        </Link>

        <div className="row" style={{ width: "100%" }}>
          {renderData(categoryId)}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="category">
          <h4>{t(`homepage.shoes`)}</h4>
          {renderLink(5)}
        </div>
        <div className="category">
          <h4>{t(`homepage.clothing`)}</h4>
          {renderLink(2)}
        </div>
      </div>
    </div>
  );
}
