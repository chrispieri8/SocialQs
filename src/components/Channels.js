

import React from 'react'
import styled from 'styled-components'
import triviaChannels from '../configs/triviaChannels.json'
const ChannelWrapper = styled.div`
grid-area: channels;
background-color: #25262B;
color: white;
font-size: 2em;
display: flex;
flex-wrap: nowrap;
justify-content: flex-start;
flex-direction: column;
`;

const Text = styled.div`
    font-size: 20px;
    border-radius: 0px 25px 25px 0px;
    color: white;
    font-family: Arial;
    padding: 7px;
    padding-right: 20px;
    padding-left: 20px;
    &:hover {
        background: #95989A; // <Thing> when hovered
    }
`;
//const ChannelMapper = (channel) => (
//     onClick={this.handleChange.bind(this)} value={this.props.value}>{channel}</Text>
//);



export default class Channels extends React.Component {
    handleChange(e){
        
        const value = e.target.id;
        console.log(value);
        this.props.update(value);
    }

    render() {
        return(

            <ChannelWrapper>
                <br></br>
                <Text >Your Trivia</Text>
                <Text>Explore Trivia</Text>
                <Text>Create Trivia</Text>
                <br></br>
                {triviaChannels.Channels.map((channel)=> 
                    <Text 
                        onClick={this.handleChange.bind(this)}
                        id={channel}
                    >{channel}</Text>
                )}
            </ChannelWrapper>
            );
        };
};