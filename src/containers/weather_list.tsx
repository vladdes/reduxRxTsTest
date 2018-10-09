import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

interface IWeatherListProps{
    weather?: any;
}

 class WeatherList extends Component<IWeatherListProps, any> {
    constructor(props: IWeatherListProps){
        super(props);
    }

    render(){
        
        return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {console.log(this.props.weather)}
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        );
    }

     renderWeather(cityData: any) {
         
         return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>{cityData.list[0].main.temp}</td>
                <td>{cityData.list[0].main.pressure}</td>
                <td>{cityData.list[0].main.humidity}</td>
            </tr>

         );
     }
}

function mapStateToProps({weather}: any){   
    
    return { weather};
}

export default connect(mapStateToProps)(WeatherList);