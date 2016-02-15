var chart_1, chart_2, chart_3;

function createRealtime() {
    var chart = jui.include("chartx.realtime"),
        time = jui.include("util.time"),
        index = 0;

    chart_1 = chart("#chart_realtime", {
        axis : {
            data : getRealtimeData(5),
            xhide : false,
            yhide : true
        },
        brush : {
            type : "line",
            target : [ "value" ],
            colors : [ 2 ],
            animate : true
        }
    });

    function getRealtimeData(min) {
        var start = time.add(new Date(), time.minutes, -5),
            data = [];

        for(var i = 0; i < min * 60; i++) {
            data.push(getRealtimeRowData(time.add(start, time.seconds, i + 1)));
            index++;
        }

        return data;
    }

    function getRealtimeRowData(time) {
        var sin = Math.sin(index / 10);

        return {
            time : time,
            value : sin * 2.5
        }
    }

    chart_interval = setInterval(function() {
        chart_1.append(getRealtimeRowData(new Date()));
        index++;
    }, 1000);
}

function createDashboard() {
    var chart = jui.include("chart.builder");

    var dataSource = [
        { date : "J", profit1 : 48000, profit2 : 110 },
        { date : "F", profit1 : 31000, profit2 : 58 },
        { date : "M", profit1 : 62000, profit2 : 104 },
        { date : "A", profit1 : 40500, profit2 : 357 },
        { date : "M", profit1 : 44550, profit2 : 294 },
        { date : "J", profit1 : 29500, profit2 : 367 },
        { date : "J", profit1 : 46000, profit2 : 285 },
        { date : "A", profit1 : 70050, profit2 : 340 },
        { date : "S", profit1 : 39500, profit2 : 397 },
        { date : "O", profit1 : 45800, profit2 : 425 },
        { date : "N", profit1 : 29000, profit2 : 254 },
        { date : "D", profit1 : 15000, profit2 : 187 }
    ];

    var dataSource2 = [
        { unit1 : 16, unit2 : 21, unit3 : 15, unit4 : 18, unit5 : 20 }
    ]

    var dataSource3 = [
        { date: "Jan", sales1: 31000, sales2: 11500, sales3: 21500 },
        { date: "Feb", sales1: 39500, sales2: 36750, sales3: 29550 },
        { date: "Mar", sales1: 24300, sales2: 7000, sales3: 14500 },
        { date: "Apr", sales1: 36000, sales2: 44500, sales3: 16500 },
        { date: "May", sales1: 38000, sales2: 11500, sales3: 28450 },
        { date: "Jun", sales1: 45500, sales2: 28450, sales3: 35600 },
        { date: "Jul", sales1: 28500, sales2: 42900, sales3: 21550 },
        { date: "Aug", sales1: 38000, sales2: 26750, sales3: 18750 },
        { date: "Sep", sales1: 21000, sales2: 13050, sales3: 11600 },
        { date: "Oct", sales1: 17000, sales2: 32600, sales3: 7500 },
        { date: "Nov", sales1: 24000, sales2: 12500, sales3: 14750 },
        { date: "Dec", sales1: 17500, sales2: 14300, sales3: 16000 }
    ];

    chart_2 = chart("#chart_dashboard", {
        padding : {
            left : 60
        },
        axis : [{
            data : dataSource,
            x : {
                type : "block",
                domain : "date"
            },
            y : {
                type : "range",
                domain : [ 0, 100000 ],
                step : 4,
                line : true
            },
            area : {
                width : "65%",
                height : "40%"
            }
        }, {
            x : {
                hide : true
            },
            y : {
                domain : [ 0, 500 ],
                orient : "right"
            },
            area : {
                width : "65%",
                height : "40%"
            },
            extend : 0
        }, {
            data : dataSource2,
            area : {
                x : "70%",
                width : "40%",
                height : "40%"
            }
        }, {
            data : dataSource3,
            y : {
                domain : [ 0, 50000 ]
            },
            area : {
                width : "100%",
                height : "40%",
                y : "60%"
            },
            extend : 0
        }],
        brush : [{
            type : "column",
            target : "profit1",
            axis : 0,
            colors : [ 0 ],
            animate : true
        }, {
            type : "line",
            target : "profit2",
            axis : 1,
            colors : [ 2 ],
            animate : true
        }, {
            type : "scatter",
            target : "profit2",
            size : 10,
            axis : 1,
            colors : [ 2 ]
        }, {
            type : "pie",
            showText : true,
            format : function(t, v) {
                return v;
            },
            axis : 2
        }, {
            type : "column",
            target : [ "sales1", "sales2", "sales3" ],
            outerPadding : 10,
            innerPadding : 3,
            axis : 3,
            animate : true
        }],
        widget : [{
            type : "title",
            text : "Sales Overview",
            align : "start"
        }, {
            type : "title",
            text : "Net Profit",
            align : "start",
            orient : "center",
            dx : -55,
            dy : -125
        }, {
            type : "title",
            text : "Sales by Employee",
            align : "start",
            orient : "center",
            dx : -80,
            dy : 110
        }, {
            type : "title",
            text : "Units Sold",
            align : "end",
            orient : "center",
            dx : -235,
            dy : -125
        }, {
            type : "tooltip",
            format : function(k, v) {
                return v;
            },
            brush : [ 0, 2, 3, 4 ]
        }],
        style : {
            backgroundColor : "transparent",
            scatterBorderWidth : 1.5,
            titleFontSize : "11px",
            titleFontWeight : "bold"
        },
        format : function(v) {
            if(typeof(v) == "number") {
                return ((v > 1000) ? Math.floor(v / 1000) + "k" : v);
            }

            return v;
        }
    });
}

function createTopology() {
    var chart = jui.include("chart.builder");

    var data = [
        { key: "1000_1", name: "W1", type: "was", outgoing: [ "1000_2" ] },
        { key: "1000_2", name: "W2", type: "was", outgoing: [ "1000_3", "1000_4" ] },
        { key: "1000_3", name: "W3", type: "was", outgoing: [ "1_2_3_4", "1000_2" ] },
        { key: "1000_4", name: "W4", type: "server", outgoing: [ "1_2_3_4" ] },
        { key: "1_2_3_4", name: "Oracle", type: "db", outgoing: [] }
    ];

    chart_3 = chart("#chart_topology", {
        icon: {
            type: "jennifer",
            path: "lib/jui/img/icon/icomoon.ttf"
        },
        padding: 5,
        axis: {
            c: {
                type: "topologytable"
            },
            data: data
        },
        brush: {
            type: "topologynode",
            nodeText: function(data) {
                if(data.type == "server") {
                    return "{server}";
                } else if(data.type == "was") {
                    return "{was}";
                } else {
                    return "{db}";
                }
            },
            nodeTitle: function(data) {
                return data.name;
            }
        },
        widget: {
            type: "topologyctrl"
        }
    });

    // 임시 애니메이션
    $(chart_3.root).css("opacity", 0).animate({
        opacity: 1
    }, 1500);
}

jui.defineUI("chartx.realtime", [ "util.base", "util.time", "chart.builder" ], function(_, time, builder) {

    /**
     * @class chartx.realtime
     *
     * 리얼타임 차트 구현
     *
     * @extends core
     */
    var UI = function() {
        var axis = null,
            interval = null,
            dataList = [];

        function runningChart(self) {
            var opts = self.options,
                domain = initDomain(self);

            for(var i = 0; i < dataList.length; i++) {
                if(dataList[i][opts.axis.key].getTime() <= domain[0].getTime()) {
                    dataList.splice(i, 1);
                } else {
                    break;
                }
            }

            axis.updateGrid("x", {
                domain: domain
            });

            axis.update(dataList);
        }

        function initDomain(self) {
            var end = new Date(),
                start = time.add(end, time.minutes, -self.options.period);

            return [ start, end ];
        }

        function getOptions(self) {
            var options = {},
                excepts = [ "interval", "period", "axis", "vo" ];

            for(var key in self.options) {
                if($.inArray(key, excepts) == -1) {
                    options[key] = self.options[key];
                }
            }

            return options;
        }

        this.init = function() {
            var opts = this.options,
                target = (_.typeCheck("array", opts.brush)) ? opts.brush[0].target : opts.brush.target;

            this.chart = builder(this.selector, _.extend({
                axis : {
                    x : {
                        type : "date",
                        domain : initDomain(this),
                        interval : opts.axis.xstep,
                        realtime : "minutes",
                        format : opts.axis.format,
                        key : opts.axis.key,
                        line : opts.axis.xline,
                        hide : opts.axis.xhide
                    },
                    y : {
                        type : "range",
                        domain : [ -10, 10 ],
                        step : opts.axis.ystep,
                        line : opts.axis.yline,
                        hide : opts.axis.yhide
                    },
                    buffer: opts.period * 60
                }
            }, getOptions(this)));

            // 기본 엑시스 설정
            axis = this.chart.get("axis", 0);

            // 초기값 설정
            if(opts.axis.data.length > 0) {
                this.update(opts.axis.data);
            }

            // 리얼타임 그리드 시작
            this.start();
        }

        this.update = function(data) {
            dataList = data;
            axis.update(dataList);
        }

        this.clear = function() {
            dataList = [];
            axis.update([]);
        }

        this.reset = function() {
            this.clear();
            this.stop();
        }

        this.append = function(data) {
            var newData = data;

            if(!_.typeCheck("array", data)) {
                newData = [ data ];
            }

            dataList = dataList.concat(newData);
        }

        this.start = function() {
            if(interval != null) return;

            var self = this;
            interval = setInterval(function () {
                runningChart(self);
            }, this.options.interval * 1000);
        }

        this.stop = function() {
            if(interval == null) return;

            clearInterval(interval);
            interval = null;
        }
    }

    UI.setup = function() {
        return {

            /** @cfg  {String/Number} [width="100%"] chart width */
            width: "100%", // chart 기본 넓이
            /** @cfg  {String/Number} [height="100%"] chart height */
            height: "100%", // chart 기본 높이
            /**
             * @cfg  {Object} padding chart padding
             * @cfg  {Number} [padding.top=50] chart padding
             * @cfg  {Number} [padding.bottom=50] chart padding
             * @cfg  {Number} [padding.left=50] chart padding
             * @cfg  {Number} [padding.right=50] chart padding
             */
            padding: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            },

            /** @cfg  {String} [theme=jennifer] chart theme  */
            theme: "jennifer",
            /** @cfg  {Object} style chart custom theme  */
            style: {},
            /** @cfg {Array} brush Determines a brush to be added to a chart. */
            brush: [],
            /** @cfg {Array} widget Determines a widget to be added to a chart. */
            widget: [],

            /**
             * @cfg {Object} axis  Determines a axis to be added to a chart
             * @cfg {Array/Function/String} [domain=null]
             * @cfg {String} [format="hh:mm"]
             * @cfg {String} [key="time"]
             * @cfg {Number} [xstep=1] Set a step of x grid(date).
             * @cfg {Number} [ystep=10] Set a step of y grid(range).
             * @cfg {Boolean} [xline=true] Set a line option of x grid.
             * @cfg {Boolean} [yline=true] Set a line option of y grid.
             * @cfg {Boolean} [xhide=true] Set a hide option of x grid.
             * @cfg {Boolean} [yhide=true] Set a hide option of y grid.
             * @cfg {Array} [data=[]] Sets the row set data which constitute a chart.
             */
            axis : {
                domain : null,
                format : "hh:mm",
                key : "time",
                xstep : 1, // x축 분 간격
                ystep : 10,
                xline : true,
                yline : true,
                xhide : false,
                yhide : false,
                data : []
            },

            /** @cfg {Number} [interval=1] Set moving time interval(in seconds) */
            interval : 1, // second

            /** @cfg {Number} [period=1] set interval for realtime (in minute)*/
            period : 5 // minute
        }
    }

    return UI;
});

jui.ready([ "util.base" ], function(_) {
    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if(chart_1 == null && top > 265) {
            createRealtime();
        }
        if(chart_2 == null && top > 1050) {
            createDashboard();
        }
        if(chart_3 == null && top > 1950) {
            createTopology();
        }

        // 메인 이미지 포지션 변경
        $(".main-chart-1 > nav").css("background-position", "0px " + (-top) + "px");
    });
});