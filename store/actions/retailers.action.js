export const SELECT_RETAILER = 'SELECT_RETAILER'
export const GET_RETAILERS = 'GET_RETAILERS'

export const selectRetailer = (retailerId) => (
    {
        type: SELECT_RETAILER,
        payload: retailerId,
    }
)