import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

import Offers from "../components/Offers";

const Home = ({ values, search }) => {
  // Les balises Link utilisent une propriété "to" permettant de cibler le path de l'une des route du router

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Pagination
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const limit = 20;
  // let skip = (page - 1) * limit;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${limit}&title=${search}&priceMin=${values[0]}&priceMax=${values[1]}`,
        );
        // console.log(response.data); //OK
        setData(response.data);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [limit, page, search, values]);

  const totalPages = Math.ceil(count / limit);

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <main>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Précédent
        </button>

        <span>
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Suivant
        </button>
      </div>
      <Offers offers={data.offers} values={values} search={search} />
    </main>
  );
};

export default Home;
