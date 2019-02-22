import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { onSearchChange, onTermSubmit } from '../reducers/searchReducer';

const StyledForm = styled.form`
  width: 300px;
  display: block;
  margin: 0 auto;
  border-radius: 2px;
  padding-left: 4px;
`

const StyledInput = styled.input`
  position: absolute;
  margin: 0 auto;
  width: 300px;
  height: 45px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;

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
  onInputChange = (event) => {
    this.props.onSearchChange(event.target.value.toLowerCase());
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit() 
  } 

  render() {
    return(
        <StyledForm onSubmit={this.onFormSubmit}>
            <StyledIcon alt="search"src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
            <StyledInput 
              placeholder='Find A Station..' 
              type="text" 
              value={this.props.term} 
              onChange={this.onInputChange}
            /> 
        </StyledForm>
    )
  }
}
const mapStateToProps = ({ search }) => {
  return {
    term: search.searchTerm
  }
}

export default connect(mapStateToProps, {
  onSearchChange, 
  onTermSubmit
})(SearchBar);