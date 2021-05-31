import React, { Component } from "react";
import Map from "./Map";
import Form from "./Form";
import Loader from "./Loader";
import IpInformationBox from "./IpInformationBox";

class IpAddressContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: "",
      lat: "",
      lng: "",
      isLoading: true,
      error: false,
      ip: "192.212.174.101",
      city: "Brooklyn",
      region: "NY",
      postalCode: "10001",
      timezone: "-05:00",
      isp: "SpaceX Starlink",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_ua7QcjJ3F7O3E4NV1p9WllBzkkY1p&ipAddress=8.8.8.8`
    )
      .then((result) => result.json())
      .then((json) => {
        this.setState({
          isLoading: false,
          lat: json.location.lat,
          lng: json.location.lng,
        });
      });
  }

  handleChange(event) {
    this.setState({ ipAddress: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      isLoading: true,
      error: false,
    });
    event.preventDefault();
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_ua7QcjJ3F7O3E4NV1p9WllBzkkY1p&ipAddress=${this.state.ipAddress}`
    )
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        this.setState({
          ipAddress: "",
          isLoading: false,
          lat: json.location.lat,
          lng: json.location.lng,
          ip: json.ip,
          city: json.location.city,
          region: json.location.region,
          postalCode: json.location.postalCode,
          timezone: json.location.timezone,
          isp: json.isp,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          isLoading: false,
          ipAddress: "",
        });
      });
  }

  render() {
    return (
      <div className="IpAddressContainer">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          ipAddress={this.state.ipAddress}
          placeholder="Search for any IP address or domain"
        />
        <IpInformationBox
          error={this.state.error}
          ipAddress={this.state.ip}
          city={this.state.city}
          region={this.state.region}
          postalCode={this.state.postalCode}
          timezone={this.state.timezone}
          isp={this.state.isp}
        />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Map lat={this.state.lat} lng={this.state.lng} />
        )}
      </div>
    );
  }
}

export default IpAddressContainer;
