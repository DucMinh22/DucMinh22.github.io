import {
    GET_ALL_PRODUCTS,
    GET_ALL_CATEGORIES,
    GET_PRODUCTS_BY_CATEGORY,
    GET_INFO_PRODUCTS,
    REMOVE_ALL_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SEARCH_PRODUCT_ITEM,
    PAY_ALL_PRODUCTS,
    PAY_PRODUCT,
    CONFIRM_PAYMENT,
    UPDATE_CART_PRODUCT,
    GET_ALL_BILLS,
    GET_PRODUCTS_BILL,
    GET_STATE_BILLS,
    REMOVE_BILLS,
    SEARCH_BILLS,
    UPDATE_STATE_BILLS,
    UPDATE_PRODUCTS,
} from "./actionTypes";

export const getAllProducts = () => {
    return {
        type: GET_ALL_PRODUCTS,
    };
};

export const getAllCategories = () => {
    return {
        type: GET_ALL_CATEGORIES,
    };
};

export const getProductsByCategory = (categoryId, option) => {
    return {
        type: GET_PRODUCTS_BY_CATEGORY,
        categoryId,
        option,
    };
};

export const getInfoProducts = (products) => {
    return {
        type: GET_INFO_PRODUCTS,
        a: products,
    };
};

export const removeAllCartProducts = () => {
    return {
        type: REMOVE_ALL_PRODUCTS,
    };
};

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product,
    };
};

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        productId,
    };
};

export const searchProduct = (product) => {
    return {
        type: SEARCH_PRODUCT_ITEM,
        payload: product,
    };
};

export const purchaseProduct = (product) => {
    return {
        type: PAY_PRODUCT,
        product,
    };
};

export const purchaseAllProduct = () => {
    return {
        type: PAY_ALL_PRODUCTS,
    };
};

export const confirmPurchase = () => {
    return {
        type: CONFIRM_PAYMENT,
    };
};

export const getAllBillsID = (bill) => {
    return {
        type: GET_ALL_BILLS,
        payload: bill,
    };
};

export const getProductBills = (products) => {
    return {
        type: GET_PRODUCTS_BILL,
        payload: products,
    };
};

export const getStateBills = (statebill) => {
    return {
        type: GET_STATE_BILLS,
        payload: statebill,
    };
};

export const removeBills = (BillsId) => {
    return {
        type: REMOVE_BILLS,
        BillsId,
    };
};

export const searchbillsByName = (keyword) => {
    return {
        type: SEARCH_BILLS,
        payload: keyword,
    };
};

export const updateStateBills = (status) => {
    return {
        type: UPDATE_STATE_BILLS,
        payload: status,
    };
};
export const UpdateProducts = (product) => {
    return {
        type: UPDATE_PRODUCTS,
        payload: product,
    };
};
export const updateCart = (product) => {
    return {
        type: UPDATE_CART_PRODUCT,
        product,
    };
};
