import React from 'react'

function Statistics() {
  return (
    <div className="container-fluid p-5" style={{backgroundColor: '#F64B3C', color: 'white', height:'100vh'}}>
        <div className="container">
            <div className="row">
                <div className="col mb-4 text-center">
                    <h1 style={{fontSize: "60px"}}>Statistics</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-7 mb-4 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quasi recusandae at
                        voluptate. Adipisci quod officiis unde tempore! Sequi porro perspiciatis numquam.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="col-4 rounded-circle p-5" style={{border: '2px white solid', width: '300px', height: '300px'}}>
                    <div className="text-center pt-5">
                        <h1 style={{fontSize: "60px"}}>7K</h1>
                        <h4>CUSTOMER</h4>
                    </div>
                </div>
                <div className="col-4 rounded-circle p-5" style={{border: '2px white solid', width: '300px', height: '300px'}}>
                    <div className="text-center pt-5">
                        <h1 style={{fontSize: "60px"}}>109</h1>
                        <h4>OUTLETS</h4>
                    </div>
                </div>
                <div className="col-4 rounded-circle p-5" style={{border: '2px white solid', width: '300px', height: '300px'}}>
                    <div className="text-center pt-5">
                        <h1 style={{fontSize: "60px"}}>35</h1>
                        <h4>COUNTRY</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics
