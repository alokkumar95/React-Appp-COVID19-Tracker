import React, { Component } from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/';
import coronaImage from './images/image.png';

class App extends Component {
  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetcheddata = await fetchData();
    this.setState({data: fetcheddata})
  }

  handleCountryChange = async (country)=>{
    const fetcheddata=await fetchData(country);
  
    this.setState({data: fetcheddata, country:country });
  
    // fetch the data
    // set the state
  }
  render() {
    const {data,country} = this.state;
    
    return (
      <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="Corona Image"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChang={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      </div>
    )
  }
}

export default App;
