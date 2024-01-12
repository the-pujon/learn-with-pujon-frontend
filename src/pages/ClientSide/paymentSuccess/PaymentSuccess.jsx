// In your frontend
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {removeAll} from '../../../Features/CartSlice/CartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
  // Replace with the actual path to your action

const SuccessfulPaymentEndpoint = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Payment Successful", { position: "top-right" });
    // Dispatch an action to remove all items from the cart when this endpoint is hit
    dispatch(removeAll());
    navigate("/");
  }, [dispatch]);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default SuccessfulPaymentEndpoint;
