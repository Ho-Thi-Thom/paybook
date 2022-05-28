import { useCallback, useState } from "react";
import { client } from "~/sanity/config";

const useMutation = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  const mutation = useCallback(async (operations = {}) => {
    try {
      setLoading(true);
      const res = await client.mutate([operations]);
      setData(res);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return [mutation, { data, loading, error }];
};

export default useMutation;
