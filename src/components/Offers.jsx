import { Link } from "react-router-dom";
const Offers = ({ offers, values, search }) => {
  return (
    <section className="main-offers-container wrapper">
      {offers
        // .filter((element) => {
        //   return (
        //     element.product_price >= values[0] &&
        //     element.product_price <= values[1]
        //   );
        // })
        .map((element) => (
          <article key={element._id}>
            <div>
              <Link to={`/offer/${element._id}`}>
                {element.product_pictures?.[0]?.secure_url ? (
                  <img src={element.product_pictures[0].secure_url} alt="" />
                ) : (
                  <img src={Image} alt="" />
                )}
              </Link>
            </div>

            <div>{element.product_price} €</div>
            <div>{element.product_details?.[1]?.TAILLE}</div>
            <div>{element.product_details?.[0]?.MARQUE}</div>
          </article>
        ))}
    </section>
  );
};
export default Offers;
