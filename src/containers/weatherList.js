import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const hotness = cityData.list.map(weather => weather.main.temp);
    const heaviness = cityData.list.map(weather => weather.main.pressure);
    const wetness = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(name, hotness, heaviness, wetness);

    return(
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={hotness} color='red' />
        </td>
        <td>
          <Chart data={heaviness} color='blue' />
        </td>
        <td>
          <Chart data={wetness} color='green' />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
