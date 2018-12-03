import React from 'react'

const MessageForm = ({onSendMessage,onChange,message,placeholder})=> {
  return (
    <form
      onSubmit={onSendMessage}
      className="send-message-form">
    <input
      onChange={onChange}
      value={message}
      placeholder={placeholder}
      type="text" />
  </form>
  )
}

export default MessageForm