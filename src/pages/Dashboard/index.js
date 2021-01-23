import React,{useContext} from 'react'
import {Wrapper,Button,ButtonText} from './style'

import AuthContext from '../../contexts/auth'
export default function Dashboard(){

    const {signed,user,signOut} = useContext(AuthContext)

    function handleSignOut(){
        signOut()
    }

    return(
        <Wrapper>
            <Button onPress={handleSignOut}>
                <ButtonText>Sign Out</ButtonText>
            </Button>
        </Wrapper>
    )
}

