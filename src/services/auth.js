export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token:'hsdgfuihsdg65fhd8h7524fg',
                user:{
                    nome:'Luiz',
                    email:'luiz@hotmail.com.br'
                }
            })
        },2000)
    })
}