import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../../redux/redux-store";




export const currentTypeSelector: TypedUseSelectorHook<rootState> =useSelector