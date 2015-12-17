var chart = jui.include("chart.builder");

chart("#chart", {
    width: 150,
    height : 330,
    padding : "empty",
    brush : {
        type : "fillgauge",
        shape : "custom", // default circle
        direction : "horizontal",
        value : 50,
        min : 0,
        max : 100,
        svg : "../res/doc/chart/resource/woman.svg"
    }
});