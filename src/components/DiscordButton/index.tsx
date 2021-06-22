import React from 'react'

import * as S from './styles'

import DiscordImg from '../../assets/discord.png'

export const DiscordButton: React.FC = () => {
    return(
        <S.Container activeOpacity={0.8}>
            <S.IconContainer>
                <S.Image source={DiscordImg}/>
            </S.IconContainer>
            <S.Text>
                Entrar com Discord
            </S.Text>
        </S.Container>
    )
}