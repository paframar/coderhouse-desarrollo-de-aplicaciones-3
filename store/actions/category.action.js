export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const selectCategory = (categoryID) => (
    {
        type: SELECT_CATEGORY,
        payload: categoryID,
    }
)