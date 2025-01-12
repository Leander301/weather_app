import React from "react";

const Current = ({currentWeather, location}) => {
    return (
        <div className="container mt-5">
            <h4 className="text-white text-center">Current Weather of {location.name}, {location.region}, {location.country}</h4>

            <div className="row">

                {/* Col-1 */}
                <div className="col-3">
                    <div className="card">
                        {/* <img src={currentWeather.condition.icon} className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{currentWeather.condition.text}</h5>
                        </div>
                    </div>
                </div>

                {/* Col-2 */}
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Temp in c {currentWeather.temp_c}</h5>
                        </div>
                    </div>
                </div>

                {/* Col-3 */}
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Temp in f {currentWeather.temp_f}</h5>
                        </div>
                    </div>
                </div>

                {/* Col-4 */}
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Humidity {currentWeather.humidity}</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Current;