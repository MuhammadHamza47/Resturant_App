import React from 'react'
import bg from'../../Assets/popular_Assets/Design.png'
import icon from '../../Assets/popular_Assets/Icon.png'
function Package() {
  return (
    <div className="container-fluid" id="popular-bg" style={{ color: '#F64B3C', height: '100vh', backgroundColor: '#f6eedf', backgroundImage: `url(${bg})`}}>
        <div className="container p-5 text-center">
            <div className="row mt-5">
                <div className="col mb-5">
                    <h1 style={{fontSize: "60px"}}>Popular Package</h1>
                </div>

            </div>
            <div className="row mt-5 d-flex justify-content-around">
                <div className="col-3 text-center">
                    <div className="card">
                        <div className="mt-3">
                            <h3>PACKAGE I</h3>
                        </div>
                        <div className="text-center mb-3"><img className="" src={icon}  width="60px" alt="CardCap"/></div>
                        <div className="card-body">
                            <h5 className="card-title">$10.00</h5>
                            <p className="card-text">Some quick example text to build on the card title</p>
                            <a href="/" className="btn px-4" style={{borderRadius: '100px', backgroundColor: '#F64B3C'}}>ORDER
                                NOW</a>
                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card">
                        <div className="mt-3">
                            <h3>PACKAGE II</h3>
                        </div>
                        <div className="text-center mb-3"><img className="" src={icon}  width="60px" alt="CardCap"/></div>
                        <div className="card-body">
                            <h5 className="card-title">$20.00</h5>
                            <p className="card-text">Some quick example text to build on the card title</p>
                            <a href="/" className="btn px-4" style={{borderRadius: '100px', backgroundColor: '#F64B3C'}}>ORDER
                                NOW</a>
                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card">
                        <div className="mt-3">
                            <h3>PACKAGE III</h3>
                        </div>
                        <div className="text-center mb-3"><img className="" src={icon} width="60px"  alt="CardCap"/></div>
                        <div className="card-body">
                            <h5 className="card-title">$30.00</h5>
                            <p className="card-text">Some quick example text to build on the card title</p>
                            <a href="/" className="btn px-4" style={{borderRadius: '100px', backgroundColor: '#F64B3C'}}>ORDER NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Package
