import React from "react";

const Forecast = ({ forecastWeather, location }) => {
    return (
        <div className="container mt-3">
            <h4 className="text-white text-center">Forecast Weather of {location.name}, {location.region}, {location.country}</h4>
            {forecastWeather.forecastday.map((data, index) => {
                return (
                    <div key={index} className="accordion accordion-flush mt-3" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div class="d-flex flex-row align-items-center mb-3">
                                        <div class="p-2">Day: {data.date}</div>
                                        <div class="p-2"><img src={data.day.condition.icon} /></div>
                                        <div class="p-2">{data.day.condition.text}</div>
                                        <div class="p-2">Max temp: {data.day.maxtemp_c}</div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {data.hour.map((data) => {
                                        return (
                                            <>
                                                <h6>{data.time} Temp: {data.temp_c} c</h6>
                                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar" style={{ width: `${data.temp_c}%` }}>{data.temp_c} c</div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div >
    )
};

export default Forecast;