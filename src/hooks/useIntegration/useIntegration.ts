import { useState, useCallback } from "react";
import axios, { Method } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UseIntegrationResult {
  get: (url: string) => Promise<void>;
  post: (url: string, body: object) => Promise<void>;
  put: (url: string, body: object) => Promise<void>;
  del: (url: string) => Promise<void>;
  data: object | null;
}

const useIntegration = (): UseIntegrationResult => {
  const [data, setData] = useState<object | null>(null);

  const request = useCallback(
    async (method: Method, url: string, body: object = {}): Promise<void> => {
      const promise = axios({
        method,
        url,
        data: body,
      });

      toast.promise(promise, {
        pending: "Loading...",
        success: "Request successful!",
        error: "Request failed!",
      });

      try {
        const response = await promise;
        setData(response.data);
      } catch (err) {
        throw err;
      }
    },
    []
  );

  const get = useCallback((url: string) => request("GET", url), [request]);
  const post = useCallback(
    (url: string, body: object) => request("POST", url, body),
    [request]
  );
  const put = useCallback(
    (url: string, body: object) => request("PUT", url, body),
    [request]
  );
  const del = useCallback((url: string) => request("DELETE", url), [request]);

  return { get, post, put, del, data };
};

export default useIntegration;
