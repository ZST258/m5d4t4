const htmlDoor=`
<!DOCTYPE html>
<html lang="zh">
 <head> 
  <meta charset="utf-8" /> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1" /> 
  <title>云霄日榜</title>
  <link href="https://mv.zst258.repl.co/css/jquery.fancybox.min.css" rel="stylesheet" /> 
  <link href="https://mv.zst258.repl.co/assets/fonts/feather-font/css/iconfont.css" rel="stylesheet" /> 
  <link href="https://mv.zst258.repl.co/assets/plugins/flag-icon-css/css/flag-icon.min.css" rel="stylesheet" /> 
  <link href="https://mv.zst258.repl.co/assets/plugins/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" /> 
  <link href="https://mv.zst258.repl.co/css/app_noble.css?v=4.0.12" rel="stylesheet" /> 
  <link rel="stylesheet" href="https://mv.zst258.repl.co/css/owl.carousel.min.css" /> 
  <link rel="stylesheet" href="https://mv.zst258.repl.co/css/owl.theme.default.min.css" /> 
  <link href="https://mv.zst258.repl.co/css/plyr.css?v=4.0.12" rel="stylesheet" /> 
  <link href="https://mv.zst258.repl.co/css/app.css?v=4.0.12" rel="stylesheet" type="text/css" />  
  <link rel="icon" href="https://mv.zst258.repl.co/icon.png" type="image/png">
            <style>
			.loading {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: white;
				z-index: 10000;
			}
			.loading-wrapper {
				position: relative;
				top: 50%;
				transform: translateY(-50%);
				text-align: center;
			}
			.loading img {
				display: block;
				margin: 0 auto;
			}
			h4.loading-text {
  				position: relative;
  				margin-top: 10px;
  				text-align: center;
			}
		</style>
		<script type="text/javascript">
		window.onload = function() {
  			var loading = document.querySelector('.loading');
  			loading.style.display = 'none';
		};
		</script>
 </head>
  
   <style>
    .main-wrapper {
         max-width: 90%;
         margin: 0 auto;
    }
    body {
  		background-image: url("https://mv.zst258.repl.co/background.jpg");
  		background-repeat: no-repeat;
  		background-size: cover;
		background-attachment: fixed;
    }
    h3 {
       color: black;
       text-align: center;
    }
  </style> 
<script type="text/javascript" src="https://mv.zst258.repl.co/js/jquery-latest.js"></script> 
 <body data-base-url="https://mv.zst258.repl.co">
  <div class="loading">
	<div class="loading-wrapper">
		<img src="https://mv.zst258.repl.co/assets/images/loading.gif" alt="Loading GIF" width="400" height="300">
		<h4 class="loading-text">正在检索中，请稍后</h4>
	</div>
  </div>
  <script type="text/javascript" src="https://mv.zst258.repl.co/js/popper.min.js"></script> 
  <script type="text/javascript" src="https://mv.zst258.repl.co/js/bootstrap.min.js"></script> 
  <script type="text/javascript" src="https://mv.zst258.repl.co/js/lazysizes.min.js"></script>
  <script type="text/javascript" src="https://mv.zst258.repl.co/js/lazysizes.min.js"></script> 
  <div class="main-wrapper" id="app"> 

   <!-- Modal --> 
   <style>
    a {
        text-decoration: none;
    }
    .page-content {
         padding: 0 20px;
         margin: 0 auto;
    }
    .category-page {
        opacity:0.85;
	  border-radius: 4px;
    }
    .text-center {
         padding: 0 20px;
         margin: 0 auto;
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
    .instruction-text{
        font-size: 1.2rem;
        color: #fff !important;
    }
    .cv-archive {
        opacity:0.85;
        background-color:white;
        margin-top: 15px;
        margin: 10px auto;
        border-radius: 12px;
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
 .search-box {
  margin-top:25px;
  border: 2px solid #000;
  font-weight: bold;
  padding: 1px;
}
</style> 
   <div class="page-content">
    <div class="row"> 
     <div class="col-12 py-5 text-white cv-archive mb-3"> 
      <h3 class="cvtitle">云霄风云榜</h3>
      <div class="search-box">
    <form class="search-form" action="https://mv.zst258.repl.co/search/items" method="GET">
      <div class="input-group">
        <input type="text" class="form-control" id="search-input" name="wd" placeholder="输入关键字搜索" value="">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit">搜索</button>
        </div>
      </div>
    </form>
   </div> 
     </div> 
    </div> 
    <div class="col-12"> 
     <div class="card-deck" id="results">
     </div>
     <script>
	const results = document.getElementById('results');
	const children = results.children;

	// 循环遍历所有子元素
	for (let i = 0; i < children.length; i++) {
  	// 将每个子元素的 class 值更改为 'category-page video-list-item col-xl-3 col-sm-6 col-12'
  	children[i].classList.remove('col-6', 'mb-2', 'px-0', 'px-md-1');
  	children[i].classList.add('col-12');}
    </script> 
    </div>
 
   </div> 
   <hr /> 
  </div>  
  <script type="text/javascript" src="https://mv.zst258.repl.co/js/jquery.fancybox.min.js"></script> 
  <script type="text/javascript" src="https://mv.zst258.repl.co/js/owl.carousel.min.js"></script> 
  <script type="text/javascript" src="https://mv.zst258.repl.co/assets/plugins/feather-icons/feather.min.js"></script> 
  <script type="text/javascript" src="https://mv.zst258.repl.co/assets/js/template.js"></script> 
  <script src="https://mv.zst258.repl.co/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script> 
<script>
function copyToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('已复制到剪贴板');
}
</script>
<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-7YZPR1M4EC');
</script>
<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6SX3CRM41M');
</script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname; // 获取当前窗口的路径

    var links = document.querySelectorAll('.pagination a'); // 获取所有带有链接的<a>元素

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var url = link.getAttribute('href');
      // 创建 URL 对象
      var urlObj = new URL(url);
	// 获取 URLSearchParams 对象
      var searchParams = urlObj.searchParams;
      // 将 URLSearchParams 对象转换为字符串
      var searchParamsString = searchParams.toString();
      var currentUrl = "https://mv.zst258.repl.co"+currentPage+"?"+searchParamsString;  
      // 使用当前窗口的路径替换链接的路径部分
      link.setAttribute('href', currentUrl);
    }
  });
</script>
 </body>
</html>
`;
function CreateHtml(code0){
const html = `
<!doctype html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="code" content="${code0}">  
    <meta property="og:locale" content="zh" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <link rel="dns-prefetch" href="https://gia.cloudkingzst.xyz">
    <link rel="shortcut icon" type="image/png" href="https://gia.cloudkingzst.xyz/wp-content/uploads/2021/12/cropped-图片1-1-1.png">

    <title>云霄资料库</title>
    <link href="https://mv.zst258.repl.co/css/jquery.fancybox.min.css" rel="stylesheet">
    <link href="https://mv.zst258.repl.co/assets/fonts/feather-font/css/iconfont.css" rel="stylesheet" />
    <link href="https://mv.zst258.repl.co/assets/plugins/flag-icon-css/css/flag-icon.min.css" rel="stylesheet" />
    <link href="https://mv.zst258.repl.co/assets/plugins/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" />
    <link href="https://mv.zst258.repl.co/css/app_noble.css?v=4.0.12" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="stylesheet" href="https://mv.zst258.repl.co/css/owl.carousel.min.css">
    <link rel="stylesheet" href="https://mv.zst258.repl.co/css/owl.theme.default.min.css">
    <link href="https://mv.zst258.repl.co/css/app.css?v=4.0.12" rel="stylesheet">
    <style>
        .loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            z-index: 10000;
        }
        .loading-wrapper {
            position: relative;
            top: 40%;
            transform: translateY(-50%);
            text-align: center;
        }
        .loading img {
            display: block;
            margin: 0 auto;
            width: 400px;
            height: 300px;
        }
        h2.loading-text {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -20px;
            margin-top: 10px;
        }
    </style>
    <script>
     window.onload = function() {
       var loading = document.querySelector('.loading');
       loading.style.display = 'none';
     };
    </script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/api/magnet?code=${code0}" defer></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/api/rate?code=${code0}" defer></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/api/videoUrl?code=${code0}" defer></script>
    <script>
	function copyToClipboard(text) {
    		const el = document.createElement('textarea');
  		el.value = text;
  		document.body.appendChild(el);
  		el.select();
  		document.execCommand('copy');
  		document.body.removeChild(el);
  		alert('已复制到剪贴板');
      }
    </script> 
</head>
<body data-base-url="mv.zst258.repl.co">
    <div class="loading">
	<div class="loading-wrapper">
		<img src="https://mv.zst258.repl.co/assets/images/loading.gif" alt="Loading GIF" >
		<h4 class="loading-text">正在检索中，请稍后</h4>
	</div>
    </div>
    <script src="https://mv.zst258.repl.co/api/info?code=${code0}"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/js/popper.min.js"></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/js/lazysizes.min.js"></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/js/lazysizes.min.js"></script>  
    <div class="main-wrapper" id="app">        
    <div class="page-wrapper">
    <nav class="navbar">
    <div class="navbar-content px-1 px-md-4 align-items-center">
        <div id="t1_buttons" class="row my-3 p-1 d-none d-md-block"></div>
<form class="search-form" action="https://mv.zst258.repl.co/search/items" method="GET" onsubmit="handleSearch(event)">
    <div class="input-group">
        <div class="input-group-prepend">
            <div class="input-group-text">
                <i data-feather="search"></i>
            </div>
        </div>
        <input type="text" class="form-control" id="navbarForm" name="wd" placeholder="输入关键字搜索" value="">
    </div>
</form>
<script>
    function handleSearch(event) {
        event.preventDefault(); // 阻止默认提交行为
        const code = document.getElementById('navbarForm').value;
        const url = \`https://mv.zst258.repl.co/search/items?wd=\${code}\`;
        window.location.href = url;
    }
</script>
        <ul class="navbar-nav">
            <li class="nav-item dropdown nav-apps d-flex d-md-none">
                <a class="nav-link dropdown-toggle" href="#" id="searchForm" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i data-feather="search"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="searchForm">  
                    <div class="dropdown-body">
                        <form class="mobile-search-form" action="https://mv.zst258.repl.co/search/items" method="GET">
                            <div class="input-group">
                                <input type="text" class="form-control" id="navbarForm" name="wd" placeholder="输入关键字搜索" value="">
                                <div class="">
                                    <button class='p-1  rounded btn btn-primary' type="submit"><i data-feather="search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </li>           
        </ul>
    <div id="popBod0" class="slide_up_noti_content" style="display: none;">
    </div>
    <div id="popBod1" class="slide_up_noti_content" style="display: none;">
    </div>
<!-- 渲染弹窗，页面渲染完成后再开始渲染 -->
<script type="text/javascript" src="https://mv.zst258.repl.co/js/comment-door.js" defer></script>
<script type="text/javascript" src="https://mv.zst258.repl.co/js/videoButton-door.js" defer></script>
<script type="text/javascript" src="https://mv.zst258.repl.co/js/comments.js" defer></script> 
<script type="text/javascript" src="https://mv.zst258.repl.co/js/videoButton.js" defer></script>
</nav>
<!-- Modal -->
    <div class="page-content">
    <div class="container-fluid p-0">
    <div class="row mb-4" id="results">       
            <div class="col-12 mb-3">
                <div id="single_below_info_desktop" class="my-3 p-1 d-none d-md-block mw-100 overflow-hidden"></div>
                <div id="single_below_info_mobile" class="my-3 p-1 d-md-none mw-100 overflow-hidden"></div>
            </div>
    <script type="text/javascript" src="https://mv.zst258.repl.co/js/searchResults.js"></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/js/jquery.fancybox.min.js"></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/js/owl.carousel.min.js"></script> 
    <script type="text/javascript" src="https://mv.zst258.repl.co/assets/plugins/feather-icons/feather.min.js"></script>
    <script type="text/javascript" src="https://mv.zst258.repl.co/assets/js/template.js"></script>
    <script src="https://mv.zst258.repl.co/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>

               <script>
      const title = document.querySelector(".card-body h2");
      const container = title.parentNode;
      const padding = getComputedStyle(container).paddingLeft;
      const maxWidth = container.clientWidth - 2 * parseFloat(padding);
      let fontSize = parseFloat(getComputedStyle(title).fontSize);
      const currentWidth = title.scrollWidth;

      if (currentWidth > maxWidth) {
        fontSize = fontSize * maxWidth / currentWidth;
        title.style.fontSize = fontSize / 16 + "rem";
      }

      function resizeTitle() {
        const newContainer = title.parentNode;
        const newPadding = getComputedStyle(newContainer).paddingLeft;
        const newMaxWidth =
          newContainer.clientWidth - 2 * parseFloat(newPadding);
        const newFontSize = fontSize * (newMaxWidth / maxWidth);
        if (newMaxWidth / maxWidth <= 1) {
           title.style.fontSize = newFontSize / 16 + "rem";
        }
      }

      window.addEventListener("resize", resizeTitle);

           </script>                     
</body>
</html>
`;
return html;
}
module.exports = {htmlDoor,CreateHtml};