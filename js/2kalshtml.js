  var textareaData = {
    text:'請輸入文字'
  }
  var show = new Vue({
    el: '#show',
    data:textareaData,
  })

//-----------------
  var kals_config = new Vue({
    el: '#kals_config',
    data: {
      config_value:'Here is Vue block!',
    },
  })
//-----------------------
$(function(){
  var $link = $("#btnDownload");

  $('#btnCreatFile').click(function(){
    console.log("有沒有抓到TEXT啊：" + $("#showContent").text());
    console.log("summernot text:" + $('#summernote').summernote('code'));
    var kalsUrl = "http%3A%2F%2Fexp-kals-2012.dlll.nccu.edu.tw%2Fkals%2Fweb_apps%2Fgeneric%2Floader%2Frelease";
    //---開始組成HTML(Header部份)-------
    var htmlHeader = "<html><head><meta charset='utf-8'><title>kals文本</title></head><body>";
    //---開始組成HTML(內容部份)-------
    var htmlContent = $("#showContent").text()
                      +"<div>test!!!</div>";
    //---開始組成HTML(KALS設定部份)-------
    var htmlKalsconfig = "<div>config"+ kalsUrl +"</div>";
    //---開始組成HTML(footer設定部份)-------
    var htmlFooter = "</body></html>";

    var htmlAll = htmlHeader + htmlContent + htmlKalsconfig + htmlFooter;

    var blob = new Blob([htmlAll], //$("#showContent").text()
      {type:"application/octect-stream" });
    var blobUrl = URL.createObjectURL(blob);
    var fileName = "words.html";
    $link.attr({ href: blobUrl, download: fileName })
               .text(fileName).removeClass("revoke");
  });
  $('#btnRevokeUrl').click(function() {
    URL.revokeObjectURL($link.attr("href"));
    $link.addClass("revoke");
  });

});

/*function createHtml(){
alert(document.getElementById("textarea").value);
}*/
