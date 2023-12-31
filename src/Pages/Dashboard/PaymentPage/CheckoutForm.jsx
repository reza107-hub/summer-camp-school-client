import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
const CheckoutForm = ({ price, course }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    if (price > 0) {
      axios
        .post(
          " https://summer-camp-school-server-roan.vercel.app/create-payment-intent",
          { price }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      Swal.fire({
        title: "Payment Successful",
        text: `transactionId: ${paymentIntent.id}`,
        icon: "success",
        confirmButtonText: "OK",
      });
      const payment = {
        email: user?.email,
        transaction_Id: paymentIntent.id,
        price,
        item: course?._id,
        courseName: course?.courseName,
        courseId: course?.courseId,
        courseImage: course?.courseImage,
        instructorName: course?.instructorName,
        instructorId: course?.instructorId,
        availableSeats: course?.availableSeats,
        enrolledStudents: course?.enrolledStudents,
        date: new Date(),
      };
      axios
        .post(
          " https://summer-camp-school-server-roan.vercel.app/payments",
          payment
        )
        .then((res) => {
          console.log(res);
        });
    }
  };
  return (
    <div>
      <form className="w-[500px] form" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn button btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
