import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useClasses from "../../Hooks/useClasses";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);
const PaymentPage = () => {
  const { id } = useParams();
  console.log(id);
  const [selectedCourses] = useClasses()
  const {price} = selectedCourses.find(sc=>sc?.courseId==id)
  const course = selectedCourses.find(sc=>sc?.courseId==id)
  console.log(course);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} course={course}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
