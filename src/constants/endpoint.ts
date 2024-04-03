export const ENDPOINT = {
  SIGN_IN: () => `/auth/sign-in`,
  MASTER_DATA: {
    LIST_ALL_BRAND: () => `/master-data/brand/list`,
    CREATE_BRAND: () => `/master-data/brand/new`,
    LIST_CATEGOEIS: () => `/master-data/category/list`,
    CREATE_CATEGORY: () => `/master-data/category/new`,
  },
};
