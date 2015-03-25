'use strict';
/**
 * created by @Aniket
 */
angularTestApp.directive('logSlider', ['$rootScope', '$timeout', '$filter', function($rootScope, $timeout, $filter) {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			WIDTH: "=w",
			HEIGHT: "=h",
			MIN: "=min",
			MAX: "=max"
		}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {

			$scope.drawSlider = function() {
				var margin = {
						top: 10,
						right: 20,
						bottom: 10,
						left: 10
					},
					width = $scope.WIDTH - margin.left - margin.right,
					height = $scope.HEIGHT - margin.top - margin.bottom;

				$scope.svg = d3.select($element[0]).append('svg')
					.attr('width', width + margin.left + margin.right)
					.attr('height', height + margin.top + margin.bottom)
					.append('g')
					.attr('class','logSlider')
					.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

				$scope.xRange = d3.scale.log()
					.domain([1, 100000000])
					.range([0, width])
					.base(10)
					.nice()
					// .interpolate(d3.interpolateNumber(1,1))
					.clamp(true);
				// $scope.xRange.tickFormat(5, ".2f");
				console.log($scope.xRange.ticks());
				var xAxis = d3.svg.axis()
					.scale($scope.xRange)
					.tickValues(_.filter($scope.xRange.ticks(), function(num) {
						// return true;
						var log10 = d3.round(Math.log(num) / (2*Math.LN10), 10);
						return (log10 % 1 == 0) ? true : false;
					}))
					.tickFormat(function(d) {
						// return $filter('currency')(d);
						return $scope.xRange.tickFormat(1, "$,s")(d);
					})
					.tickPadding(4)
					.tickSize(10)
					.outerTickSize(0);

				var axis = $scope.svg.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0,0)")
					.call(xAxis);

				axis.append('rect')
					.attr('class', 'axisOutline')
					.attr('width', width +8)
					.attr('y', -5)
					.attr('x', -4)
					.attr('rx', 5)
					.attr('ry', 5)
					.attr('height', 10);

				var brush = d3.svg.brush()
					.x($scope.xRange)
					.extent([$scope.MIN || 10, $scope.MAX || 10000])
					.on("brush", function(e) {
						$scope.brushmove(this, brush);
					});
				$scope.createShadowDef();

				$scope.slider = $scope.svg.append("g")
					.attr("class", "slider")
					.attr("transform", "translate(0,0)")
					.call(brush);
				$scope.slider.selectAll('.background').remove();
				$scope.slider.selectAll(".resize")
					.style('cursor', 'pointer')
					.append("circle")
					.attr('r', 6);
				$scope.slider.selectAll('.extent')
					.attr('height', '6')
					.attr('y', '-3')
					.style('cursor','auto');
			};

			$scope.brushmove = function(element, b) {
				console.log(element);
				$scope.MIN = d3.round(b.extent()[0], 0);
				$scope.MAX = d3.round(b.extent()[1], 0);
				$scope.$apply();
			};

			

			$scope.createShadowDef = function() {
				var defs = $scope.svg.append("defs");

				// create filter with id #drop-shadow
				// height=130% so that the shadow is not clipped
				var filter = defs.append("filter")
					.attr("id", "drop-shadow")
					.attr("height", "130%");

				// SourceAlpha refers to opacity of graphic that this filter will be applied to
				// convolve that with a Gaussian with standard deviation 3 and store result
				// in blur
				filter.append("feGaussianBlur")
					.attr("in", "SourceAlpha")
					.attr("stdDeviation", 1)
					.attr("result", "blur");

				// translate output of Gaussian blur to the right and downwards with 2px
				// store result in offsetBlur
				filter.append("feOffset")
					.attr("in", "blur")
					.attr("dx", 1)
					.attr("dy", 1)
					.attr("result", "offsetBlur");

				// overlay original SourceGraphic over translated blurred opacity by using
				// feMerge filter. Order of specifying inputs is important!
				var feMerge = filter.append("feMerge");

				feMerge.append("feMergeNode")
					.attr("in", "offsetBlur");
				feMerge.append("feMergeNode")
					.attr("in", "SourceGraphic");
			};
			$scope.drawSlider();
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A' // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			// link: function($scope, iElm, iAttrs, controller) {

		// }
	};
}]);