import React from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'



class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client', () => {
      window.gapi.client.init({
        clientId: '546110512453-8hg7ucf4350cd3g8dgtuhkhub7vpitiq.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
   if(isSignedIn) {
     this.props.signIn(this.auth.currentUser.get().getId())
   } else {
     this.props.signOut()
   }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()   
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn}

}

export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth) 