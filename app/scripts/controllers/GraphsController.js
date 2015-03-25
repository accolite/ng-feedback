'use strict';

var tempdata = [	{"name" : "ravi", "age" : 30},
				    {"name" : "teja", "age" : 89},
					{"name" : "rajashekar", "age" : 21},
					{"name" : "mara ", "age" : 32}
			];



angularTestApp.controller('graphsCtrl', function ($scope) {



	/*var data = tempdata;
 
	var width = 1000;
	var height = 500;
	var widthScale = d3.scale.linear()
						.domain([0,100])
						.range([0,height]);

	var color = d3.scale.linear()
						.domain([0,100])
						.range(["green","red"]);
	var axis = d3.svg.axis()
					.ticks(5)
					.scale(widthScale);

	var canvas = d3.select("body")
					.append("svg")
					.attr("width",width)
					.attr("height",height)
					.append("g")		
					.attr("transform", "translate(400,10)");
	var circle = canvas.append("circle")
					.attr("cx",150)
					.attr("cy",50)
					.attr("r",50)
					.attr("fill", "red");
	var rect = canvas.append("rect")
					.attr("width",100)
					.attr("height",50);
	var line = canvas.append("line")
					.attr("x1",0)
					.attr("y1",100)
					.attr("x2",400)
					.attr("y2",400)
					.attr("stroke","green")
					.attr("stroke-width",10);	
	*/
	

	/*var bars = canvas.selectAll("rect")
					.data(dataArray)
					.enter()	
						.append("rect")
						.attr("width",function(d) {
							return widthScale(d);
						})
						.attr("height", 40)
						.attr("y",function (d,i) {
							return i*70;
						})
						.attr("fill", function(d) { return color(d);});

				 canvas.append("g")
				 		.attr("transform", "translate(0,450)")
				 		.call(axis);

				canvas.selectAll("rect")
						.data(data)
						.enter()
							.append("rect")
							.attr("width", function(d) {return d.age * 5;})
							.attr("height", 40)
							.attr("y", function(d, i) { return i * 50;})
							.attr("fill" , function(d) { return color(d.age);});

				canvas.selectAll("text")
				 		.data(data)
				 		.enter()
				 			.append("text")
				 			.attr("fill", "white")
				 			.attr("y", function(d,i) { return i*50 + 25; })
				 			.text(function(d) {return d.name;});
							

				 canvas.append("g")
				 		.attr("transform", "translate(0,200)")
				 		.call(axis);		
				 
    */});

    