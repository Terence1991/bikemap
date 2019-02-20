import React from 'react'


class GoogleAuth extends React.Component {
  state = {isSignedIn: null}

  componentDidMount() {
    window.gapi.load('client', () => {
      window.gapi.client.init({
        clientId: '546110512453-8hg7ucf4350cd3g8dgtuhkhub7vpitiq.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()   
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i/>
          SignOut
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className='red google button'>
          <i/>
          Sign in with google
        </button>
      )
    }
}

  render() {
    return (
      <div>
       {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth 