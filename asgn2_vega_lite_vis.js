var vg_1 = 'chloropleth_map.json';
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = 'bump_chart.json';
vegaEmbed("#bump-chart", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = 'dual_axis_chart.json';
vegaEmbed("#dual-axis-chart", vg_3).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_4 = 'interactive_chart.json';
vegaEmbed("#interactive-chart", vg_4).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);