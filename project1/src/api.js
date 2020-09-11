import React from 'react';

export default class FetchRandomUser extends React.Component{

  state = {
    loading: true
  }

  async componentDidMount() {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data, loading: false});
  }

  render() {
    return(
       <div> 
         {this.state.loading || !this.state.quote ? (
          <div>loading joke...</div>
         ) : (
          <div>
           <div> {this.state.quote.value} </div>
          </div>
         )} 
       </div>
       
    );
  }
}

