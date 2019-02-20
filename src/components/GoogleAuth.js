import React from 'react'


class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client', () => {
      window.gapi.client.init({
        clientId: '546110512453-8hg7ucf4350cd3g8dgtuhkhub7vpitiq.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render() {
    return (
      <div>
       Google auth
      </div>
    )
  }
}

export default GoogleAuth 