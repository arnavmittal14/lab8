import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${BASE_URL}/add`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editProduct = async (id, product) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};
