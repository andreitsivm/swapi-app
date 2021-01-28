import { put, takeEvery, call } from "redux-saga/effects";
import { Api } from "api";
import { saveCharacters } from "./people";

function* fetchCharacters(action) {
  try {
    const characters = yield call(Api.getCharacters);
    yield put(saveCharacters(characters.data.results));
  } catch (e) {}
}

function* mySaga() {
  yield takeEvery("FETCH_CHARACTERS", fetchCharacters);
}

export default mySaga;
