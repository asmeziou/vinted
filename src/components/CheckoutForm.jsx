import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

import { useState } from "react";

const CheckoutForm = ({ title, amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleError = (error) => {
    setIsLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);

    const submitResponse = await elements.submit();
    if (submitResponse.error) {
      handleError(submitResponse.error);
      return;
    }
    // équivaut à :
    // const {error: submitError} = await elements.submit();
    // if (submitError) {
    //       handleError(submitError);
    //       return;
    // }

    try {
      // Create the PaymentIntent and obtain clientSecret
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
        {
          title: title,
          amount: amount, // le prix indiquée dans l'annonce
        },
      );

      const { client_secret: clientSecret } = response.data;
      console.log(response.data); //"pi_3TgRk3DVswqktOkX1B52HKuL_secret_fkCwtclvRdDscLzI7L2iDYr9R"

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          // return_url: "http://localhost:5173/",
          return_url: "https://vinted-sage.vercel.app/",
        },

        redirect: "if_required",
      });

      if (error) {
        // This point is only reached if there's an immediate error when
        // confirming the payment. Show the error to your customer (for example, payment details incomplete)
        handleError(error);
      } else {
        setComplete(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return complete ? (
    <p>Paiement effectué ! Félicitations !</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe || isLoading}>Payer</button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
