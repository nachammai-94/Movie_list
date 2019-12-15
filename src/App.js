import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'react-grid-system';
import {FilterComponent} from './components/filter_component'
import {ListComponent} from './components/list_component'

export class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      "updatedKey" : ''
    }
  } 
  updatedFilter= (value) =>{
    this.setState({updatedKey:value});
  };
  render(){
  return (
    <div>
      {/* <header> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
        />
        <h1 className="App">Species List</h1>
        <Container>
          <Row>
            <Col lg={3}>
              <FilterComponent updatedFilter={this.updatedFilter}></FilterComponent>
            </Col>
            <Col lg={9}>
              <ListComponent UpdatedKey = {this.state.updatedKey}/>
            </Col>
          </Row>
        </Container>
      {/* </header>       */}
    </div>
  );
}
}

export default App;
