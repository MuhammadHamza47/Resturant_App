import React from 'react'

function Footer() {
  return (
    <div className="container-fluid" style={{backgroundColor: 'black', color: 'white', padding: '150px 0px'}} >
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div><h1>Title Here</h1></div>
                    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit odit dolore ducimus quo necessitatibus, sapiente ipsum quae voluptatibus.</p></div>
                    <div>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-whatsapp"></i>
                    </div>
                </div>
                <div className="col-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">ABOUT</h6>
                        <p>
                            <a className="text-white" href="/website.html">History</a>
                        </p>
                        <p>
                            <a className="text-white" href="/software.html">Our Team</a>
                        </p>
                        <p>
                            <a className="text-white" href="/andriod.html">Brand Guidelines</a>
                        </p>
                        <p>
                            <a className="text-white" href="domain.html">Privacy Policy</a>
                        </p>
                </div>
                <div className="col-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                        <p>
                            <a className="text-white" href="/website.html">How to Order</a>
                        </p>
                        <p>
                            <a className="text-white" href="/software.html">Our Product</a>
                        </p>
                        <p>
                            <a className="text-white" href="/andriod.html">Order Status</a>
                        </p>
                        <p>
                            <a className="text-white" href="domain.html">Payment Mathod</a>
                        </p>
                </div>
                <div className="col-2">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Other</h6>
                        <p>
                            <a className="text-white" href="/website.html">Contact Us</a>
                        </p>
                        <p>
                            <a className="text-white" href="/software.html">Help</a>
                        </p>
                        <p>
                            <a className="text-white" href="/andriod.html">Privacy</a>
                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
