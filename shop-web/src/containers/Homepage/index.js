import React, { useEffect, useState } from "react";
import { getInfoProducts } from "../../action/action";
import { useDispatch } from "react-redux";
import "./index.scss";
import ProductItem from "../../components/ProductItem/index";
import axiosService from "../../utils/axiosService";
import { ENDPOINT, GET_PRODUCTS_API } from "../../constant";
import Banner from "../../components/Banner";
import Adloading from "../../components/AdLoading";

export default function HomePage() {
  const [adloading, setadloading] = useState(false);
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    setadloading(true);
    const fetchData = async () => {
      const res = await axiosService.get(`${ENDPOINT}${GET_PRODUCTS_API}`);
      dispatch(getInfoProducts(res.data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {adloading && <Adloading />}
      <Banner />
      <ProductItem />
    </div>
  );
}
