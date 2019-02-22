import React from 'react'
import styled from 'styled-components';


const StyledForm = styled.form`
width: 300px;
  display: block;
  margin: 0 auto;
`

const StyledInput = styled.input`
  position: absolute;
  margin: 0 auto;
  width: 300px;
  height: 45px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;

  margin


  &:focus{
    border: 1px solid #008ABF;
    transition: 0.35s ease;
    color: #008ABF;

    &:placeholder {
      transition: opacity 0.45s ease; 
      opacity: 0;
      }    
   }

`

const StyledIcon = styled.img`
  position: relative;
  float: right;
  right: -16px;
  height: 75px;
  top: -12px; 
  z-index: 5;
`

class SearchBar extends React.Component {
    state = {term: ''}

    onInputChange = (event) => {
      this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
      event.preventDefault()
      
      this.props.onTermSubmit(this.state.term) 
    } 
  render() {
    return(
        <StyledForm onSubmit={this.onFormSubmit}>
            <StyledIcon alt="search"src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
            <StyledInput placeholder='Find A Station..' type="text" value={this.state.term} onChange={this.onInputChange}/> 
        </StyledForm>
    )
  }
}

export default SearchBar;