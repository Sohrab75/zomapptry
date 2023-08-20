import React from 'react'
import FooterStyled from './FooterStyled'

const Footer = () => {
  return (
    <>
    <FooterStyled>
        <ul className='list-unstyled'>
            <li className='list-item'>Home</li>
            <li className='list-item'>About</li>
            <li className='list-item'>Info</li>
            <li className='list-item'>Policy</li>
            <li className='list-item'>Know More</li>
        </ul>
    </FooterStyled>
    </>
  )
}

export default Footer