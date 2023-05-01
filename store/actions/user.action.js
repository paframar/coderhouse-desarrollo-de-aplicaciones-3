export const CHANGE_USER_IMAGE = 'CHANGE_USER_IMAGE'

export const changeUserImage = (image) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({type: CHANGE_USER_IMAGE, payload: Path})
    }
} 