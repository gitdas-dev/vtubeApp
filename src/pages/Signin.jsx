import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme}) => theme.text}
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 65px;
    gap: 10px;
`
const Title = styled.h1`
    font-size: 24px;

`
const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
`
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`
const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`
const More = styled.div`
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    color: ${({theme}) => theme.textSoft}
`
const Links = styled.div`
    margin-left: 50px;
`
const Link = styled.span`
    margin-left: 30px;
`

const Signin = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:5000/api/auth/signin", {name, password});

            console.log(res.data);
            
        }catch(err){

        }
    }

  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to Vtube</SubTitle>
            <Input placeholder="username" onChange={(e) => setName(e.target.value)}></Input>
            <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></Input>
            <Button onClick={handleLogin}>Sign in</Button>
            <Title>or</Title>
            <Input placeholder="username" onChange={(e) => setName(e.target.value)}></Input>
            <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></Input>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default Signin