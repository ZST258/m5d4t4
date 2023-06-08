      // 使用 JavaScript 将数据渲染为 HTML 页面
      var resultVB = document.getElementById("popBod1");
        resultVB.setAttribute("id", "VideoButton-b");
        var vedioBDiv = document.createElement("div");
        vedioBDiv.className = "slide_up_scroll";      
        if(filteredUrls.length > 0 ){
        vedioBDiv.innerHTML = `
      <style>
    .slide_up_scroll div p {
        color: #f6d99d;
        text-align: center;
        line-height: 32px;
    }

    .slide_up_noti_content a {
        text-align: center;
    }

    .bottom-p {
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 24px;
    }

    .btn-gold{
        background: #f6d99d;
        background: -webkit-gradient(linear,left top,right top,from(#e2b271),to(#f6d99d));
        background: -webkit-linear-gradient(left,#e2b271,#f6d99d);
        background: -o-linear-gradient(left,#e2b271 0,#f6d99d 100%);
        color: #5c3301;
        font-size: 17px;
        border-radius: 8px;
        margin: 8px 0;
    }
textarea {
       background-color: dimgrey;
       border-radius: 6px;
}
@media (max-width: 768px) {
  .instruction-text {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
}
a {
   text-decoration: none;
}

.slide_up_noti_background {
        background: rgba(0, 0, 0, 0.65);
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 998;
}

.slide_up_noti_overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 999;
}

.slide_up_noti_container {
        /* position: relative; */
        height: 100%;
        width: 100%;
}

    .slide_up_noti_content {

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: #222;
        box-shadow: 0 2px 25px 10px rgb(0 0 0 / 30%);
        padding: 40px 40px 30px;
        color: #fff;
        border-radius: 10px;
        max-width: 480px;
        min-width: 360px;
        z-index: 99999;
    }

.ui.button {
        cursor: pointer;
        display: inline-block;
        min-height: 1em;
        outline: 0;
        border: none;
        vertical-align: baseline;
        background: #e0e1e2 none;
        color: rgba(0, 0, 0, .65);
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        margin: 0 0.25em 0 0;
        padding: 0.78571429em 1.5em 0.78571429em;
        text-transform: none;
        text-shadow: none;
        font-weight: 700;
        line-height: 1em;
        font-style: normal;
        text-align: center;
        text-decoration: none;
        border-radius: 0.28571429rem;
        -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: opacity .1s ease, background-color .1s ease, color .1s ease, background .1s ease, -webkit-box-shadow .1s ease;
        transition: opacity .1s ease, background-color .1s ease, color .1s ease, background .1s ease, -webkit-box-shadow .1s ease;
        transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
        transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease, -webkit-box-shadow .1s ease;
        will-change: '';
        -webkit-tap-highlight-color: transparent;
}

    button,
    input {
        overflow: visible;
    }

    .slide_up_noti_content {
        background: #1e1e24;
        border-radius: 10px;
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);
    }

    .instruction-text{
        font-size: 1.2rem;
        color: #fff !important;
    }

    @media screen and (max-width:768px){
        .slide_up_noti_content{
            min-width: auto;
            width: 90%;
            padding: 20px;
        }
        .instruction-text{
            font-size: 1rem;
        }

    }
      </style>
    	<div style="display: block;">
      	<div class="text-center d-flex justify-content-center align-items-center mb-5">
        	<img class="mr-2" src="https://gia.cloudkingzst.xyz/wp-content/uploads/2021/12/cropped-图片1-1-1.png" alt="newfreejavbt" width="auto" height="40">
        	<h3>在线观看线路</h3>
      	</div>
      	<div class="text-left" id="getVideoButton">
        	<p class="mb-3" style="font-size: 24px;font-weight: 600;line-height: 48px;">找到了${filteredUrls.length}个线路</p>
        	
      	</div>
    		</div>
  	</div>
    </div>
      <div style="text-align: center;">
    	<button class="ui button btn-known" style="background: rgba(255, 255, 255,0); color: #e2b271; border: 1px solid #e2b271;font-size: 17px; border-	radius: 8px; margin: 8px 0;" id="VideoButton-a">等会再看</button>
  	</div>
  `;
  }else{
vedioBDiv.innerHTML = `
      <style>
    .slide_up_scroll div p {
        color: #f6d99d;
        text-align: center;
        line-height: 32px;
    }

    .slide_up_noti_content a {
        text-align: center;
    }

    .bottom-p {
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 24px;
    }

    .btn-gold{
        background: #f6d99d;
        background: -webkit-gradient(linear,left top,right top,from(#e2b271),to(#f6d99d));
        background: -webkit-linear-gradient(left,#e2b271,#f6d99d);
        background: -o-linear-gradient(left,#e2b271 0,#f6d99d 100%);
        color: #5c3301;
        font-size: 17px;
        border-radius: 8px;
        margin: 8px 0;
    }
textarea {
       background-color: dimgrey;
       border-radius: 6px;
}
@media (max-width: 768px) {
  .instruction-text {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
}
a {
   text-decoration: none;
}

.slide_up_noti_background {
        background: rgba(0, 0, 0, 0.65);
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 998;
}

.slide_up_noti_overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 999;
}

.slide_up_noti_container {
        /* position: relative; */
        height: 100%;
        width: 100%;
}

    .slide_up_noti_content {

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: #222;
        box-shadow: 0 2px 25px 10px rgb(0 0 0 / 30%);
        padding: 40px 40px 30px;
        color: #fff;
        border-radius: 10px;
        max-width: 480px;
        min-width: 360px;
        z-index: 99999;
    }

.ui.button {
        cursor: pointer;
        display: inline-block;
        min-height: 1em;
        outline: 0;
        border: none;
        vertical-align: baseline;
        background: #e0e1e2 none;
        color: rgba(0, 0, 0, .65);
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        margin: 0 0.25em 0 0;
        padding: 0.78571429em 1.5em 0.78571429em;
        text-transform: none;
        text-shadow: none;
        font-weight: 700;
        line-height: 1em;
        font-style: normal;
        text-align: center;
        text-decoration: none;
        border-radius: 0.28571429rem;
        -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: opacity .1s ease, background-color .1s ease, color .1s ease, background .1s ease, -webkit-box-shadow .1s ease;
        transition: opacity .1s ease, background-color .1s ease, color .1s ease, background .1s ease, -webkit-box-shadow .1s ease;
        transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
        transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease, -webkit-box-shadow .1s ease;
        will-change: '';
        -webkit-tap-highlight-color: transparent;
}

    button,
    input {
        overflow: visible;
    }

    .slide_up_noti_content {
        background: #1e1e24;
        border-radius: 10px;
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);
    }

    .instruction-text{
        font-size: 1.2rem;
        color: #fff !important;
    }

    @media screen and (max-width:768px){
        .slide_up_noti_content{
            min-width: auto;
            width: 90%;
            padding: 20px;
        }
        .instruction-text{
            font-size: 1rem;
        }

    }
      </style>
    	<div style="display: block;">
      	<div class="text-center d-flex justify-content-center align-items-center mb-5">
        	<img class="mr-2" src="https://gia.cloudkingzst.xyz/wp-content/uploads/2021/12/cropped-图片1-1-1.png" alt="newfreejavbt" width="auto" height="40">
        	<h3>在线观看</h3>
      	</div>
      	<div class="text-left" id="getVideoButton">
        	<p class="mb-3" style="font-size: 24px;font-weight: 600;line-height: 48px;">未找到在线播放链接</p>
      	</div>
    		</div>
  	</div>
    </div>
      <div style="text-align: center;">
    	<button class="ui button btn-known" style="background: rgba(255, 255, 255,0); color: #e2b271; border: 1px solid #e2b271;font-size: 17px; border-	radius: 8px; margin: 8px 0;" id="VideoButton-a">我知道了</button>
  	</div>
  `;
  } 
  resultVB.appendChild(vedioBDiv);