import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2  from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  rehydrated: false
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { store, persistor }
}
