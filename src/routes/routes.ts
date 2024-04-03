export const ROUTES = {
  SIGN_IN: () => `/auth/sign-in`,
  HOME: () => `/`,
  BLOG: {
    PAGE: () => `/blog`,
    NEW_BLOG: () => `/blog/new-blog`,
  },
  MASTER_DATA: {
    CATEGORIES: () => `/master-data/categories`,
    BRAND: () => `/master-data/brand`,
    TAG: () => `/master-data/tag`,
  },
};
