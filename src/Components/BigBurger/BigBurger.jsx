import React from 'react'
import bg from '../../Assets/Big_Assets/Design.png'
import img1 from '../../Assets/Big_Assets/img1.png'

function BigBurger() {
  return (
    <div class="container-fluid" id="big-bg" style={{backgroundColor: '#f6eedf', color: '#F64B3C',
     height:'100vh', backgroundImage: `url(${bg})`}}>
        <div class="container" style={{paddingTop: '180px'}}>
            <div class="row">
                <div class="col-6 mt-5">
                    <div class="mb-5">
                        <h1 style={{fontSize: '60px'}}>Big Burger</h1>
                    </div>
                    <p class="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odio explicabo
                        amet sit dolores non voluptate, consequuntur autem, repellendus sunt sapiente earum nemo porro
                        et omnis officiis ipsam. Quaerat, magni!</p>
                    <button id="order-btn1">ORDER NOW</button>
                </div>
                <div class="col-6 ps-5">
                    <img src={img1} width="400px"
                        class="rounded-circle" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigBurger
