import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../store/actions/auth.action'

import SignInForm from '../components/SignInForm'

const LoginScreen = ({ navigation }) => {
    
    const dispatch = useDispatch()


    const handleLogin = (email, password) => dispatch(signIn(email, password))

    const handleNavigate = () => navigation.navigate('Register')

    return (
        <SignInForm 
            formTitle={'Ingresa en tu cuenta'}
            onSignIn={handleLogin}
            onNavigate={handleNavigate}
            buttonTitle={'Ingresar'}
            labelText={'¿No tienes una cuenta?'}
            navButtonTitle={'Registrate aqui'}
        />
    )
}

export default LoginScreen
