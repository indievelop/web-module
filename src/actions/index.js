const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const USER = createRequestTypes('USER')
export const POST = createRequestTypes('POST')

export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE'
export const NAVIGATE =  'NAVIGATE'
export const LOAD_USER_PAGE = 'LOAD_USER_PAGE'
export const LOAD_POST_PAGE = 'LOAD_POST_PAGE'
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'


function action(type, payload = {}) {
  return { type, ...payload };
}

export const user = {
  request: id => action(USER[REQUEST], { id }),
  success: (id, response) => action(USER[SUCCESS], { id, response }),
  failure: (id, error) => action(USER[FAILURE], { id, error }),
}

export const post = {
  request: id => action(POST[REQUEST], { id }),
  success: (id, response) => action(POST[SUCCESS], { id, response }),
  failure: (id, error) => action(POST[FAILURE], { id, error }),
}

export const updateRouterState = state => action(UPDATE_ROUTER_STATE, {state})
export const navigate = pathname => action(NAVIGATE, {pathname})
export const loadUserPage = (id, requiredFields = []) => action(LOAD_USER_PAGE, { id, requiredFields });
export const loadPostPage = (id, requiredFields = []) => action(LOAD_POST_PAGE, { id, requiredFields });

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE)
