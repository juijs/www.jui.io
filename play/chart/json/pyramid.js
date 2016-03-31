var chart = jui.include("chart.builder");

chart("#result", {
	axis : [{
		data : [
			{ visit : 15654, download : 4064, request : 1987, invoice : 976, final : 846 }
		]
	}],
	brush : [{
		type : "pyramid",
		showText : true,
		format : function(k, v, r) {
			var h = "";

			if(k == "visit") h = "Website visits";
			else if(k == "download") h = "Downloads";
			else if(k == "request") h = "Requested price list";
			else if(k == "invoice") h = "Invoice sent";
			else if(k == "final") h = "Finalized";

			return h + " (" + v + ")";
		}
	}],
	widget : [{
		type : "tooltip",
		format : function(data, key) {
			return data[key];
		}
	}, {
		type : "title",
		text : "Sales pyramid"
	}],
	style : {
		pyramidLineWidth: 3
	}
});
