import React, { useEffect, useState } from "react";
import "./index.scss";
import ProductRow from "./ProductsRow";
import { useHistory } from "react-router-dom";
import axiosService from "../../utils/axiosService";
import { ENDPOINT, GET_PRODUCTS_API, GET_CATEGORIES_API } from "../../constant";
import Loading from "../../components/Loading";
import BreadCrumb from "../../components/Breadcrumb";
import { useSelector } from "react-redux";
import ItemProducts from "../../components/ItemProducts";
import { useTranslation } from "react-i18next";
import LazyComponent from "../../components/LazyComp";

export default function Productdetails() {
  const history = useHistory();
  const { type, id, categoryId } = history.location.state;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const productReducer = useSelector((state) => state.products);
  const { products } = productReducer;
  const { t } = useTranslation("common");
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (type === "home") {
        const res = await axiosService.get(
          `${ENDPOINT}${GET_PRODUCTS_API}/${id}`
        );
        setProduct(res.data);
        setLoading(false);
      } else {
        const res2 = await axiosService.get(
          `${ENDPOINT}${GET_CATEGORIES_API}/${categoryId}/products/${id}`
        );
        setProduct(res2.data);
        setLoading(false);
      }
    };
    fetchData();
  }, [id, categoryId, products, type]);

  useEffect(() => {
    const productsByCategory = products.filter(
      (item) => item.categoryId === Number.parseInt(categoryId)
    );

    const productsExceptMain = productsByCategory.filter(
      (item) => item.id !== product.id
    );

    const related = productsExceptMain.splice(0, 5);
    setRelatedProducts(related);
  }, [product, products, categoryId]);

  const renderLazyComp = () => {
    new Array(3).fill(true).map((item, index) => <LazyComponent key={index} />);
  };
  const linksBreadCrumb = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Category",
      to: "/Category",
    },
  ];
  return (
    <div>
      {loading && <Loading />}
      <div className="container">
        <BreadCrumb links={linksBreadCrumb} nameActivePage={product.name} />
        <ProductRow
          type={type}
          product={product}
          description="   Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus."
          descriptonDetail={products.description}
        />
        <h4 style={{ marginTop: "30px" }}>{t(`detailpage.relatedProducts`)}</h4>
        <div className="relatedField">
          {relatedProducts?.length === 0 && renderLazyComp}
          {relatedProducts.map((item) => {
            return (
              <div className="mainContent__item" key={item.id}>
                <ItemProducts
                  type="home"
                  id={item.id}
                  image={item.image}
                  title={item.name}
                  price={item.price}
                  percent={item.percent}
                  categoryId={item.categoryId}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
