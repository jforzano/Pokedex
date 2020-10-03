import React from 'react';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
  }
  render () {
    return (
      <>
        <input 
          type='text' 
          value={this.state.searchVal}
          onChange={(event) => this.setState({searchVal: event.target.value})} 
        />
        <button onClick={() => this.props.getPokemonInfo(this.state.searchVal)}>Find That Pokemon!</button>
      </>
    );
  }
}

export default Searchbar;