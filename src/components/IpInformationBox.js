import React from "react";

const IpInformationBox = (props) => {
  return (
    <div className="Box">
      {props.error ? (
        <div className="Row">
          <div className="One-Col">
            <h2>
              An error occured while fetching the datas please retry with
              another IP address...
            </h2>
          </div>
        </div>
      ) : (
        <div className="Row">
          <div className="Col">
            <h2>Ip address</h2>
            <span>{props.ipAddress}</span>
          </div>
          <div className="Col">
            <h2>Location</h2>
            <span>
              {props.city} {props.region} {props.postalCode}
            </span>
          </div>
          <div className="Col">
            <h2>Timezone</h2>
            <span>UTC {props.timezone}</span>
          </div>
          <div className="Col">
            <h2>Isp</h2>
            <span>{props.isp}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default IpInformationBox;
