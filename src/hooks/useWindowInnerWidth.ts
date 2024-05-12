import {
    useContext,
} from "react";
import { WindowInnerWidthContext } from "../contexts/WindowInnerWidthContext";

export const useWindowInnerWidth = () => useContext(WindowInnerWidthContext);
