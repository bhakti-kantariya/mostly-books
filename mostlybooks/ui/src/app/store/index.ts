import { MetaReducer } from '@ngrx/store';

/**
 * Every reducer's defualt export is the reducer function itself. In addition,
 * each module should export a type or interface that describes the state
 * of the reducer plus any selector functions. The '* as' notation packages up all
 * the exports into single object.
 */
import * as fromRouter from '@ngrx/router-store';
import * as fromViewBooks from '../store/reducers/view-books.reducer';

/**
 * We treat each reducer like a table in a database. This means 
 * our top level state interface is just a map of keys to inner state types.
 */
 export interface State {
    router: fromRouter.RouterReducerState,
    viewBooks : fromViewBooks.State
 }

 /**
  * All reducers go here so that we can configure them together in root module
  */
export const reducers = {
    router: fromRouter.routerReducer,
    viewBooks: fromViewBooks.reducer
}

/**
 * Meta reducers if any go here. We need them for debugging purpose only.
 */
export const metaReducers: MetaReducer<State>[] = [];

/**
 * Router state
 * @param state The application state
 */
export const routerState = (state: State) => state.router;