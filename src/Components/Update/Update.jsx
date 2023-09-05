import React from 'react'
import bg from '../../Assets/Design.png'
function Update() {
  return (
    <div class="container-fluid p-5" id="update" style={{backgroundColor: '#f6eedf', color: '#F64B3C', backgroundImage: `url(${bg})`}}>
        <div class="container mb-5">
            <div class="row mt-5">
                <div class="col mt-5 mb-3 pt-5 text-center">
                    <h1 style={{fontSize: '60px'}}>Don’t miss Our Update</h1>
                </div>
            </div>
            <div class="row d-flex justify-content-center text-center">
                <div class="col-7 mb-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero cum non hic! Laudantium
                        fuga eius voluptatibus mollitia nemo a tempora iure, molestiae </p>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-6">
                    <div class="input-group">
                        <input type="search" class="form-control" id="search-input" placeholder="Search"
                            aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn" id="search">search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update
