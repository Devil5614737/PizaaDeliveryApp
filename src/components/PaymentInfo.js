import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentInfo = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    city: "",
    line1: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    stripe
      .confirmCardPayment(
        "sk_test_51K6viUSEi48qcQQWAQ5gQFyw9EyU26d4YB8ucVG2eCo1lrsuVAlOgMKUOJFnlznebfqMBGS0AWkJ9RKTmu1DSD6700VwVek6g3",
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "Jenny Rosen",
            },
          },
        }
      )
      .then(function (result) {
        // Handle result.error or result.paymentIntent
      });
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/cart",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const paymentCard = {
    boxShadow: "10px 10px 10px rgba(0,0,0,.1)",
    width: "400px",
    height: "600px",
    backgroundColor: "white",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    padding: "1.3em 3em",
  };

  // const billingDetails={
  //     name:values.name,
  //     email:values.email,
  //     address:{
  //         city:values.city,
  //         line1:values.line1,
  //         state:values.state,
  //         postal_code:values.postalCode
  //     }
  // }

  return (
    <div
      className="payment-container"
      style={{
        widht: "100vw",
        backgroundColor: "rgba(0,0,0,.7)",
        height: "100vh",
        position: "relative",
        marginTop: "-607px",
        zIndex: 1,
      }}
    >
      <div style={paymentCard} className="payment-card">
        <label
          style={{ display: "block", fontWeight: 500, fontSize: "1.2rem" }}
          htmlFor=""
        >
          Name
        </label>
        <input
          name="name"
          onChange={handleChange}
          value={values.name}
          style={{
            display: "block",
            fontWeight: 500,
            fontSize: "1.4rem",
            width: "100%",
            marginBottom: "12px",
            height: "40px",
            paddingLeft: ".3em",
          }}
          type="text"
        />
        <label
          style={{ display: "block", fontWeight: 500, fontSize: "1.2rem" }}
          htmlFor=""
        >
          Email
        </label>
        <input
          name="email"
          onChange={handleChange}
          value={values.email}
          style={{
            display: "block",
            fontWeight: 500,
            fontSize: "1.4rem",
            width: "100%",
            marginBottom: "12px",
            height: "40px",
            paddingLeft: ".3em",
          }}
          type="text"
        />
        <label
          style={{ display: "block", fontWeight: 500, fontSize: "1.2rem" }}
          htmlFor=""
        >
          City
        </label>
        <input
          name="city"
          onChange={handleChange}
          value={values.city}
          style={{
            display: "block",
            fontWeight: 500,
            fontSize: "1.4rem",
            width: "100%",
            marginBottom: "35px",
            height: "40px",
            paddingLeft: ".3em",
          }}
          type="text"
        />
        <label
          style={{ display: "block", fontWeight: 500, fontSize: "1.2rem" }}
          htmlFor=""
        >
          Line1
        </label>
        <input
          name="line1"
          onChange={handleChange}
          value={values.line1}
          style={{
            display: "block",
            fontWeight: 500,
            fontSize: "1.4rem",
            width: "100%",
            marginBottom: "35px",
            height: "40px",
            paddingLeft: ".3em",
          }}
          type="text"
        />
        <label
          style={{ display: "block", fontWeight: 500, fontSize: "1.2rem" }}
          htmlFor=""
        >
          State
        </label>
        <input
          name="state"
          onChange={handleChange}
          value={values.state}
          style={{
            display: "block",
            fontWeight: 500,
            fontSize: "1.4rem",
            width: "100%",
            marginBottom: "35px",
            height: "40px",
            paddingLeft: ".3em",
          }}
          type="text"
        />
        <label
          style={{ display: "block", fontWeight: 500, fontSize: "1.2rem" }}
          htmlFor=""
        >
          Postal Code
        </label>
        <input
          name="postalCode"
          onChange={handleChange}
          value={values.postalCode}
          style={{
            display: "block",
            fontWeight: 500,
            fontSize: "1.4rem",
            width: "100%",
            marginBottom: "35px",
            height: "40px",
            paddingLeft: ".3em",
          }}
          type="text"
        />

        <form onSubmit={handleSubmit}>
          <CardElement />
          <button
            disabled={!stripe}
            style={{
              width: "100%",
              height: "40px",
              fontSize: "2rem",
              cursor: "pointer",
              marginBottom: "42px",
            }}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentInfo;
