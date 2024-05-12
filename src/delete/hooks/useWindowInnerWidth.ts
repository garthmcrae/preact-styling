import {
    useContext,
} from "preact/hooks";
import { WindowInnerWidthContext } from "../contexts/WindowInnerWidthContext";

export const useWindowInnerWidth = () => useContext(WindowInnerWidthContext);
