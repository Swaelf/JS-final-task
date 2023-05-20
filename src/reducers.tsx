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

export const rootReducer = combineReducers({
  items: itemsReducer,
  search: searchReducer,
});