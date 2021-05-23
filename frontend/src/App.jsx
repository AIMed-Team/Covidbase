import React, { Component } from 'react'
import Dataset from './components/dataset'

class App extends Component {
  state = {
    datasets: []
  }

  async componentDidMount() {
    fetch('/api/dataset')
      .then(res => res.json())
      .then((data) => {
        this.setState({ datasets: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <center><h1>Dataset List</h1></center>
        {this.state.datasets.map((dataset) => <Dataset dataset={dataset}></Dataset>)}
      </div>
    );
  }
}

export default App;
