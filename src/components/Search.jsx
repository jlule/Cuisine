import React from 'react';
import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';


 function Search() {
  return (
    <FormStyle>
        <div>
        <FaSearch></FaSearch>
        <input type="text"/>
        </div>

    
        
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    
    div {
        poistion: relative;
        width: 100%;
    }
    
    input {
        border: none;
        background: linear-gradient( 35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white; padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width:100%;
    }

    svg {
         position: absolute;
         top: 1%;
         left: 50%;
         transform: translate(100%, -50%);
         color: red;
    }

`

export default Search;