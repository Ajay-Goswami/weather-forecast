import React from "react";
import styled from "styled-components";

function CurrentWeather({ data }) {
  return (
    <StyledWeather>
      <header>
        <div className="current-weather">
          <div className="weather-icon">
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
          </div>
          <div className="weather-details">
            <h1>{data.current.temp_c}°C</h1>
            <div className="content">
              <h5>Precipitation: {data.current.precip_in} in</h5>
              <h5>Wind: {data.current.wind_kph} km/h</h5>
            </div>
          </div>
        </div>
        <div className="location">
          <h2>{data.location.name}</h2>
          <div className="region-country">
            <h3>{data.location.region}</h3>
            <h4>{data.location.country}</h4>
          </div>
        </div>
      </header>
    </StyledWeather>
  );
}

const StyledWeather = styled.div`
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .current-weather {
      display: flex;
      flex-direction: column;
      align-items: center;

      .weather-icon {
        margin-bottom: 10px;
        img {
          width: 120px;
          height: 120px;
        }
      }

      .weather-details {
        text-align: center;

        h1 {
          font-size: 4rem;
          margin: 10px 0;
        }

        .content {
          text-align: center;

          h5 {
            font-weight: normal;
            margin: 10px 0;
          }
        }
      }
    }

    .location {
      text-align: center;
      margin-top: 20px;

      h2 {
        font-size: 2rem;
        margin: 10px 0;
      }

      .region-country {
        text-align: center;

        h3 {
          font-size: 1.5rem;
          margin: 10px 0;
        }

        h4 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 10px 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    header {
      flex-direction: column;

      .current-weather {
        .weather-icon {
          margin-bottom: 20px;
        }
      }
    }
  }
`;

export default CurrentWeather;
