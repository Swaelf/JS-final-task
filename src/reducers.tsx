import { combineReducers } from 'redux';

const initialState: any = [{
  primaryAccession: '',
  uniProtkbId: '',
  genes: [{geneName: {value: 'AFF'}, synonyms: [{value: 'TTR'}, {value: 'TFR'}]}],
  organism: {scientificName: 'temp'},
  sequence: {accession: '', length: 14},
  comments: [
    {subcellularLocations: [
      {location: {value: 'location'}}, 
      {location: {value: 'location2'}} 
      ]}
    ]
}];

const itemsReducer = (state: any = initialState, action: any ) => {
  switch (action.type) {
    case 'UPDATE_ITEMS':
      return action.payload;
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
};

const initialSearch: string = '';

const searchReducer = (state: string = initialSearch, action: any ) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.payload;
    default:
      return state;
  }
};

const initialLogin: string = '';

const authReducer = (state: string = initialLogin, action: any ) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return action.payload;
    case 'AUTH_LOGOUT':
      return '';
    default:
      return state;
  }
};

const initialEntry: string = '';

const entryReducer = (state: string = initialEntry, action: any ) => {
  switch (action.type) {
    case 'UPDATE_ENTRY':
      return action.payload;
    default:
      return state;
  }
};

const initialLink: string = '';

const linkReducer = (state: string = initialLink, action: any ) => {
  switch (action.type) {
    case 'UPDATE_LINK':
      return action.payload;
    default:
      return state;
  }
};

const initialProtein: any = { 
  sequence: { value: '' }
};

const proteinReducer = (state: string = initialProtein, action: any ) => {
  switch (action.type) {
    case 'SET_PROTEIN':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  items: itemsReducer,
  search: searchReducer,
  auth: authReducer,
  entry: entryReducer,
  protein: proteinReducer,
  link: linkReducer,
});