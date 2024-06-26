import React from 'react'

const Nav = () => {
    var x= 100;
  return (
    <>
    <ul>
        <li>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#"> extra code{x}</a>
        </li>
    </ul>
    </>
  )
}

export default Nav
// benifits of jsx extension
// ****** ui and dynamic code both in one file********
// support jsx extension for dynamic coding inside markup or ui {}
// its indicate user define components