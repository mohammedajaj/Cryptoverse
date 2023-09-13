import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
        'X-RapidAPI-Key': '6c8222c00cmsh7275c2fab97050ep161072jsn164eb52e35d9',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
      
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
      
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
        }),
      });
      
      export const {
        useGetCryptosQuery,
        useGetCryptoDetailsQuery,
        useGetExchangesQuery,
        useGetCryptoHistoryQuery,
      } = cryptoAPI;