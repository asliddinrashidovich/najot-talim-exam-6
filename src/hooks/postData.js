import { useState } from "react";
import axios from "axios";

const usePostData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (newData) => {
    setLoading(true);
    try {
      const response = await axios.post(url, newData);
      console.log(response)
      localStorage.setItem('token', JSON.stringify(response.data.accessToken))
      return response.data;
    } catch (err) {
      console.log(err)
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};

export default usePostData;
