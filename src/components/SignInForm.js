
import { useState } from 'react'
import { Button } from '@react-native-material/core'
import { Input } from 'react-native-elements'
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { COLORS } from '../constants/colors'

const SignInForm = ({ formTitle, labelText, onSignIn, onNavigate, buttonTitle, navButtonTitle}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = () => onSignIn(email, password)

    return (

        <View>
            
            <View style={styles.form}>

                <Text style={styles.title}>{formTitle}</Text>
                
                <Input 
                    id="inputEmail"
                    placeholder="Email" 
                    onChangeText={(val)=> setEmail(val.toLowerCase()) }
                    autoCapitalize='none'
                />
                <Input 
                    id="inputPassword"
                    placeholder="Password" 
                    secureTextEntry={true} 
                    onChangeText={(val)=> setPassword(val) }
                    autoCapitalize='none'
                />
                <Button
                    style={styles.loginButton}
                    title={buttonTitle}
                    onPress={handleSignIn}
                />

            </View>


            <View style={styles.prompt}>
                <Text style={styles.promptMessage}>
                    {labelText}
                </Text>
                <Button
                    style={styles.promptButton}
                    title={navButtonTitle}
                    onPress={onNavigate}
                />
            </View>

        </View>

    )
}


    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 24,
            fontFamily: 'open-sans-bold',
            marginBottom: 12,
            textAlign: 'center',
        },
        container: {
            width: '80%',
            maxWidth: 400,
            padding: 12,
            margin: 12,
            justifyContent:'space-around',
            alignItems:'center',
            height: '50%'
        },
        form: {
            width: '100%',
            height: '70%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        label: {
            fontSize: 16,
            fontFamily: 'open-sans'
        },
        textInput: {
            width: '100%',
            height: 40,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 12,
        },
        loginButton: {
            justifyContent: 'center',
            height: '10%',
            width: '60%',
            backgroundColor: COLORS.DODGER_BLUE,
            marginVertical: 12,
        },
        loginButtonText: {
            fontSize: 18,
            fontFamily: 'open-sans-bold',
            textAlign: 'center',
            color: '#fff',
        },
        prompt: {
            justifyContent:'center',
            alignItems: 'center',
            width: '100%',
            height: '18%',
            backgroundColor:COLORS.WHITE_SMOKE,
            borderBottomWidth:1,
            borderTopWidth:1,
        },
        promptMessage: {
            fontSize: 13,
            paddingBottom: 5,
            fontFamily: 'open-sans',
            color: COLORS.GRAY,
            justifyContent: 'space-between',
        },
        promptButton: {
            fontSize: 12,
            fontFamily: 'open-sans-bold',
            width: '60%',
            backgroundColor: COLORS.SILVER,
        },
    })

export default SignInForm