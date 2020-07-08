import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity'
import { Book, Books } from 'src/app/models/view-books.model';
import * as actions from '../actions/view-books.action';

export interface State extends EntityState<any> { }

export const adapter: EntityAdapter<Books> = createEntityAdapter<Books>({
    selectId: books => books.tabId
})

/**
 * Initial State
 */
export const INITIAL_STATE: State = adapter.getInitialState({

})

export function reducer(state: State = INITIAL_STATE, action: actions.Actions) {
    if (!action) { return state; }
    switch (action.type) {
        case actions.ActionTypes.GET_BOOKS_SUCCESS:
            state = adapter.removeOne(action.payload.tabId, state);
            return adapter.addOne(action.payload, state);
        case actions.ActionTypes.GET_BOOKS_FAIL:
            return state;
        default:
            return state;
    }
}

//get the selectors
const {
    selectAll
} = adapter.getSelectors();

export const viewBooks = selectAll;