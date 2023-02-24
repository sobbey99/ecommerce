import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px){
            ${props}
        }
    `
}

export const mobileMiddle = (props) => {
    return css`
        @media only screen and (max-width: 768px){
            ${props}
        }
    `
}

export const mobileStart = (props) => {
    return css`
        @media only screen and (max-width: 575px){
            ${props}
        }
    `
}