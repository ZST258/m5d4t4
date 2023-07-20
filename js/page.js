 const prevButton = document.getElementById("prev-page-button");
  const nextButton = document.getElementById("next-page-button");
  let prevPage = 0
  let nextPage = 0
  let prevPageURL = ''
  let nextPageURL = ''
  // 获取当前URL中的所有参数
  let urlParams = new URLSearchParams(window.location.search);

  // 判断是否含有名为"page"的参数
  if (urlParams.has("page")) {
    var currentPage = parseInt(urlParams.get("page"));
        // 如果当前页是首页，则禁用上一页按钮

    if (currentPage === 1 || isNaN(currentPage)) {
      prevButton.disabled = true;
      
    }
    	// 重新生成上一页和下一页的链接
    	prevPage = currentPage - 1;
    	nextPage = currentPage + 1;
    	prevPageURL = `${window.location.pathname}?${urlParams.toString().replace(`page=${currentPage}`, `page=${prevPage}`)}`;
    	nextPageURL = `${window.location.pathname}?${urlParams.toString().replace(`page=${currentPage}`, `page=${nextPage}`)}`;
  } else {
    // 如果没有名为"page"的参数，说明是首页，则禁用上一页按钮
    prevButton.disabled = true;
    currentPage = 1;
    nextPageURL = `${window.location.pathname}?${urlParams.toString()}&page=2`
  }

    if(prevPage === 1){
	prevPageURL=`${window.location.pathname}?${urlParams.toString().replace(`page=${currentPage}`, '')}`;
    }
    // 为按钮添加点击事件，实现页面跳转
    prevButton.addEventListener("click", function () {
      if (prevPage >= 1) {
        window.location.href = prevPageURL;
      }
    });

    nextButton.addEventListener("click", function () {
      window.location.href = nextPageURL;
    });	
