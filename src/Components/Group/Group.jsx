import React from 'react'
import bg from '../../Assets/Image.png'

function Group() {
  return (
    <div className="container-fluid" id="grp-7" style={{backgroundImage: `url(${bg})`}}>
        <div className="container" style={{paddingTop: '300px', color: 'white'}}>
            <div className="row d-flex justify-content-center text-center">
                <div className="col-6">
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, doloremque veritatis
                        quibusdam dolorem deserunt nulla odit labore voluptas fugiat ipsum cupiditate</h5>
                </div>
            </div>
            <div className="row mt-4 d-flex justify-content-center text-center">
                <div className="col-6">
                    <h4>Barry Henderson</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Group
