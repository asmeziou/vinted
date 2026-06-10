import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Product from "../components/Product";

import axios from "axios";
const Offer = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("ID reçu :", params.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${params.id}`,
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [params.id]);

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <>
      <Product data={data} />
    </>
  );
};

export default Offer;
