import { NAME } from "./constants";
import { NAME as PARENT_NAME } from "../constants";

export const getAll = state => state[PARENT_NAME][NAME];
