import { Link } from "react-router-dom";
const Product = ({ data }) => {
  return (
    <article className="container-offer">
      <div className="detail-offer wrapper">
        <div>
          <img src={data.product_pictures[0].secure_url} />
        </div>
        <div>
          <div className="detail-offer-part1">
            <div>{data.product_price}€</div>
            <div>
              <span>Marque:</span>
              {data.product_details[0].MARQUE}
            </div>
            <div>
              <span>TAILLE:</span>
              {data.product_details[1].TAILLE}
            </div>
            <div>
              <span>ETAT:</span>
              {data.product_details[2].ÉTAT}
            </div>
          </div>
          <div className="detail-offer-part2">
            <div>
              <h2>{data.product_name}</h2>
            </div>
          </div>{" "}
          <Link
            to="/payement"
            state={{ title: data.product_name, price: data.product_price }}
            className="detail-offer-part3"
          >
            Acheter
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Product;
