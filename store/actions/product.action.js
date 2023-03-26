export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTER_PRODUCT = 'FILTER_PRODUCT'

export const selectProduct = (productID) => (
    {
        type: SELECT_PRODUCT,
        payload: productID,
    }
)

export const filterProducts = (categoryID) => (
    {
        type: FILTER_PRODUCT,
        payload: categoryID,
    }
)