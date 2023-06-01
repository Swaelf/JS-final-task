import { loginInterface, proteinInterface } from "src/interfaces";

export interface stateInterface {
    proteinList: (proteinInterface|null)[],
    searchStr: string,
    auth: loginInterface,
    protein: proteinInterface,
    link: string,
    currentPath: string,
    loading: boolean,
  }