import { combineReducers } from 'redux';
import BooksReducer from '../reducers/reducer_books';
import ActiveBook from "./reducer_activeBook";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
