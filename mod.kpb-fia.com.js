function randomposts(){let e="https://api.kpb-fia.com/api-free/random-post-blogspot/index.php?site="+location.href;var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),JSON.parse(t.responseText,!0)["post-random"]+"?download=kpb"}$(".kpb-d").click(function(){var e=$(this).attr("name"),t=$(this).attr("kpb");localStorage.setItem("luu_id",e),$.ajax({type:"GET",url:"/feeds/posts/summary/"+e,data:{alt:"json"},dataType:"jsonp",success:function(e){if(e.entry){for(var n=0;n<e.entry.link.length;n++)if("enclosure"==e.entry.link[n].rel&&t==e.entry.link[n].type){var a=e.entry.link[n].href;localStorage.setItem("luu_get_link",a)}}}});var n=randomposts();setTimeout(function(){location.href=n},1)});var language_kpb="vi";function getParameterByName(e){var t=window.location.href,n=RegExp("[?&]"+(e=e.replace(/[\[\]]/g,"\\$&"))+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}const prhtml_kid=(e,t)=>document.getElementById(e).innerHTML=t;var save_kpb=localStorage.getItem("luu_get_link");const ar_soicial_vi=["Đ\xc2Y L\xc0 BƯỚC","H\xc3Y XEM KỸ VIDEO ĐỂ TR\xc1NH LỖI!!!","Theo D\xf5i C\xe1c Trang Mạng X\xe3 Hội Của Ch\xfang T\xf4i Để Tải Xuống Nh\xe9.","Đ\xe2y L\xe0 Bước Đầu Cho Việc Tải Xuống Của Bạn.","Đ\xe2y L\xe0 Miền Trang Đ\xedch.","LỖI! </br/> Vui L\xf2ng Tắt Chặn Quảng C\xe1o, JavaScript,..."],ar_soicial_en=["THIS IS THE STEP","WATCH THE VIDEO INSTRUCTIONS.","Follow Our Social Media Sites For Downloads.","This Is The First Step For Your Download.","This Is the Landing Page Domain.","ERROR! </br/> Please Disable Ad Blocking, JavaScript,..."];if("vi"==language_kpb)var ar_social=ar_soicial_vi;else var ar_social=ar_soicial_en;const data_social=`<style>.btn-xem-video {background-color: green;color: white;padding: 10px 20px;border: none;border-radius: 5px;cursor: pointer;}.btn-xem-video:hover {background-color: darkgreen;}</style><h1 style="text-align: center; display: none;"><b><span style="font-family: times; font-size: large;"><u style="background-color: #800180;"><span style="color: #01ffff;">&nbsp;Đ\xc2Y L\xc0 BƯỚC</span><span style="color: #fcff01;">(</span><span style="color: red;">1</span><span style="color: #ffa400;">/</span><span style="color: #04ff00;">2</span><span style="color: #fcff01;">)&nbsp;</span></u></span></b></h1><h6><center><b style="color: red;"> ${ar_social[1]}</b></center></h6><center class="btn-xem-pr"><button onclick="btnxemvideofc();" class="btn-xem-video">Bấm V\xe0o Đ\xe2y Để Xem</button></center><br /><br /><h3 style="text-align: center;"><span><span style="color: #2b00fe;">${ar_social[2]}</span> </span></h3><h3 style="text-align: center;"><span><span style="color: red;">${ar_social[3]}</span></span></h3><center id="show-heds"></center><br/><br/> `;var error=`<center><h1 style="color: red;">${ar_social[5]}</h1></center>`;function btnxemvideofc(){document.querySelector(".btn-xem-pr").innerHTML=' <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0" height="315" id="sebd" src="https://www.youtube.com/embed/OzNia5c-eQw" style="border: 6px dotted red;" title="YouTube video player" width="280"></iframe>'}"kpb"===getParameterByName("download")&&prhtml_kid("kpb-ple",null==save_kpb||"null"==save_kpb?error:data_social);var id_video_youtube=idvideoytgg(),telegram_kpbmod="https://t.me/kpbfiacom",telegram_api="https://t.me/apifree",telegram_kpbmod_gr="https://t.me/kpbmodgr",telegram_api_gr="https://t.me/kpb_gr";if(save_kpb.split("apiv23.php")[1])var telegram_cn=telegram_api,telegram_ai=telegram_api_gr;else if(site_dich("https://api.kpb-fia.com/check-user/kpbfia.php")==site_dich(save_kpb))var telegram_cn=telegram_api,telegram_ai=telegram_api_gr;else var telegram_cn=telegram_kpbmod,telegram_ai=telegram_kpbmod_gr;var vtcb=language_kpb;function open_lil(){if(4==ndyb.length)var e="https://youtu.be/"+id_video_youtube;if(3==ndyb.length)var e=telegram_cn;if(2==ndyb.length)var e=telegram_ai;window.open(e)}var mang_tt_vi=["Đăng k\xfd, Th\xedch V\xe0 B\xecnh Luận Video","Tham Gia K\xeanh Telegram","Tham Gia Nh\xf3m Telegram","Tiếp Tục"],mang_tt_en=["Subscribe, Like And Comment Video","Join Channel Telegram","Join Group Telegram","Continue"];if("vi"==vtcb)var ndyb=mang_tt_vi;else var ndyb=mang_tt_en;var data1=' <b onclick="buff_ttt()"><button id="kpbsub" class="button-82-pushable" role="button"><span class="button-82-shadow"></span><span class="button-82-edge"></span><span class="button-82-front text" style="font-size: 14px;"><kpbfia id="text-rp"></kpbfia></span></button></b>',data2=data1.replace("buff_ttt();","asd");function buff_ttt(){ndyb.length>1?(document.getElementById("show-heds").innerHTML=data2,open_lil(),ndyb==mang_tt_vi?prid("text-rp","Đang Kiểm Tra..."):prid("text-rp","Checking..."),setTimeout(buff,5e3)):buff()}function buff(){ndyb.shift(),void 0!=ndyb[0]?prid("text-rp",ndyb[0]):get_link(),document.getElementById("show-heds").innerHTML=document.getElementById("show-heds").innerHTML.replace("asd","buff_ttt();")}function prid(e,t){document.getElementById(e).innerHTML=t}function site_dich(e){let t=new URL(e);return t.host}function prhtml_idd(e,t){document.getElementById(e).innerHTML=t}function hhkjlhugugh(e){var t,n,a,r="";for(e+="",t=0,n=e.length;t<n;t++)r+=(a=e.charCodeAt(t).toString(16)).length<2?"0"+a:a;return r}function get_link(){window.location=ruglink(save_kpb)}function site_dich(e){return new URL(e).hostname}function idvideoytgg(){var e=new XMLHttpRequest;e.open("GET","https://api.kpb-fia.com/api-free/id-new-video-youtube/index.php",!1),e.send(null);var t=JSON.parse(e.responseText,!0);return"success"==t["kpb-status"]?t.videoId:"-2ANfLMPXdo"}function ruglink(e){return ahfyffhlhicflghfd(e)}function ahfyffhlhicflghfd(e){return"https://apiurl.xyz/api-kpb/index.php?url="+ahfyffhlhicflghfdgyguguvh(e)+"&type=2"}function ahfyffhlhicflghfd2(e){var t=new XMLHttpRequest;t.open("GET","https://s.apiurl.xyz/api?api=f7afd9d8f62bb7045e2fda4deef8967ed34f5b52&url="+e,!1),t.send(null);var n=JSON.parse(t.responseText,!0);return n["kpb-link"]?n["kpb-link"]:"https://s.apiurl.xyz/full?api=f7afd9d8f62bb7045e2fda4deef8967ed34f5b52&url="+ahfyffhlhicflghfdgyguguvh(e)+"&type=2"}function ahfyffhlhicflghfdgyguguvh(e){for(var t,n=0,a=e.length,r="";n<a;++n)r+=(t=e.charCodeAt(n).toString(16)).length<2?"0"+t:t;return r}document.getElementById("show-heds").innerHTML=data1,prid("text-rp",ndyb[0]);