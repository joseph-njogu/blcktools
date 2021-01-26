$(document).ready(function() {
    
    "use strict";

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
      if (arguments.length < 3) o = 0;
      function bump(a) {
        var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
          var w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function() {
          var a = [], i;
          for (i = 0; i < m; i++) a[i] = o + o * Math.random();
          for (i = 0; i < 5; i++) bump(a);
          return a.map(stream_index);
        });
    };

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
      return d3.range(n).map(function(i) {
        return d3.range(m).map(function(j) {
            var x = 20 * j / m - i / 3;
            return 2 * x * Math.exp(-.5 * x);
          }).map(stream_index);
        });
    };

    function stream_index(d, i) {
      return {x: i, y: Math.max(0, d)};
    };

    var nvddata1 = function() {
        return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
            var a = i + 1;
            return {
                key: 'Product' + a,
                values: data
            };
        });
    };

    nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
    .color(['#3e8ef7','#63CB89','#F1C205'])

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    return chart;

});
        

    var chart2 = function () {
        var data = []
          , totalPoints = 300;
        
        function getRandomData() {

        if (data.length > 0)
            data = data.slice(1);

        // Do a random walk

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50
                , y = prev + Math.random() * 10 - 5;

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }

            data.push(y);
        }

            // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
        }

        var plot2 = $.plot("#chart2", [ getRandomData() ], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
                show:false
            },
            xaxis: {
                show: false
            },
            colors: ["#63CB89"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: false,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot2.setData([getRandomData()]);

            plot2.draw();
            setTimeout(update, 300);
        }

        update();
    };

    chart2();

});