import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({theme})=>theme.colors.primary};
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
`

export const IconContainer = styled.View`
    height: 56px;
    width: 56px;
    align-items: center;
    justify-content: center;
    border-right-width: 1px;
    border-right-color: ${({theme})=>theme.colors.line};
`

export const Image = styled.Image`

`

export const Text = styled.Text`
    flex: 1;
    text-align: center;
    color: ${({theme})=>theme.colors.heading};
`