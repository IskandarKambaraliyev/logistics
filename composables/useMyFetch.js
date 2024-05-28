export const useMyFetch = async (request, opts) => {
  const config = useRuntimeConfig();
  return await useFetch(() => `/api${request}`, {
    baseURL: config.public.baseURL,
    onResponse({ request, response }) {
      // console.log(request);
      // console.log(response);
    },
    ...opts,
  });
};
