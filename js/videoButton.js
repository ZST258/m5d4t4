      // 使用 JavaScript 将数据渲染为 HTML 页面
      var comsDiv = document.getElementById("getVideoButton");
      if(filteredUrls.length){
      for (var i = 0; i < filteredUrls.length; i++) {
        var videoDiv = document.createElement("div");
        videoDiv.className = "videoButton";
        videoDiv.innerHTML = `
  			<div class="videoButton-textbox">
                    <a href="${filteredUrls[i]}" class="myiframeLink">
    				<p class="instruction-text">线路${i}</p></a>
  		      </div>
        `;
        comsDiv.appendChild(videoDiv);
      }}else{
        var videoDiv = document.createElement("div");
        videoDiv.className = "videoButton";
        videoDiv.innerHTML = `
        <p class="mb-3" style="font-size: 20px;font-weight: 600;line-height: 48px; text-align: center;">资源暂无线路</p>
         `;
        comsDiv.appendChild(videoDiv);
      }
  const iframelinks = document.querySelectorAll('.myiframeLink');
  iframelinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      window.open(href, '_blank');
    });
  });
  const badgeW = document.querySelector('span.badge.bg-secondary');
  const notiA = document.getElementById("VideoButton-b");
  if(badgeW){
      badgeW.classList.remove('d-none', 'd-md-inline-block');
  	badgeW.addEventListener('click', () => {
      	notiA.style.display = 'block';
  	});
  }else{ //没有就创建一个按钮
           // 创建一个span元素
      const spanE3 = document.createElement('span');
  	// 添加类名
  	spanE3.classList.add('badge', 'bg-secondary', 'text-white');
  	// 添加文本
  	spanE3.textContent = '在线观看';
      document.querySelector('div.video-list-item-tag-wrapper').appendChild(spanE3);
  	spanE3.addEventListener('click', () => {
      	notiA.style.display = 'block';
  	});
  }
  const closeButton_V = document.getElementById("VideoButton-a");
  closeButton_V.addEventListener('click', () => {
  	notiA.style.display = 'none';
  });
  const videoCode = document.querySelector('meta[name="code"]').getAttribute('content');
 if(videoObject.path != null){
   const videoSource = document.getElementById("myVideo");
   const spanE4 = document.createElement('span');
   spanE4.classList.add('badge', 'bg-success', 'text-white');
   spanE4.textContent = '云霄影视已收录';
   spanE4.addEventListener('click', function() {
     videoSource.style.display = videoSource.style.display === "none" ? "block" : "none";
     videoSource.src = videoSource.style.display === "none" ? "" : videoObject.rawurl;
     const imgElement = document.querySelector('.card-img-top.embed-responsive-item.lazyloaded');
     imgElement.style.display = videoSource.style.display === "none" ? "block" : "none";
   });
   document.querySelector('div.video-list-item-tag-wrapper').appendChild(spanE4);
 }else{
   const spanE4 = document.createElement('span');
   spanE4.classList.add('badge', 'bg-secondary', 'text-white');
   spanE4.textContent = '云霄影视未收录';
   document.querySelector('div.video-list-item-tag-wrapper').appendChild(spanE4);
 }

