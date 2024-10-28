const ApiEndpoint = {
  REGISTER: `/register`,
  LOGIN: `/login`,

  GET_ALL_STORIES: `/stories`,
  STORE_STORY: `/stories`,
  GET_STORY_BY_ID: (id) => `/stories/${id}`,
};

export default ApiEndpoint;
