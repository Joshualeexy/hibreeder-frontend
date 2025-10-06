const utility = () => {
  const sleep = (ms = 1500) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };


  const normalizeEndpoint = (_endpoint: string) => {
    return _endpoint.startsWith('/') ? _endpoint : `/${_endpoint}`
  }

  const getOrigin = (original: boolean = true) => {
    const origin = `${window.location.protocol}//${window.location.hostname}:${import.meta.env.VITE_API_PORT}`
    return original ? `${origin}/api` : origin;
  }

  return { sleep, normalizeEndpoint, getOrigin };
};

export default utility;
