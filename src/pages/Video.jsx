import React from 'react'
import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Comments from '../components/Comments';
import Card from '../components/Card';


const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div`
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme})=> theme.text}
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({theme}) => theme.textSoft}
`
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({theme}) => theme.text}
`

const Button = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
const Recommendation = styled.div`
  flex: 2;
`
const Hr = styled.div`
  border: 1px solid ${({theme}) => theme.soft};
  margin: 15px 0;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text}
`
const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.textSoft};
  font-size: 12px;
`

const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: lightgreen;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: 100%;
  padding: 10px 20px;
  cursor: pointer;
`
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="100%" height="720" src="https://www.youtube.com/embed/hPibmvQ_Cc8?si=UnDAKWgrUQZTA_e6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,333,544 views | Sept 30, 2024</Info>
          <Buttons>
            <Button><ThumbUpOffAltIcon />123</Button>
            <Button><ThumbDownOffAltIcon />Dislike</Button>
            <Button><ShareIcon />Share</Button>
            <Button><SaveAltIcon />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrbQqjZ_ZQ2PkLmR9jfvmCM0EW-QXSBIidA&s'/>
            <ChannelDetail>
              <ChannelName>Something</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rem quibusdam sed molestiae voluptatem aspernatur dolorum, fugit amet dolorem nulla rerum vitae, est maxime, expedita eius. Voluptatem, blanditiis? Repellendus, ex!</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
    )
}

export default Video