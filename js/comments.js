      // 使用 JavaScript 将数据渲染为 HTML 页面
      var comsDiv = document.getElementById("getComments");
      if(resultContent.reviews.length){
      for (var i = 0; i < resultContent.reviews.length; i++) {
        var cardDiv = document.createElement("div");
        cardDiv.className = "comment";
        cardDiv.innerHTML = `
  			<div class="comment-textbox">
    				<textarea class="instruction-text" rows="3" cols="32" readonly>${resultContent.reviews[i].value}</textarea>
  		</div>
  		<div class="comment-info">
    			<div class="comment-icon">
      			<i class="fa fa-heart"></i>
    			</div>
    			<div class="comment-likes">
      			<span>${resultContent.reviews[i].label}</span>
    			</div>
  		</div>`;
        comsDiv.appendChild(cardDiv);
      }}else{
        var cardDiv = document.createElement("div");
        cardDiv.className = "comment";
        cardDiv.innerHTML = `
        <p class="mb-3" style="font-size: 20px;font-weight: 600;line-height: 48px; text-align: center;">资源暂无网友评论</p>
         `;
        comsDiv.appendChild(cardDiv);
        const textarea = document.querySelector('.instruction-text');
        if( textarea ){
	  if (window.innerWidth <= 768) {
  		textarea.cols = 20;
		} else {
  		textarea.cols = 32;
	  }}
      }
  const badgePrimary = document.querySelector('span.badge.bg-primary');
  if(badgePrimary){
  badgePrimary.setAttribute('onclick', 'copyToClipboard(magnetLink)');
  badgePrimary.classList.remove('d-none', 'd-md-inline-block');
  }else{ //没有就创建一个按钮
           // 创建一个span元素
      const spanEl = document.createElement('span');
  	// 添加类名
  	spanEl.classList.add('badge', 'bg-primary', 'text-white');
  	// 添加文本
  	spanEl.textContent = 'BT下载';
          spanEl.setAttribute('onclick', 'copyToClipboard(magnetLink)');
      document.querySelector('div.video-list-item-tag-wrapper').appendChild(spanEl);
  }

  const badgeSu = document.querySelector('span.badge.bg-success');
  const notiB = document.getElementById("comment-b");
  if(!badgeSu){
	// 创建一个span元素
      const spanE2 = document.createElement('span');
  	// 添加类名
  	spanE2.classList.add('badge', 'bg-success', 'text-white');
  	// 添加文本
  	spanE2.textContent = '网友热评';
      document.querySelector('div.video-list-item-tag-wrapper').appendChild(spanE2);
  	spanE2.addEventListener('click', () => {
      	notiB.style.display = 'block';
  	}); 
  }else{
  	badgeSu.addEventListener('click', () => {
      	notiB.style.display = 'block';
  	});
  }
  const closeButton = document.getElementById("comment-a");
  closeButton.addEventListener('click', () => {
  	notiB.style.display = 'none';
  });
