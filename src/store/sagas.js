import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_thfjhfk_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thfjhfk_list, action)
    yield put(actions.api_v1_thfjhfk_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thfjhfk_listFailed(err))
  }
}
function* api_v1_thfjhfk_listWatcher() {
  yield takeEvery(types.API_V1_THFJHFK_LIST, api_v1_thfjhfk_listWorker)
}
function* api_v1_thfjhfk_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thfjhfk_create, action)
    yield put(actions.api_v1_thfjhfk_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thfjhfk_createFailed(err))
  }
}
function* api_v1_thfjhfk_createWatcher() {
  yield takeEvery(types.API_V1_THFJHFK_CREATE, api_v1_thfjhfk_createWorker)
}
function* api_v1_thfjhfk_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thfjhfk_read, action)
    yield put(actions.api_v1_thfjhfk_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thfjhfk_readFailed(err))
  }
}
function* api_v1_thfjhfk_readWatcher() {
  yield takeEvery(types.API_V1_THFJHFK_READ, api_v1_thfjhfk_readWorker)
}
function* api_v1_thfjhfk_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thfjhfk_update, action)
    yield put(actions.api_v1_thfjhfk_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thfjhfk_updateFailed(err))
  }
}
function* api_v1_thfjhfk_updateWatcher() {
  yield takeEvery(types.API_V1_THFJHFK_UPDATE, api_v1_thfjhfk_updateWorker)
}
function* api_v1_thfjhfk_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thfjhfk_partial_update, action)
    yield put(actions.api_v1_thfjhfk_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thfjhfk_partial_updateFailed(err))
  }
}
function* api_v1_thfjhfk_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_THFJHFK_PARTIAL_UPDATE,
    api_v1_thfjhfk_partial_updateWorker
  )
}
function* api_v1_thfjhfk_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_thfjhfk_delete, action)
    yield put(actions.api_v1_thfjhfk_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_thfjhfk_deleteFailed(err))
  }
}
function* api_v1_thfjhfk_deleteWatcher() {
  yield takeEvery(types.API_V1_THFJHFK_DELETE, api_v1_thfjhfk_deleteWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(actions.rest_auth_password_reset_confirm_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_confirm_createFailed(err))
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(result)
    )
  } catch (err) {
    yield put(actions.rest_auth_registration_verify_email_createFailed(err))
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_login_createWatcher,
    api_v1_signup_createWatcher,
    api_v1_thfjhfk_listWatcher,
    api_v1_thfjhfk_createWatcher,
    api_v1_thfjhfk_readWatcher,
    api_v1_thfjhfk_updateWatcher,
    api_v1_thfjhfk_partial_updateWatcher,
    api_v1_thfjhfk_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
