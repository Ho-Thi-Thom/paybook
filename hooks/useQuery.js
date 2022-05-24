import client from "../sanity/config";
import { useEffect, useState, useCallback } from "react";

const useQuery = (query, params = {}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      const data = await client.fetch(query, params);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, []);

  return { data, loading, refetch };
};

export default useQuery;
