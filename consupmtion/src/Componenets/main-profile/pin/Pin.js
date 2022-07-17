import React from 'react'
import './Pins.css';

function pin() {
    document.querySelector("#picture").addEventListener("change", event => {
        if(event.target.files && event.target.files[0]) {
            if(/image\/*/.test(event.target.files[0].type)) {
              const reader = new FileReader();
              reader.onload = function(){
                  document.querySelector(".pin-image img").src = reader.result;
              }
    
              reader.readAsDataURL(event.target.files[0])
            }
        }
        document.querySelector("#picture").value = "";
    });

  return (
    <div className='pin-container-main'>
      <input type="file" name="img" id="picture"/>
    <div class="card">
        <div class="pin-title"></div>
        <div class="pin-model">
            <div class="model-head">
                <div class="save-card">Save</div>
            </div>
            <div class="model-foot">
                <div class="destination">
                    <div class="icons-container">
                        <i class="fa-solid fa-up-right" id="pint-destination-icon"></i>
                    </div>
                    <span>Eatery</span>
                </div>
                <div class="icons-container">
                    <i class="fa-solid fa-arrow-up-from-bracket" id="pint-arrow-icon"></i>
                </div>
                <div class="icons-container">
                    <i class="fa-solid fa-ellipsis" id="pint-ellipsis-icon"></i>
                </div>
            </div>
        </div>
        <div class="pin-image">
            <img src={""} alt="pin-image"/>
        </div>
    </div>
    </div>
  )
}

export default pin