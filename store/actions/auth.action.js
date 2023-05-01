import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN, URL_AUTH_SIGN_OUT } from "../../src/constants/database"
import { Alert } from "react-native"
export const SIGN_UP = "SIGN_UP"
export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: "SIGN_UP_START"
            })
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });

            if(!response.ok) {
                dispatch({
                    type: "SIGN_UP_FAIL"
                })
                const errorResData = await response.json();
                const errorId = errorResData.error.message;
                let message = `No se pudo registrar. ${errorId}`;

                if (errorId === 'EMAIL_EXISTS') {
                    message = 'Este email ya existe!';
                }
                throw new Error(message);
            }

            const data = await response.json();

            dispatch({
                type: SIGN_UP,
                payload: {
                    token: data.idToken,
                    userId: data.localId,
                    userEmail: email,
                }
            })
        } catch (error) {
            dispatch({
                type: "SIGN_UP_FAIL"
            })
            alert(error);
        }
    }
}

export const signOut = () => {
    return async dispatch => {
        try {
        dispatch({
            type: SIGN_OUT,
        });
        await fetch(URL_AUTH_SIGN_OUT, {
            method: 'DELETE',
        });
        } catch (error) {
        console.error('Error al cerrar la sesión', error);
        }
    }
};

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
                }),
            });
            
            if (!response.ok) {
                const errorResData = await response.json();
                const errorId = errorResData.error.message;
                let message = `No se pudo iniciar sesión. ${errorId}`;
            
                if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'No se encontró una cuenta con esta dirección de correo electrónico';
                } else if (errorId === 'INVALID_PASSWORD') {
                message = 'La contraseña no es válida';
                }
                Alert.alert('Error', message)
                return
            }

            
            const data = await response.json();

            const action = {
                type: SIGN_IN,
                payload: {
                    token: data.idToken,
                    userId: data.localId,
                    userEmail: email,
                }
            }

            dispatch(action)

        } catch (error) {
            console.error('Error al iniciar la sesión', error);
        }
    }
  };