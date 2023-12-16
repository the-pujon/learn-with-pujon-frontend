import { useState, useEffect } from 'react';
import toast from "react-hot-toast"
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const useApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = `http://localhost:5000/api`;

  const headers = {
    'Content-Type': 'application/json',
    //...(jwtToken && { Authorization: `Bearer ${jwtToken}` }),
  };

  const fetchData = async (url, method, body = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });

      //if (!response.ok) {

      //  throw new Error(`HTTP error! Status: ${response.status}`);
      //}

      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error Data:', errorData.error); // Log the entire error data
        throw new Error(errorData.error || 'HTTP error');
      }

      const result = await response.json();
      setData(result);

      // Show success toast for PUT
      if (method === 'PUT') {
        toast.success('Successfully Updated!', { position: 'top-right', duration: 2000 });
      }

      // Show success toast for POST
      if (method === 'POST') {
        toast.success('Successfully Created!', { position: 'top-right', duration: 2000 });
      }

      // Show success toast for DELETE
      if (method === 'DELETE') {
        toast.success('Successfully Deleted!', { position: 'top-right', duration: 2000 });
      }

      return result; // Return the response
    } catch (error) {
      setError(error.message || 'Something went wrong.');
      console.log(error.message)

      // Show error toast for PUT
      if (method === 'PUT') {
        toast.error(`${error.message}`, { position: 'top-right', duration: 5000 });
      }

      // Show error toast for POST
      if (method === 'POST') {
        toast.error(`${error.message}`, { position: 'top-right', duration: 5000 });
      }

      // Show error toast for DELETE
      if (method === 'DELETE') {
        toast.error(`${error.message}`, { position: 'top-right', duration: 5000 });
      }

      throw error; // Re-throw the error to propagate it to the calling component
    } finally {
      setLoading(false);
    }
  };

  const get = (endpoint) => fetchData(`${apiUrl}/${endpoint}`, 'GET');

  const post = (endpoint, body) => fetchData(`${apiUrl}/${endpoint}`, 'POST', body);

  const put = (endpoint, body) => fetchData(`${apiUrl}/${endpoint}`, 'PUT', body);

  const del = (endpoint) => fetchData(`${apiUrl}/${endpoint}`, 'DELETE');

  useEffect(() => {
    // You can add any default fetch or initialization logic here
  }, []);

  return {
    data,
    error,
    loading,
    get,
    post,
    put,
    del,
  };
};

export default useApi;
