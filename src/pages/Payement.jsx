import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

import { useLocation, Navigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP",
);

const Payement = () => {
  const location = useLocation();

  // sécurité si l'utilisateur arrive directement sur /payment
  if (!location.state) {
    return <Navigate to="/" />;
  }
  const { title, price } = location.state;
  const amount = Math.round(price * 100);

  const options = {
    mode: "payment",
    amount: amount, // le montant est en centimes (100 minimum)
    currency: "eur",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <div>
      <h2>Paiement</h2>
      <p>Article : {title}</p>
      <p>Prix : {price} €</p>

      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm title={title} amount={amount} />
      </Elements>
    </div>
  );
};
export default Payement;
