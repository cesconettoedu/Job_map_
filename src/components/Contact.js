import React from 'react'
import Avatar from 'react-avatar';
import styled from 'styled-components';

function Contact() {


  return (
    <>
      <Wrapper>
        <div>
          <button> EDIT</button>
          <button> DELETE</button>
        </div>

        <h1>Jack Nicholson</h1>
      
        <div className='single' >
            <Avatar
              alt="contact photo"
              src='https://nudelmania.vteximg.com.br/arquivos/ids/187520-1000-1000/Caricatura-Preto---Branco---somente-Face---1-pessoa.jpg?v=637436337593070000'
              size="300"
              round={true}
            />
            
          <div className='nick'>
            <div>Link to LinkedIn</div>
            <br/>
            <div>Link to Github</div>
            <br/>
            <div>Link to ....</div>
            <br/>
            <div>Link to ....</div>
          </div>

        </div>
      </Wrapper>
    </>
  )
}

export default Contact

const Wrapper = styled.section`
h1{
  text-align: -webkit-center;
  color: #eff1e4;
  padding-top: 4vh;
}

.single{
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4vh;
  padding-bottom: 4vh;
}


`