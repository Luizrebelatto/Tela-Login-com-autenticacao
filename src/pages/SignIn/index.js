import React, {useContext} from 'react'
import AuthContext from '../../contexts/auth'
import {Wrapper,Button,TextButton,Input,InputTitle,ViewInput,ImgUser} from './style'

export default function SignIn(){
    const {signed,signIn} = useContext(AuthContext);

    function handleSignIn(){
        signIn();
    }

    return(
        <Wrapper>
            <ImgUser source={require('../../Images/user.png')}/>

            <ViewInput>
                <InputTitle>Name:</InputTitle>
                <Input/>
            </ViewInput>

            <ViewInput>
                <InputTitle>Password:</InputTitle>
                <Input/>
            </ViewInput>
            
            <Button onPress={handleSignIn}>
                <TextButton>Sign In</TextButton>
            </Button>
        </Wrapper>
    )
}