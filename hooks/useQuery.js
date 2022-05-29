import client from "../sanity/config";
import { useEffect, useState, useCallback } from "react";

const useQuery = (query, options = {}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [params, setParams] = useState(options);

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
  }, [params]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, setParams };
};

export default useQuery;
