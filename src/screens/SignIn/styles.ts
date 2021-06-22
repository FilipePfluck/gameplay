import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.colors.background};
`

export const Image = styled.Image`
    width: 100%;
    height: 360px;
`

export const Content = styled.View`
    margin-top: -64px;
    padding: 24px;
`

export const Title = styled.Text`
    color: ${({theme})=>theme.colors.heading};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
`

export const Subtitle = styled.Text`
    color: ${({theme})=>theme.colors.heading};
    text-align: center;
    font-size: 16px;
    margin-bottom: 64px;
`