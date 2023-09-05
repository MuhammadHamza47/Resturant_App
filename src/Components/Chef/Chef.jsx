import React from 'react'
import chef2 from '../../Assets/chef_Assets/chef2.png'
import chef1 from '../../Assets/chef_Assets/chef1.png'
import chef3 from '../../Assets/chef_Assets/chef3.png'
import bg from '../../Assets/chef_Assets/Design.png'

function Chef() {
  return (
    <div className="container-fluid" id="chef-bg" style={{color: "#F64B3C", backgroundColor: "#f6eedf", backgroundImage: `url(${bg})` }}>
        <div className="container p-5">
            <div className="row">
                <div className="col text-center">
                    <h1 style={{fontSize: "60px"}}>Our Chef</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6 text-center">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dicta voluptas aperiam?
                        Neque hic voluptatibus asperiores</p>
                </div>
            </div>
            <div className="row mt-5 title-2">
                <div className="col offset-md-1">
                    <img src={chef2}
                        className="rounded-circle" alt="" />
                    <h3 className="mt-3 ms-4">AIDEN HUNTER</h3>
                    <p className="text-center me-5">Founder</p>
                </div>
                <div className="col">
                    <img src={chef1}
                        className="rounded-circle" alt="" />
                    <h3 className="mt-3 ms-5">ETHEL RAMSEY</h3>
                    <p className="text-center me-4">Co-Founder</p>
                </div>
                <div className="col">
                    <img src={chef3}
                        className="rounded-circle" alt="" />
                    <h3 className="mt-3 ms-4">FANNIE STEWART</h3>
                    <p className="text-center me-5">Co-Founder</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chef
