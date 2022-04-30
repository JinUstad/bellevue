import React from 'react'
import video from '../Assests/videotour.jpg'
function Video() {

    // const playVideo = () => {
    //     document.getElementById('iframeVideo').style.display = "block";
    //     document.getElementById('btnClose').style.display = "block";
    // }
    // const closeBtn = () =>{
    //     document.getElementById('iframeVideo').style.display = "none";
    //     document.getElementById('btnClose').style.display = "none";
    // }

    // document.getElementById('videoPaly').addEventListener('click', function () {
    //     document.getElementById('yujikThemeVideoPopUpParent_27_4_22').style.display = "block";
    // });

    // document.getElementById('videoPalyPopUpClose').addEventListener('click', function () {
    //     document.getElementById('yujikThemeVideoPopUpParent_27_4_22').style.display = "none";
    // });
function videoPalyPopUpClose(){
    document.getElementById('yujikThemeVideoPopUpParent_27_4_22').style.display = "none";
}
function videoPaly(){
    document.getElementById('yujikThemeVideoPopUpParent_27_4_22').style.display = "block";
}
    return (
        <div>
            {/* video pop up  */}
            <div id='yujikThemeVideoPopUpParent_27_4_22'>
                <div className='yujikThemePop_27_4_22'>
                    <a onClick={videoPalyPopUpClose} id="videoPalyPopUpClose" style={{ fontSize: "18px", color: "white", position: "absolute", fontSize: "23px", cursor: "pointer", right: "20px", top: "17.7px" }}>&times;</a>
                    <div className='yujikThemePopVideoCon_27_4_22'>
                        <iframe className="yujikiframeVideoPopUp" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                </div>
            </div>
            {/* video pop has been finished  */}
            <div className='videoTours' >
                <img src={video} />
                <div className='imgVideo' id="videoPaly" onClick={videoPaly}>
                    <h2 id='btnClose' /* onClick={closeBtn} */>X</h2>

                    <h1>Video Tour</h1>
                    <i className='fa fa-play' /* onClick={playVideo} */ ></i>
                </div>

                <div className='video_container ' id='iframeVideo' style={{ display: 'none' }}>
                    <iframe className='videoSec' width='853' height='395'
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>


                </div>
            </div>
        </div>
    )
}

export default Video