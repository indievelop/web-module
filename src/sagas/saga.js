/* eslint-disable no-constant-condition */
import { take, put, call, fork, select, all } from 'redux-saga/effects';
import { api, history } from '../services';
import * as actions from '../actions';
import { getUser, getPost } from '../reducers/selector';

// each entity defines 3 creators { request, success, failure }
const { user, post } = actions;

/***************************** Subroutines ************************************/

// resuable fetch Subroutine
// entity :  user | post
// apiFn  : api.fetchUser | api.fetchPost | ...
// id     : id | id
// url    : next page url. If not provided will use pass id to apiFn
function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) );
  const {response, error} = yield call(apiFn, url || id);
  if(response) {
    yield put( entity.success(id, response) );
  } else {
    yield put( entity.failure(id, error) );
  }
}

// yeah! we can also bind Generators
export const fetchUser = fetchEntity.bind(null, user, api.fetchUser);
export const fetchPost = fetchEntity.bind(null, post, api.fetchPost);

// load user unless it is cached
function* loadUser(id, requiredFields) {
  const user = yield select(getUser, id);
  if (!user || requiredFields.some(key => !user.hasOwnProperty(key))) {
    yield call(fetchUser, id);
  }
}

// load post unless it is cached
function* loadPost(id, requiredFields) {
  const post = yield select(getPost, id)
  if (!post || requiredFields.some(key => !post.hasOwnProperty(key)));
    yield call(fetchPost, id);
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// trigger router navigation via history
function* watchNavigate() {
  while(true) {
    const {pathname} = yield take(actions.NAVIGATE);
    yield history.push(pathname);
  }
}

// Fetches data for a User : user data
function* watchLoadUserPage() {
  while(true) {
    const {id, requiredFields = []} = yield take(actions.LOAD_USER_PAGE)

    yield fork(loadUser, id, requiredFields);
  }
}

// Fetches data for a Post: post data
function* watchLoadPostPage() {
  while(true) {
    const { id, requiredFields = [] } = yield take(actions.LOAD_POST_PAGE)

    yield fork(loadPost, id, requiredFields)
  }
}

export default function* root() {
  yield all([
    fork(watchNavigate),
    fork(watchLoadUserPage),
    fork(watchLoadPostPage),
  ])
}
