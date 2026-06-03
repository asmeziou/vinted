import { Link } from "react-router-dom";
const Offers = ({ offers }) => {
  return (
    <section className="main-offers-container wrapper">
      {offers.map((element) => {
        return (
          element.product_name && (
            <article key={element._id}>
              <div>
                <Link to={`/offer/${element._id}`}>
                  <img src={element.product_pictures[0].url} />
                </Link>
              </div>
              <div>{element.product_price}€</div>
              <div>{element.product_details[1].TAILLE}</div>
              <div>{element.product_details[0].MARQUE}</div>
            </article>
          )
        );
      })}
    </section>
  );
};
export default Offers;
