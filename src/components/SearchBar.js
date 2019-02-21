import React from 'react'
import styled from 'styled-components';




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
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Bike Map Search:</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;