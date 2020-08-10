import React, { useEffect, useState } from "react";
import "./index.scss";
import axiosService from "../../utils/axiosService";
import { ENDPOINT, GET_PRODUCTS_API } from "../../constant";
import { Col, Row, message } from "antd";
import {
  getInfoProducts,
  getAllCategories,
  UpdateProducts,
} from "../../action/action";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import ModalInput from "../../components/ModalInput";
import { useTranslation } from "react-i18next";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import * as _ from "lodash";
import { isRequired, isTypeNumber } from "../../utils/validation";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";

function WarehouseDetailPage() {
  const [loading, setLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    supplier: "",
    quantity: "",
    description: "",
  });
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { t } = useTranslation("common");
  const { id } = match.params;
  const allcategories = useSelector((state) => state.categories);

  const { categories } = allcategories;

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      let res = await axiosService.get(`${ENDPOINT}${GET_PRODUCTS_API}/${id}`);
      dispatch(getInfoProducts(res.data));
      setNewProduct(res.data);
      setLoading(false);
    };

    fetch();
  }, [dispatch, id]);

  // componentDidMount
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  // get options for modal
  const modalOptions = categories.map((item) => ({ ...item, value: item.id }));

  // handle change input
  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewProduct((prev) => {
      return {
        ...prev,
        [name]: value,
        // name: data,
      };
    });
  };

  const handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    setNewProduct((prev) => {
      return {
        ...prev,
        description: data,
      };
    });
  };

  // handle change select
  const onChangeSelect = (value) => {
    setNewProduct((prev) => {
      return {
        ...prev,
        category: value,
      };
    });
  };

  // handle update
  const handleUpdate = () => {
    const error = {
      ...isRequired("productName", newProduct.name),
      ...isRequired("productCategory", newProduct.category),
      ...isRequired("supplier", newProduct.supplier),
      ...isRequired("description", newProduct.description),
      ...isTypeNumber("price", newProduct.price),
      ...isTypeNumber("quantity", newProduct.quantity),
    };
    if (!_.isEmpty(error)) {
      const errorMessage = _.uniq(Object.values(error));
      errorMessage.map((item) => message.error(item));
    } else {
      const body = {
        ...newProduct,
      };
      setLoading(true);
      axiosService
        .put(`${ENDPOINT}${GET_PRODUCTS_API}/${id}`, body)
        .then((res) => {
          message.success("Edit product successfully");
          dispatch(UpdateProducts(res.data));
        })
        .catch((error) => {
          message.error("Server Error");
        })
        .finally(() => setLoading(false));
    }
  };
  return (
    <div>
      {loading && <Loading />}

      <div className="warehouse-detail">
        <div className="content">
          <h2>{t(`warehouseDetail.title`)}</h2>
          <Row justify="space-between" style={{ paddingTop: "30px" }}>
            <Col xl={11} md={10} sm={12}>
              <ModalInput
                name="name"
                label={t("warehouseDetail.input.productName")}
                value={newProduct.name}
                onChange={(e) => onChangeInput(e)}
                placeholder="Input Product's Name"
                required
              />
            </Col>
            <Col xl={11} md={10} sm={12}>
              <ModalInput
                type="select"
                optionSelectValue={modalOptions}
                name="category"
                label={t("warehouseDetail.input.productCategory")}
                value={newProduct.category}
                onChange={onChangeSelect}
                placeholder="Input Product's Category"
                required
              />
            </Col>
          </Row>
          <Row justify="space-between" style={{ paddingTop: "30px" }}>
            <Col xl={11} md={10} sm={12}>
              <ModalInput
                name="price"
                label={t("warehouseDetail.input.price")}
                value={newProduct.price}
                onChange={(e) => onChangeInput(e)}
                placeholder="Input Product's Price"
                required
              />
            </Col>
            <Col xl={11} md={10} sm={12}>
              <ModalInput
                name="supplier"
                label={t("warehouseDetail.input.supplier")}
                value={newProduct.supplier}
                onChange={(e) => onChangeInput(e)}
                placeholder="Input Product's Supplier"
                required
              />
            </Col>
          </Row>
          <Row justify="space-between" style={{ paddingTop: "30px" }}>
            <Col xl={11} md={10} sm={12}>
              <ModalInput
                name="quantity"
                label={t("warehouseDetail.input.quantity")}
                value={newProduct.quantity}
                onChange={(e) => onChangeInput(e)}
                placeholder="Input Product's Quantity"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col xl={22} md={10} sm={12}>
              {t("warehousepage.table.description")}
              <CKEditor
                name="description"
                label={t("warehousepage.table.description")}
                data={newProduct.description}
                required
                onChange={handleCkeditorState}
                editor={ClassicEditor}
              />
            </Col>
          </Row>
          <Col xl={11} md={10} sm={12} style={{ marginTop: "25px" }}>
            <Button type="primary" onClick={handleUpdate} htmlType="submit">
              {loading ? "Loading..." : t(`warehouseDetail.input.update`)}
            </Button>
          </Col>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetailPage;
