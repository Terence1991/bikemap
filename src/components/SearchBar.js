import React from 'react'
import styled from 'styled-components';


const StyledContainer = styled.form`
width: 490px;
  display: block;
  margin: 0 auto;
`

const StyledInput = styled.input`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;
  &:focus{
    border: 1px solid #008ABF;
    transition: 0.35s ease;
    color: #008ABF;
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &::-moz-placeholder {
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &:-ms-placeholder {
     transition: opacity 0.45s ease; 
  	 opacity: 0;
     }    
   }

`

const StyledIcon = styled.img`
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -45px;
  top:50%; 
  transform: translateY(-20%);
  z-index: 5;
`

const StyledDiv = styled.div`
position: relative;

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
      <div>
        <StyledContainer>
           <form onSubmit={this.onFormSubmit}>
          <StyledDiv>
            <StyledIcon alt="search"src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
            <StyledInput placeholder='Find A Station..' type="text" value={this.state.term} onChange={this.onInputChange}/>
          </StyledDiv> 
        </form>
        </StyledContainer>
      </div>
    )
  }
}

export default SearchBar;