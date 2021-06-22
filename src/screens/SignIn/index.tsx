import React from 'react'

import * as S from './styles'

import IllustrationImg from '../../assets/illustration.png'

import { DiscordButton } from '../../components/DiscordButton'



export function SignIn(){
    return(
        <S.Container>
            <S.Image resizeMode="stretch" source={IllustrationImg}/>
            <S.Content>
                <S.Title>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </S.Title>
                <S.Subtitle>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </S.Subtitle>

                <DiscordButton/>
            </S.Content>
        </S.Container>
    )
}