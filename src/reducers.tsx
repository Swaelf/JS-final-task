import { combineReducers } from 'redux';
import { proteinInterface } from 'src/interfaces';

const proteinListReducer = (state: (proteinInterface | null)[] = [], action: any ) => {
  switch (action.type) {
    case 'SET_PROTEIN_LIST':
      return action.payload;
    case 'ADD_PROTEIN':
      return [...state, action.payload];
    default:
      return state;
  }
};

const searchReducer = (state: string = '', action: any ) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.payload;
    default:
      return state;
  }
};

const authInitial: object = { login: '', uid: '' };

const authReducer = (state: object = authInitial, action: any ) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return action.payload;
    default:
      return state;
  }
};

const currentPathReducer = (state: string = '/', action: any ) => {
  switch (action.type) {
    case 'SET_CURRENT_PATH':
      return action.payload;
    default:
      return state;
  }
};

const linkInitial: string = '';

const linkReducer = (state: string = linkInitial, action: any ) => {
  switch (action.type) {
    case 'UPDATE_LINK':
      return action.payload;
    default:
      return state;
  }
};

const proteinInitial: any = { 
  sequence: { value: '' }
};

const proteinReducer = (state: object = proteinInitial, action: any ) => {
  switch (action.type) {
    case 'SET_CURRENT_PROTEIN':
      return action.payload;
    default:
      return state;
  }
};

const loadStateInitial: boolean = false;

const loadStateReducer = (state: boolean = loadStateInitial, action: any ) => {
  switch (action.type) {
    case 'SET_LOAD_STATE':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  proteinList: proteinListReducer,
  search: searchReducer,
  auth: authReducer,
  protein: proteinReducer,
  link: linkReducer,
  currentPath: currentPathReducer,
  loading: loadStateReducer,
});