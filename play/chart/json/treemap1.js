var chart = jui.include("chart.builder");

chart("#result", {
	axis : [{
		data : [
			{ index : "0", text: "Korea" },
			{ index : "0.0", text: "Seoul", value : 1000 },
			{ index : "0.1", text: "Busan" },
			{ index : "0.1.0", text: "Dongrae1", value : 2000 },
			{ index : "0.1.1", text: "Dongrae2", value : 1400 },
			{ index : "1", text: "Japan" },
			{ index : "1.0", text: "Tokyo", value : 700 },
			{ index : "2", text: "China", value : 500 }
		]
	}],
	brush : [{
		type : "treemap",
		orient : "top",
		align : "end",
	 	nodeColor : function(d) {
			if(d.text == "Seoul") return 0;
			else if(d.text == "Dongrae1" || d.text == "Dongrae2") return 1;
			return 2;
		}
	}],
	event : {
		click: function(d, e) {
			console.log(d);
		}
	}
});
