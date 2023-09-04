
import axios from 'axios';
import { useQuery } from 'react-query';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

  export const fetchGenericData = async (endpoint) => {
    const response = await axiosInstance.get(endpoint);
    return response.data;
};

  export const useGenericQuery = (queryKey, endpoint) => {
    return useQuery(queryKey, () => fetchGenericData(endpoint));
};