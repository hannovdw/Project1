import React from 'react';

export default class FetchRandomUser extends React.Component{

  state = {
    loading: true
  }

  async componentDidMount() {
    const url = "http://quotes.rest/qod.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data, loading: false});
  }

  render() {
    return(
       <div> 
         {this.state.loading || !this.state.quote ? (
          <div>loading quote...</div>
         ) : (
          <div>
           <div> {this.state.contents.quotes[0].quote} </div>
          </div>
         )} 
       </div>
       
    );
  }
}

