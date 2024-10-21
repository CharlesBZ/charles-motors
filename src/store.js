import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants"
import authReducer from "./features/auth/authSlice"
import motorcycleSlice from "./features/motorcycle/motorcycleSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  motorcycle: motorcycleSlice,
})

const persistConfig = {
  key: "auth",
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedAuthReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
