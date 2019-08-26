const axios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    create: () => axios,
    defaults: {
      request: {},
    },
  };
  
  export default axios;