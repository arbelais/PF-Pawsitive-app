import axios from "axios";
import { AdoptFormInput, ContactForm, CheckIn, IUserForm } from "app/types";

export const getAdoptions = async () => {
  const response = await axios.get("/api/adoptionpost");
  const adoptions = await response.data;

  if (!adoptions) {
    throw new Error("Data not found");
  }
  return adoptions;
};

export const getMinAdoptions = async () => {
  const response = await axios.get("/api/adoptionpost/age/min");
  const adoptions = await response.data;

  if (!adoptions) {
    throw new Error("Data not found");
  }
  return adoptions;
};

export const getProducts = async () => {
  const response = await axios.get("/api/product");
  const products = await response.data;

  if (!products) throw new Error("Data not found");
  return products;
};
export const getProductById = async (id: string) => {
  const response = await axios.get("/api/product/"+id);
  const product = await response.data;

  if (!product) throw new Error("Data not found");
  return product;
};
export const getProductsByCategory = async (foodCategory: string) => {  
  const response = await axios.get("/api/product/", { params:{
    categoria : foodCategory
  } } );
  const products = await response.data;

  if (!products) throw new Error("Data not found");
  return products;
};

export const getPetById = async (id: string) => {
  const response = await axios.get(
    `/api/adoptionpost/${id}`
  );
  const products = await response.data;
  if (!products) throw new Error("Data not found");
  return products;
};

export const createPost = async (data: AdoptFormInput) => {
  const newPost = await axios
    .post("/api/adoptionpost", data)
    .then((response) => response.data.name)
    .catch((error) => console.log(error));

  return "Post de " + newPost + " creado";
};

export const sendMail = async (data: ContactForm) => {
  const newPost = await axios
    .post("/api/sendMail", data)
    .catch((error) => console.log(error));

  return "email send";
};

export const sendPaymentMail = async (data: CheckIn) => {
  const newPost = await axios
    .post("/api/sendMail", data)
    .catch((error) => console.log(error));

  return "email send";
};

export const registerUser = async (data: IUserForm) => {
    const newUser = await axios
        .post('/api/auth/register', data)
        .catch(error => console.log(error))

    return newUser
}
