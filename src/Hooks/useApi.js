import { useState, useEffect } from 'react';
import toast from "react-hot-toast"

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
    let loadingToast

    try {
      if (method === 'PUT' || method === 'POST' || method === 'DELETE') {
         loadingToast = toast.loading('Wait...', { position: 'top-right' });
      }

      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error Data:', errorData.error); // Log the entire error data
        throw new Error(errorData.error || 'HTTP error');
      }

      const result = await response.json();
      setData(result);

      switch (method) {
        case 'PUT':
          toast.dismiss(loadingToast.id);
          toast.success('Successfully Updated!', { position: 'top-right', duration: 2000 });
          break;

        case 'POST':
          toast.dismiss(loadingToast.id);
          toast.success('Successfully Created!', { position: 'top-right', duration: 2000 });
          break;

        case 'DELETE':
          toast.dismiss(loadingToast.id);
          toast.success('Successfully Deleted!', { position: 'top-right', duration: 2000 });
          break;
        default:
          break;
      }

      return result; // Return the response
    } catch (error) {
      setError(error.message || 'Something went wrong.');
      console.log(error.message)

      if (method === 'PUT' || method === 'POST' || method === 'DELETE') {
        toast.dismiss(loadingToast.id);
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
