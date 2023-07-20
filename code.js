const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const url = require('url'); 
const path = require('path');
const MyDomain = process.env.MyDomain || "mv-il0j.onrender.com";
const app = express()
const { htmlDoor, CreateHtml} = require('./htmlDoor');
const headers = {
   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.64',
};
app.get('/api/info', async (req, res) => {
  var code = req.query.code
  const url = `https://javmenu.com/zh/${code}`
  try {
    const response = await axios.get(url, { headers })
    const $ = cheerio.load(response.data)
    const ogImage = $('meta[property="og:image"]').attr('content')?$('meta[property="og:image"]').attr('content').replace('https://pics.vpdmm.cc', 'https://pics.dmm.co.jp'):'';
    const cardBody = $('div.card-body')
    const cardBodyStr = cardBody.toString();
    //不存在番号
       if (cardBodyStr.indexOf('<div class="filter-list isCollapsed px-1">') !== -1) {
        if (code == 'main') {
       const customCardBody = `
            <style>
            .card-body h2 {
  			background: -webkit-linear-gradient(#FFC300, #FF5733, #C70039, #900C3F, #581845);
  			-webkit-background-clip: text;
  			-webkit-text-fill-color: transparent;
                  white-space: nowrap;
		}
            img {
  			display: block;
  			margin: auto;
		}
            </style>
    		<div class="card-body">
                  <img src="https://gia.cloudkingzst.xyz/wp-content/uploads/2021/12/cropped-图片1-1-1.png" style="width: 150px; height: 150px; border-radius: 50%;">      		
    		</div>
           <div class="card-body">
                  <h2 style="text-align: center;">搜你所想-云霄搜索</h2>		
    	     </div>
  	`;
       resultHtml_Info = customCardBody
    }else{
    
          // 如果不存在搜索内容，则返回自定义的 card-body
  	const customCardBody = `
            <style>
            .card-body h2 {
  			background: -webkit-linear-gradient(#FFC300, #FF5733, #C70039, #900C3F, #581845);
  			-webkit-background-clip: text;
  			-webkit-text-fill-color: transparent;
		}
            img {
  			display: block;
  			margin: auto;
		}
            </style>
    		<div class="card-body">
                  <img src="https://gia.cloudkingzst.xyz/wp-content/uploads/2021/12/cropped-图片1-1-1.png" style="width: 150px; height: 150px; border-radius: 50%;">      		
    		</div>
           <div class="card-body">
                  <h2 style="text-align: center;">番号内容不存在！</h2>		
    	     </div>
  	`;
       resultHtml_Info = customCardBody
       }
   }else{
    var videolistItem = cardBody.find('div.video-list-item-tag-wrapper');
    if(!videolistItem.length) {
        videolistItem = $('<div>').addClass('video-list-item-tag-wrapper');
        cardBody.append(videolistItem);
    }
    const successSpan = cardBody.find('span.badge.bg-success');
    const primarySpan = cardBody.find('span.badge.bg-primary');
    const secondarySpan = cardBody.find('span.badge.bg-secondary');
  	successSpan.text('网友热评');
  	primarySpan.text('BT下载');
  	secondarySpan.text('在线观看');
    resultHtml_Info = cardBody.html()     
   }
   var resultHtml=''
   if (cardBody.text().includes('影片资料')) {
    var cardCode = cardBody.find('div.code').text().trim()
    // 假设 result.code 的值为 "番号: \n SSIS-686"
    const codePattern = /[\w-]+/;  // 匹配包含字母、数字和短横线的字符串
    const codeMatch = cardCode.match(codePattern);
    if (codeMatch) {
       cardCode = codeMatch[0];  // 将匹配到的结果赋值给 result.code
    }
    const cardTitle = $('h1.display-5 > strong').text().trim()
    const index = cardTitle.indexOf('免费在线看');
    const newTitle = cardTitle.substring(0, index).trim();
    const og_img= new URL(ogImage);
    resultHtml = {
        code: cardCode,
        title: newTitle,
        html: resultHtml_Info,
        img_url: ogImage,
        origin: og_img.origin
    }
    res.send(`var resultHtml = ${JSON.stringify(resultHtml)};
              var link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'image';
              link.href = '${ogImage}';
              document.head.appendChild(link);`);
    }else{
    resultHtml = {
        code: '',
        title: '',
        html: resultHtml_Info,
        img_url: '',
        origin: ''
    }
    res.send(`var resultHtml = ${JSON.stringify(resultHtml)};`);
  }  
  } catch (error) {
    console.error(error)
    res.status(500).send('服务器内部错误')
  }
})


app.get('/api/view', async (req, res) => {
  var code0 = req.query.code || 'main'
    res.send(CreateHtml(code0));
});
function jiemi(val) {
  for (e = '', r = '0x' + val.substr(0, 2) | 0, n = 2; val.length - n; n += 2) 
    e += '%' + ('0' + ('0x' + val.substr(n, 2) ^ r).toString(16)).slice(-2);
  return decodeURIComponent(e);
}
async function getMagnetLink(code) {
  return new Promise((resolve, reject) => {
    const term = code.toString().toUpperCase();
    axios.get(`https://18mag.net/search?q=${term}`)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const searchResults = $('tbody tr');
        let selectedResult = null;

        searchResults.each((index, element) => {
          const linkElement = $(element).find('a');
          const sizeElement = $(element).find('td.td-size');
          const emailSpan = $(element).find('span.__cf_email__');
          const encodedEmail = emailSpan.attr('data-cfemail');
          let email = '';
          if (encodedEmail && typeof encodedEmail === 'string') {
            email = jiemi(encodedEmail);
          }
          const link = linkElement.attr('href');
          const size = sizeElement.text().trim();
          const sample = $(element).find('p.sample').text().trim();

          if (!selectedResult && email.includes('hhd800.com')) {
            selectedResult = {
              link,
              size,
            };
          }

          if (!selectedResult && email !== '') {
            selectedResult = {
              link,
              size,
            };
          }
        });

        // 如果所有结果没有符合条件的，选取第一个结果
        if (!selectedResult) {
          const firstResult = searchResults.first();
          const linkElement = firstResult.find('a');
          const sizeElement = firstResult.find('td.td-size');
          const link = linkElement.attr('href');
          const size = sizeElement.text().trim();
          selectedResult = {
            link,
            size,
          };
        }

        // 访问选定结果的链接，获取磁力链接
        const prelink = selectedResult.link;
        axios.get(`https://18mag.net${prelink}`)
          .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const magnetInput = $('#input-magnet');
            const magnetLink = magnetInput.attr('value').trim();
            resolve(magnetLink);
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
}
app.get('/api/magnet', async (req, res) => {
  const code = req.query.code;

  if (code) {
    getMagnetLink(code)
      .then(async (magnetLink) => {
        const magnetCache = await magnetLink;
        res.send(`var magnetLink = ${JSON.stringify(magnetLink)}`);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Failed to get magnet link.');
      });
  } else {
    res.status(400).send('Missing code parameter.');
  }

});
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 3000, // 5秒
  max: 1, // 限制1个请求
  message: { score: 429 },
});
app.use('/api/rate', limiter);

app.get('/api/rate', async (req, res) => {
  const code = req.query.code;
  const rateUrl = `https://javdb008.com/search?q=${code}&f=all`;

  try {
    const rateResponse = await axios.get(rateUrl, { headers });
    const $ = cheerio.load(rateResponse.data);
    const firstItem = $('.movie-list .item').first();
    const scoreText = firstItem.find('.score .value').text().trim();
    const detailUrl = 'https://javdb008.com' + firstItem.find('a').attr('href').trim() + '/reviews/lastest';

    const detailResponse = await axios.get(detailUrl, { headers });
    const $$ = cheerio.load(detailResponse.data);
    const reviewItems = $$(".review-items .review-item");
    const reviews = reviewItems.map((i, el) => {
      if(i<3){
      const label = $$(el).find("span.likes-count").text().trim();
      const value = $$(el).find("div.content").text().trim();
      return { label, value };
      }
    }).get();

    const result = {
      score: scoreText,
      detailUrl: detailUrl,
      reviews: reviews,
    };
    res.send(`var resultContent = ${JSON.stringify(result)}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});
app.get('/api/videoUrl', async (req, res) => {
  const code = req.query.code;
  const url = `https://netflav.com/search?type=title&keyword=${code}`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.64',
  };  
  try {
    const response = await axios.get(url, { headers });
    const $ = cheerio.load(response.data);
    const videoId = $('.video_grid_container .grid_cell a[href^="/video?id="]').first().attr('href').split('=')[1];
    const videoUrl = `https://netflav.com/api98/video/v2/retrieveVideo/${videoId}`;
    const videoResponse = await axios.get(videoUrl, { headers });
    const data = videoResponse.data;
    const urlPattern = /(https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?)/g;
    const myStr = data.result;
    const urls = myStr.match(urlPattern);
    const filteredUrls = urls.filter(url => !url.endsWith('.jpg'));
    const qualityUrls = filteredUrls.filter(url => {
  	const host = new URL(url).hostname;
  	return host !== 'www.avple.video' && host !== 'asianclub.tv' && host !== 'google.com';
    });
    res.send(`var filteredUrls = ${JSON.stringify(qualityUrls)}`);
  } catch (error) {
    res.send(`var filteredUrls = []`);
  }

});

const handleInfos = async (req, res) => {
  const infos = req.params.infos;
  const theStr = req.params.theStr;
  const wd = req.query.wd || '';
  const page = req.query.page || '';
  const path = req.path.includes('/search') ? `/search?wd=${wd}`: req.path;
  const url = wd?`https://javmenu.com/zh${path}`:`https://javmenu.com/zh${path}?order=publish`;
    if (infos !== 'series' && infos !== 'director' && infos !== 'publisher' && infos !== 'maker' && infos !== 'genre' && infos !== 'actress' && infos !== 'code' && infos !== 'search' && infos !== 'api') {
  	res.status(500).send('服务器错误');
      return;
    }
  //添加page负载
   let pageUrl;
  // 检查 URL 是否存在查询参数
  const hasPayload = url.includes("?");
  if (hasPayload) {
    pageUrl = page?`${url}&page=${page}`:url;
  } else {
    pageUrl = page?`${url}?page=${page}`:url;
  }
    try {
    const response = await axios.get(pageUrl, { headers });
    const $ = cheerio.load(response.data);
    const $elements = $('div.card-deck.row > div.category-page.video-list-item.col-xl-3.col-sm-6.col-6.mb-2.px-0.px-md-1');
    const searchItems = $('div.card-deck.row > div.category-page.video-list-item.col-xl-3.col-sm-6.col-12.mb-2');
    const actress = $('h2.text-center.font-weight-bold.my-4 > span.text.color-light-yellow').text().trim();
    //修改块中的元素
// 合并 $elements 和 searchItems，然后进行修改
const $items = $elements.add(searchItems);
$items.find('video.video_preview, div.watermark-logo').remove();

$items.each((i, el) => {
  const $el = $(el);
  var title = $el.find('h5.card-title.text-dark').text().trim();
  if (title.endsWith('  New')) {
    title = title.replace(/ {2}New$/, '');
  }

  const aHref = $el.find('a').attr('href');
  const newHref = `https://${MyDomain}/api/view?code=${title}`;
  $el.find('a').attr('href', newHref);

  const img = $el.find('img.card-img-top.embed-responsive-item.lazyload');
  const src = img.attr('src');
  const datasrc = img.attr('data-src');
  const newSrc = src.replace('https://javmenu.com/assets/images/', `https://${MyDomain}/assets/images/`);
  const newdataSrc = datasrc.replace('https://pics.vpdmm.cc', 'https://pics.dmm.co.jp');
  img.attr('src', newSrc).attr('data-src',newdataSrc).removeAttr('onerror').attr('alt', title);
});

    // 将整个选择集转换为 HTML 字符串，然后加载到新的 Cheerio 对象 $1 中
    const html = $items.map((i, el) => $.html(el)).get().join('\n');
    const $1 = cheerio.load(htmlDoor);
    const $title = $1('h3.cvtitle');
    $1('title').text(`${actress}`+'的影片');
    // 选择要插入 HTML 块的元素
    const targetElement = $1('#results');
    targetElement.html(html);
    //需要分别处理的代码块
    if(infos == 'genre'){
    	$title.replaceWith('<h3 class="cvtitle">主题为<span class="text color-light-green">' + actress + '</span>的影片</h3>');
    }else if(infos == 'series'){
    	$title.replaceWith('<h3 class="cvtitle"><span class="text color-light-green">' + actress + '</span>系列</h3>');
    }else{
    	$title.replaceWith('<h3 class="cvtitle"><span class="text color-light-green">' + actress + '</span>的作品</h3>');
    }
    res.status(200).send($1.html());
  } catch (error) {
    console.error(error);
    res.status(500).send('服务器错误');
  }

};
const jsFolderPath = path.join(__dirname, 'js');
const cssFolderPath = path.join(__dirname, 'css');
const assetsFolderPath = path.join(__dirname, 'assets');
const rootFolderPath = path.join(__dirname, '');
app.use('/assets', express.static(assetsFolderPath));
app.use('/', express.static(rootFolderPath));
app.get('/js/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(jsFolderPath, filename);
  res.set('Content-Type', 'application/javascript');
  res.sendFile(filePath);
});
app.get('/css/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(cssFolderPath, filename);
  res.set('Content-Type', 'text/css');
  res.sendFile(filePath);
});
// 定义路由处理程序
app.get('/censored/:infos/:theStr',  handleInfos);
app.get('/:infos/:theStr',  handleInfos);
app.listen(3000, () => {
   console.log('App listening on port 3000!');
});
