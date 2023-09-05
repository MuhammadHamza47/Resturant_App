import React from 'react'
import img1 from '../../Assets/Best_Assets/img1.png'
function BestBurger() {
  return (
    <div className="container-fluid p-5" style={{backgroundColor: '#F64B3C', color: 'white', height:'100vh'}}>
    <div className="container m-5">
        <div className="row mt-5">
            <div className="col-5">
                <img src={img1} width="400px"
                    className="rounded-circle" alt=""/>
            </div>
            <div className="col-7 mt-5">
                <div className="mb-5">
                    <h1 style={{fontSize: '60px'}}>Best Burger</h1>
                </div>
                <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odio explicabo
                    amet sit dolores non voluptate, consequuntur autem, repellendus sunt sapiente earum nemo porro
                    et omnis officiis ipsam. Quaerat, magni!</p>
                <button id="order-btn2">ORDER NOW</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default BestBurger
