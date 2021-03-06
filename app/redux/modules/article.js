import { CALL_API } from 'redux-api-middleware';

export const ARTICLE_REQUEST = 'ARTICLE_REQUEST';
export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS';
export const ARTICLE_FAILURE = 'ARTICLE_FAILURE';

const API_ROOT = 'http://m.cnyes.com/api/v2';

export function fetchArticle(id) {
  console.log('url', `${API_ROOT}/news/${id}?isMobile=1`);
  return {
    [CALL_API]: {
      endpoint: `${API_ROOT}/news/${id}?isMobile=1`,
      method: 'GET',
      types: [ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE]
    }
  };
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return {
        loading: true,
      };
    case ARTICLE_SUCCESS:
      return { ...action.payload.items, loading: false };
    case ARTICLE_FAILURE:
      return { error: true, message: action.payload.message, loading: false };
    default:
      return state;
  }
}
