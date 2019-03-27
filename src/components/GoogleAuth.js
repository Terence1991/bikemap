import React from 'react'
import { connect } from 'react-redux'
import { resetSearch } from '../reducers/searchReducer'
import { signIn, signOut } from '../reducers/authReducer'
import styled from 'styled-components';

const Button = styled.div`
  background: #F3F3F3;
  border: 1px #DADADA solid;
  padding: 5px 10px;
  border-radius: 2px;
  font-weight: bold;
  font-size: 9pt;
  outline: none;
  text-align: center;
  width: 100px;
  text-transform: uppercase;
`

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client', () => {
      window.gapi.client.init({
        clientId: '911249072474-0gokvhftt0b09q8gmpp8bo03n182j17u.apps.googleusercontent.com',
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
      this.props.resetSearch()
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.props.resetSearch()
    this.auth.signOut()   
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <Button onClick={this.onSignOutClick}>
            <i/>
            Sign Out
          </Button>
        </div>
        
      )
    } else {
      return (
        <div>
          <Button onClick={this.onSignInClick}>
            <i/>
            Login
          </Button>
        </div>
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

export default connect(mapStateToProps,{ 
  signIn, 
  signOut,
  resetSearch
})(GoogleAuth) 