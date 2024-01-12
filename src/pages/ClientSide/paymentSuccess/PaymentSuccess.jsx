import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {removeAll} from '../../../Features/CartSlice/CartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SuccessfulPaymentEndpoint = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Payment Successful", { position: "top-right" });
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
