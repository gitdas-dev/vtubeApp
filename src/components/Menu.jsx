import React from "react";
import styled from "styled-components";
import LogoImg from "../img/Logo.png"
import Home from "@mui/icons-material/Home";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import ContrastIcon from '@mui/icons-material/Contrast';
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bgLighter};
  height: 100vh;
  color: ${({theme}) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0px;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
  font-weight: bold;
`

const Img = styled.img`
    height: 45px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0;
    &:hover{
        background-color: ${({theme}) => theme.soft}
    }
`

const Hr = styled.div`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div`
`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`
const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`
const Menu = ({darkMode, setDarkMode}) => {
  return <Container>
    <Wrapper>
        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
            <Logo>
                <Img src={LogoImg}></Img>
                Vtube
            </Logo>
        </Link>
        <Item>
            <Home />
            Home
        </Item>
        <Link to="trends" style={{ "textDecoration": "none", color: "inherit"}}>
            <Item>
                <ExploreIcon />
                Explore
            </Item> 
        </Link>
        <Link to="subscriptions" style={{textDecoration: "none", color: "inherit"}}>
            <Item>
                <SubscriptionsIcon />
                Subscriptions
            </Item>
        </Link>
        <Hr />
        <Item>
            <VideoLibraryIcon />
            Library
        </Item>
        <Item>
            <HistoryIcon />
            History
        </Item>
        <Hr />
        <Login>
            Sign in to like videos, comment and subscribe.
            <Link to="signin" style={{textDecoration: "none"}}>
                <Button><AccountCircleIcon />SIGN IN</Button></Link>
        </Login>
        <Hr />
        <Title>BEST OF VTUBE</Title>
        <Item>
            <LibraryMusicIcon />
            Music
        </Item>
        <Item>
            <SportsCricketIcon />
            Sports
        </Item>
        <Item>
            <SportsEsportsIcon />
            Gaming
        </Item>
        <Item>
            <MovieCreationIcon />
            Movies
        </Item>
        <Item>
            <NewspaperIcon />
            News
        </Item>
        <Item>
            <LiveTvIcon />
            Live
        </Item>
        <Hr />
        <Item>
            <SettingsIcon />
            Settings
        </Item>
        <Item>
            <ReportIcon />
            Report
        </Item>
        <Item>
            <HelpIcon />
            Help
        </Item>
        <Item onClick={() => {setDarkMode((darkMode) => !darkMode)}}>
            <ContrastIcon />
            {darkMode ? "Light" : "Dark"} Mode
        </Item>
    </Wrapper>
  </Container>;
};

export default Menu;
