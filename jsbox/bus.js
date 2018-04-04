var cars = [
    {"name": "201", "num": "201"}, {"name": "334", "num": "334"}
]

$ui.menu({
    items: cars.map(function(item){
        return item.name
    }),
    handler: function(title, idx) {
        var carName = cars[idx].name;
        var carNum = cars[idx].num;
        var requestUrl = "https://api.chelaile.net.cn/bus/line!lineDetail.action?userId=10348701&accountId=10348722&userAgent=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%2011_3%20like%20Mac%20OS%20X)%20AppleWebKit/605.1.15%20(KHTML,%20like%20Gecko)%20Mobile/15E216&vc=10510&sv=11.3&geo_lat=22.557529&lineName="
                         + carNum
                         + "&cityState=0&pushkey=&lineNo=0"
                         + carNum
                         + "0&gpstype=wgs&geo_lac=65.000000&secret=028abfa354804e63b524ff2859b5798e&stats_act=enter&deviceType=iPhone6s&lng=113.945596&idfa=E4253D8D-11AC-4254-800C-E15D4D0DD09A&push_open=0&screenHeight=1136&cityId=014&stats_order=1-1&sign=8Nasx2KHg5gt4ygU6uEBvA==&s=IOS&stats_referer=searchHistory&lat=22.557529&v=5.46.0&geo_type=wgs&nw=WiFi&geo_lng=113.945596"
        $http.request({
        method: "GET",
        url: requestUrl,
        handler: function(resp) {
            var data = resp.data.replace("**YGKJ", "").replace("YGKJ##", "");
            var startMatchStr = "\"tip\":{\"desc\":\"";
            var endMatchStr = "\",\"destType\"";
            var start = data.indexOf(startMatchStr) + startMatchStr.length;
            var end = data.indexOf(endMatchStr);
            var desc = data.substring(start, end);

            $ui.alert({
                title: carName + "到了么?",
                message: desc,
            })
        }
    })
    }
})
