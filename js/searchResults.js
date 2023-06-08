      // 使用 JavaScript 将数据渲染为 HTML 页面
      var resultDiv = document.getElementById("results");
        var cardDiv = document.createElement("div");
        cardDiv.className = "col-md-9 px-0";
        cardDiv.innerHTML = `
<div class="tab-content col-12 mb-3" id="pills-tabContent">
    <img class="card-img-top embed-responsive-item lazyloaded" src="${resultHtml.img_url}" data-src="${resultHtml.img_url}" alt="${resultHtml.title}" style="display: display;">
    <video id="myVideo" class="card-img-top embed-responsive-item" playsinline controls style="display: none;">
      <source src="" type="video/mp4">
    </video>
</div>
  <div class="col-12 mb-3">
    <h1 class="display-5">
      <strong>${resultHtml.title}</strong></h1>
  </div>
  <div class="col-12 left-wrapper mb-3">
    <div class="card rounded">
      <div class="card-body">
       ${resultHtml.html}
    </div>
  `; 
  resultDiv.appendChild(cardDiv);

