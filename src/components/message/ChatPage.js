import React, { Component} from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import './message.css'
import  { ChatManager, TokenProvider } from '@pusher/chatkit-client'

const instanceLocator = 'v1:us1:445d4366-8e6d-4dc8-bfc6-9fc8a7a38678'
const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/445d4366-8e6d-4dc8-bfc6-9fc8a7a38678/token'
const username = "testId"
const roomId = '19376384'

class ProtectedHome extends Component {
    constructor(props){
        super(props)
        this.state ={
            messages: [],
            message:''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSendMessageHandler = this.onSendMessageHandler.bind(this)
    }
    componentDidMount() {
        const chatManager = new ChatManager({
          instanceLocator: instanceLocator,
          userId: username,
          tokenProvider: new TokenProvider({
            url: testToken
          })
       })
       chatManager.connect().then(currentUser => {
        this.currentUser = currentUser
      this.fetchMessage()
    })
    }

    fetchMessage(){

        this.currentUser.fetchMessages({
            roomId,
            limit: 10
        })
        .then(messages => {
            console.log(messages)
            this.setState({ messages })
        })
        .catch(err => {
            console.log(`Error fetching messages: ${err}`)
        })
    }
    onChangeHandler(e){
        this.setState({
            message: e.target.value
          })
    }
    onSendMessageHandler(e){
        e.preventDefault()
        this.sendMessage(this.state.message)
        this.setState({ message: '' })
        
    }
    // send message to ChatKit
    sendMessage(text) {
        this.currentUser.sendMessage({
          text,
          roomId: roomId
        })
        this.fetchMessage()
    }

    render(){
        return(
        <div className="jumbotron clearfix" style={{ width: '50%'}}>
            <p className="title">My awesome chat app</p>
            <MessageList   
                    roomId={this.state.roomId}
                    messages={this.state.messages}/>
            <MessageForm
                    placeholder="Type your message and hit ENTER"
                    message={this.state.message}
                    onChange={this.onChangeHandler}
                    onSendMessage={this.onSendMessageHandler}/>
        </div>
        )
    }

}

export default ProtectedHome