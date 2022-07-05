$(".openbtn").click(function () {
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $menu=$(this).parent().parent().next();
        $menu.slideUp();
    }else{
        $(this).addClass('active');
        $menu=$(this).parent().parent().next();
        $menu.slideDown();
    };
});
$(".accordion__question").click(function (){
    if($(this).hasClass('accordion__question--active')){
        $(this).removeClass('accordion__question--active');
        $answer=$(this).next();
        $answer.removeClass('accordion__answer--active');
        $answer.slideUp();
    }else{
        $(this).addClass('accordion__question--active');
        $answer=$(this).next();
        $answer.addClass('accordion__answer--active');
        $answer.slideDown();
    }
});
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 値の表示
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                    var fontSize = 12;//フォントサイズ
                    var fontStyle = 'normal';//フォントスタイル
                    var fontFamily = 'Arial';//フォントファミリー
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                    

                    var dataString = dataset.data[index].toString();
					
                    // 値の位置
                    ctx.textAlign = 'center';//テキストを中央寄せ
                    ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え

                    var padding = 5;//余白
                    var position = element.tooltipPosition();
                    
		
                });
            }
        });
    }
});


//=========== 円グラフ（ドーナッツ型） ============//
$('#chart02').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {


var ctx=document.getElementById("chart02");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'doughnut',//グラフのタイプ
data:{//グラフのデータ
	labels:["勝ち","負け"],//データの名前
	datasets:[{
			label:"職種別比率",//グラフのタイトル
			backgroundColor:["rgb(6,86,91,0.63)","rgb(102,164,172,0.53)"],//グラフの背景色
			data:["45","55",]//データ
		}]
},

options:{//グラフのオプション
	maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
	cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
	legend:{
		display:true//グラフの説明を表示
	},
	tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
		callbacks:{
        label: function (tooltipItem, data) {
			return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
		}
    },		
	},
	
}
});

}
});
