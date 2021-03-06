import { all, takeLatest, call, put } from "redux-saga/effects";
import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAILURE } from '../action/actionTypes'
import axiosService from "../utils/axiosService";
import { ENDPOINT, GET_PRODUCTS_API } from "../constant";


function* getProducts() {
    try {
        const res = yield call(() => axiosService.get(`${ENDPOINT}${GET_PRODUCTS_API}`));
        if (res.data?.length > 0) {
            yield put({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
        } else {
            yield put({ type: GET_ALL_PRODUCTS_FAILURE, payload: "No Data" });
        }
    } catch (error) {
        yield put({ type: GET_ALL_PRODUCTS_FAILURE, payload: "Server Error" });
    }
}

export default function* productWatcher() {
    yield all([
        takeLatest(GET_ALL_PRODUCTS, getProducts)
    ])
}