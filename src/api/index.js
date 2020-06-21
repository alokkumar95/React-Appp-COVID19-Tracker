import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl=url;
  if(country){
    changeableUrl=`${url}/countries/${country}`
  }
  try{
    //   to get data response.data, instead 
    //  we destructure it as const {data} = await axios.get(url)
      const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
      
      return {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }

  }
  catch(error){

  }
}

export const fetchDailyData= async()=>{
  try {
    const {data}= await axios.get(`${url}/daily`);
    const modifieddata=data.map((dailyData) =>({
      confirmed:dailyData.confirmed.total,
      deaths:dailyData.deaths.total,
      date:dailyData.reportDate,
    }))
    return modifieddata;

  }catch(error){
   console.log(error)
  }
}

export const fetchCountries=async ()=>{
  try{
   const {data:{countries}}= await axios.get(`${url}/countries`)
  // const response=await axios.get(`${url}/countries`)
  // console.log(response.data.countries[0])
  // return response.data.countries.map((country)=>country.name)
  //  console.log(data)
   return countries.map((country)=>country.name)
  }catch(error){
    console.error(error);
  }
}