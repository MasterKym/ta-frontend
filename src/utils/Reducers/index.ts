import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";

export const reducers =combineReducers({authReducer})
export type RootState = ReturnType<typeof reducers>;