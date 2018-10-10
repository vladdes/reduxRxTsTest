import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

interface IWeatherListProps {
    weather?: any;
}

class WeatherList extends Component<IWeatherListProps, any> {
    constructor(props: IWeatherListProps) {
        super(props);
    }

    render() {

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

                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData: any) {
        const temps: number[] = cityData.list.map((listItem: any) => { return listItem.main.temp });
        const pressures: number[] = cityData.list.map((listItem: any) => { return listItem.main.pressure });
        const humidities: number[] = cityData.list.map((listItem: any) => { return listItem.main.humidity });
        const SparklinesStyle: React.CSSProperties = {
            height: '200px',
            width: '260px'
        };
        return (
            <tr key={cityData.city.id}>
                <td style={{verticalAlign: 'middle'}}>{cityData.city.name}</td>
                <td>
                    <Sparklines height={120} width={180} data={temps} style={SparklinesStyle}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={pressures} style={SparklinesStyle}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidities} style={SparklinesStyle}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </td>
            </tr>

        );
    }
}

function mapStateToProps({ weather }: any) {

    return { weather };
}

export default connect(mapStateToProps)(WeatherList);