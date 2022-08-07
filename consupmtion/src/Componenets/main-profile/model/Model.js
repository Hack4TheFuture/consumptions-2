import React from 'react'
import './Model.css';

function Model() {

    let pin_img_blob = null;
    document.querySelector("#upload-img").addEventListener("change", event => {
        if (event.target.files && event.target.files[0]) {
            if (/image\/*/.test(event.target.files[0].type)) {
                const reader = new FileReader();
                reader.onload = function () {
                    const newImg = new Image();
                    newImg.src = reader.result;
                    pin_img_blob = reader.result;

                    newImg.onload = function () {
                        const modelPin = document.querySelector(".add-pin-model .model-pin");
                        // newImg.classList.add(".pin-max-width");
                        document.querySelector(".add-pin-model .pin-image").appendChild(newImg);
                        document.querySelector("#upload-img-lable").style.display = "none";
                        modelPin.style.display = "block";
                        // if(
                        //     newImg.getBoundingClientRect().width < newImg.parentElement.getBoundingClientRect().width ||
                        //     newImg.getBoundingClientRect().height < newImg.parentElement.getBoundingClientRect().height
                        // ) {
                        //     newImg.classList.remove(".pin-max-width"); 
                        //     newImg.classList.add(".pin-max-height");
                        // }
                        modelPin.style.opacity = 1;
                    }
                }

                reader.readAsDataURL(event.target.files[0])
            }
        }
        document.querySelector("#upload-img").value = "";
    });

    document.querySelector(".save-pin").addEventListener('click', () => {
        const userData = {
            author: "Mansur",
            board: "board",
            title: document.querySelector("#pin-title").value,
            description: document.querySelector("#pin-description").value,
            destination: document.querySelector("#pin-destination").value,
            img_blob: pin_img_blob,
            pin_size: document.querySelector("#pin-size").value
        }
        console.log(userData);
    })

    return (
        <div className='model-container-main'>
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
                                            <i class="fa-solid fa-up" id="up-arrow-icon"></i>
                                        </div>
                                        <div>Click to upload</div>
                                        <div>Recommendation: use high-quality jpg files less than 20 MB</div>
                                    </div>
                                </div>
                                <input type="file" name="upload-img" id="upload-img" />
                            </label>
                            <div class="model-pin">
                                <div class="pin-image">
                                    {/* <img src="" alt="pin-image"> */}
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
                                    <option value="" disabled selected>Select
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </option>
                                </select>
                                <div class="save-pin">Save</div>
                            </div>
                        </div>
                        <div class="sec-2">
                            <input placeholder="Add your title" type="text" class="new-pin-input" id="pin-title" />
                            <input placeholder="Tell everyone what your pin is about" type="text" class="new-pin-input" id="pin-description" />
                            <input placeholder="Add a destination link" type="text" class="new-pin-input" id="pin-destination" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model