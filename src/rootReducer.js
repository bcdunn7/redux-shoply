import data from './data.json';
import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

const INITIAL_STATE = {
    products: data.products,
    cart: Object.keys(data.products).map(k => ({id: k, count: 0}))
};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, 
                cart: state.cart.map((item) => {
                    if (item.id === action.itemId) {
                        item.count += 1;
                        return item;
                    } else return item;
                })
            }

        case REMOVE_ITEM:
            return {...state, 
                cart: state.cart.map((item) => {
                    if (item.id === action.itemId) {
                        if (item.count > 0) {
                            item.count -= 1;
                        }
                        return item;
                    } else return item;
                })
            }

        default:
            return state;
    }
};

export default rootReducer;

