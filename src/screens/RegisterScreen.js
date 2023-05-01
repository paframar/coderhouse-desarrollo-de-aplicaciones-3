import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { signUp } from '../../store/actions/auth.action'
import SignInForm from '../components/SignInForm'

const RegisterScreen = ({ navigation }) => {
    
    const isAuthLoading = useSelector(state => state.auth.isAuthLoading)
    const buttonTitle = isAuthLoading ? 'Loading...' : 'Ingresar'

    const dispatch = useDispatch()

    const handleRegister = (email, password) => {
        dispatch(signUp(email, password))
    }

    const handleNavigate = () => navigation.navigate('Login')

    return (
        <SignInForm 
            formTitle={'Crea tu cuenta'}
            onSignIn={handleRegister}
            onNavigate={handleNavigate}
            buttonTitle={buttonTitle}
            labelText={'Si ya tienes una cuenta'}
            navButtonTitle={'Ingresa aqui'}
        />
    )
}
export default RegisterScreen
