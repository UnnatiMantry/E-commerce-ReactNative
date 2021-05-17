import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.rating === 4)
};

export default (state = initialState, action) => {
    return state;
};