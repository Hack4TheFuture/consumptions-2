import React from "react";
import logoImg from "../../assets/img/logo.png";
import "./Main-profile.css";
import "./model/Model.css";
import "./pin/Pins.css";
import "./model-pin/model-pin.css";


function MainProfile() {
  let add_pin_model = document.querySelector(".add-pin-model");
  function addPinBtn() {
    let add_pin_model = document.querySelector(".add-pin-model");
    add_pin_model.style.opacity = 1;
    add_pin_model.style.pointerEvents = "all";

    // if(event.target === add_pin_model){
    //     resetModel();
    // }
    
  }

    function uploadImg() {
      let pin_img_blob = null;
      let uploadImage = document.querySelector("#upload-img");
      // if (event.target.files && event.target.files[0]) {
      //   if (/image\/*/.test(event.target.files[0].type)) {
      //     const reader = new FileReader();
      //     reader.onload = function () {
      //       const newImg = new Image();
      //       newImg.src = reader.result;
      //       pin_img_blob = reader.result;

      //       newImg.onload = function () {
      //         const modelPin = document.querySelector(
      //           ".add-pin-model .model-pin"
      //         );
      //         newImg.classList.add(".pin-max-width");
      //         document
      //           .querySelector(".add-pin-model .pin-image")
      //           .appendChild(newImg);
      //         document.querySelector("#upload-img-lable").style.display = "none";
      //         modelPin.style.display = "block";
      //         if (
      //           newImg.getBoundingClientRect().width <
      //             newImg.parentElement.getBoundingClientRect().width ||
      //           newImg.getBoundingClientRect().height <
      //             newImg.parentElement.getBoundingClientRect().height
      //         ) {
      //           newImg.classList.remove(".pin-max-width");
      //           newImg.classList.add(".pin-max-height");
      //         }
      //         modelPin.style.opacity = 1;
      //       };
      //     };

      //     reader.readAsDataURL(event.target.files[0]);
      //   }
      // }
      uploadImage.value = "";

      // uploadImage.value = "";
      // });
    }
  function savePin() {
    let savePinBtn = document.querySelector(".save-pin");
    let pin_img_blob = null;
    const userData = {
      author: "Mansur",
      board: "board",
      title: document.querySelector("#pin-title").value,
      description: document.querySelector("#pin-description").value,
      destination: document.querySelector("#pin-destination").value,
      img_blob: pin_img_blob,
      pin_size: document.querySelector("#pin-size").value,
    };
    createPin(userData);
    console.log("save me");
    resetModel();
  }

  function createPin(pinDetails) {
    const newPin = document.createElement("DIV");
    const newImg = new Image();
    newImg.src = pinDetails.img_blob;
    newPin.style.opacity = 0;

    newImg.onload = function () {
      newPin.classList.add("card");
      newPin.classList.add(`card-${pinDetails.pin_size}`);
      // newImg.classList.add("pin-max-height");
      newImg.classList.add(".pin-max-width");

      newPin.innerHTML = `<div class="pin-title">${pinDetails.title}</div>
       <div class="pin-model">
           <div class="model-head">
               <div class="save-card">Save</div>
           </div>
           <div class="model-foot">
               <div class="destination">
                   <div class="icons-container">
                       <i class="fa-solid fa-up-right" id="pint-destination-icon"></i>
                   </div>  
                   <span>${pinDetails.destination}</span>                
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
       </div>`;

      document.querySelector(".pin-container").appendChild(newPin);
      newPin.children[2].appendChild(newImg);

      if (
        newImg.getBoundingClientRect().width <
          newImg.parentElement.getBoundingClientRect().width ||
        newImg.getBoundingClientRect().height <
          newImg.parentElement.getBoundingClientRect().height
      ) {
        newImg.classList.add(".pin-max-height");
        newImg.classList.remove(".pin-max-width");
      }
      newPin.style.opacity = 1;
    };
  }

  function resetModel() {
    let add_pin_model = document.querySelector(".add-pin-model");
    const modelPin = document.querySelector(".add-pin-model .model-pin");
    const uploadImgLable = document.querySelector("#upload-img-lable");
    add_pin_model.style.opacity = 0;
    add_pin_model.style.pointerEvents = "none";
    uploadImgLable.style.display = "block";
    modelPin.style.display = "none";
    modelPin.style.opacity = 0;

    if (modelPin.children[0].children[0])
      modelPin.children[0].removeChild(modelPin.children[0].children[0]);

    let pinTitle = document.querySelector("#pin-title");
    pinTitle.value = "";
    let pinDescription = document.querySelector("#pin-description");
    pinDescription.value = "";
    let pinDestination = document.querySelector("#pin-destination");
    pinDestination.value = "";
    let pinSize = document.querySelector("#pin-size");
    pinSize.value = "";
  }

  return (
    <div>
      <div class="nav-bar">
        <div class="heading-container">
          {/* <div class="logo">
            <img src={logoImg} alt="" />
          </div> */}
          {/* <button class="home-btn">Home</button> */}
          <div class="search">
            <input type="text" placeholder="Search" id="search" />
          </div>
          {/* <div class="notification">
            <i class="fa-regular fa-bell"></i>
            <i class="fa-regular fa-comment-dots"></i>
          </div> */}
          <button class="logout-btn">Logout</button>
          <div id="user-name"></div>
        </div>
        <div class="icons-container add-pin" onClick={addPinBtn}>
          <i class="fa-solid fa-plus" id="pint-add-icon"></i>
        </div>
      </div>

      <div class="pin-container"></div>
      <div class="add-pin-model">
        <div class="add-pin-container">
          <div class="side" id="left-side">
            <div class="sec-1">
              <div class="icons-container">
                <i class="fa-solid fa-ellipsis" id="ellipsis-icon"></i>
              </div>
            </div>
            <div class="sec-2">
              <label for="upload-img" id="upload-img-lable">
                <div class="upload-img-container">
                  <div class="border">
                    <div class="icons-container">
                      <i class="fa-solid fa-arrow-down" id="up-arrow-icon"></i>
                    </div>
                    <div>Click to upload</div>
                    <div>Recommendation: use image files less than 10 MB</div>
                  </div>
                </div>
                <input
                  type="file"
                  name="upload-img"
                  id="upload-img"
                    onChange={(event) => uploadImg(event)}
                />
                {/* onChange={(event) => uploadImg(event)} */}
              </label>
              <div class="model-pin">
                <div class="pin-image">
                  {/* <!-- <img src="" alt="pin-image"> --> */}
                </div>
              </div>
            </div>
            <div class="sec-3">
              <div class="save-from-site">Save From Site</div>
            </div>
          </div>
          <div class="side" id="right-side">
            <div class="sec-1">
              <div class="select-size">
                <select name="pin-size" id="pin-size">
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <div class="save-pin" onClick={savePin}>
                  Save
                </div>
              </div>
            </div>
            <div class="sec-2">
              <input
                placeholder="Add your item"
                type="text"
                class="new-pin-input"
                id="pin-title"
              />
              <input
                placeholder="Tell everyone what your item is about"
                type="text"
                class="new-pin-input"
                id="pin-description"
              />
              <input
                placeholder="Add your name"
                type="text"
                class="new-pin-input"
                id="pin-destination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
