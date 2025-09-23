const useUtility = () => {
  const sleep = (ms = 1500) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return { sleep };
};

export default useUtility;
