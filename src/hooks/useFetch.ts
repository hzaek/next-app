import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<T | null>(null);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      fetch(url)
        .then((response) => {
          
          if (!response.ok) {
            
            throw new Error("Failed to fetch data");
          }
          return response.json()
        })
        .then((data) => {
          
          setData(data);
        })
        .catch((error) => {
          setIsError(true);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
          
        });
    }, [url]);
  
    return { isLoading, data,isError };
  }
  