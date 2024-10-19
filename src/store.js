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
import loginSlice from "./features/userSlice/userSlice"
import motorcycleSlice from "./features/motorcycle/motorcycleSlice"

const rootReducer = combineReducers({
  user: loginSlice,
  motorcycle: motorcycleSlice,
})

const persistConfig = {
  key: "charlesMotorsRoot",
  storage,
  whitelist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
