
import { useState } from 'react'
import { Input, Button } from 'react-native-elements'
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
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#fff',
            justifyContent:'space-around',
            height: '50%'
        },
        form: {
            width: '100%',
            height: '70%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: COLORS.WHITE_SMOKE,
            borderWidth:2,
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
            width: '100%',
            justifyContent: 'center',
            height: 40,
            backgroundColor: COLORS.WHITE,
            marginVertical: 12,
        },
        loginButtonText: {
            fontSize: 18,
            fontFamily: 'open-sans-bold',
            textAlign: 'center',
            color: '#fff',
        },
        prompt: {
            alignItems: 'center',
            justifyContent:'space-around',
            height: '30%',
            padding: 10,
            paddingTop: 20,
        },
        promptMessage: {
            fontSize: 13,
            fontFamily: 'open-sans',
            color: COLORS.GRAY,
        },
        promptButton: {
            fontSize: 16,
            fontFamily: 'open-sans-bold',
            backgroundColor: COLORS.ALICE_BLUE
        },
        button: {
            backgroundColor: COLORS.ALICE_BLUE,
            marginVertical: 20,
        }
    })

export default SignInForm