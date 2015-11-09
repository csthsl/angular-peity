var angularPeity = angular.module('angular-peity', []);


var buildChartDirective = function (chartType) {
  return {
    restrict: 'E',
    scope: {
      data: "=",
      options: "="
    },
    link: function (scope, element, attrs) {

      var options = {};
      if (scope.options) {
        options = scope.options;
      }

      var span = document.createElement('span');
      if(chartType != 'donut'){
        span.textContent = scope.data.join();
      }else{
        span.textContent = scope.data;
      }


      if (!attrs.class) {
        span.className = "";
      } else {
        span.className = attrs.class;
      }

      if (element[0].nodeType === 8) {
        element.replaceWith(span);
      } else {
        element[0].appendChild(span);
      }

      jQuery(span).peity(chartType, options);

    }
  };
};


angularPeity.directive('pieChart', function () {

  return buildChartDirective("pie");

});


angularPeity.directive('barChart', function () {

  return buildChartDirective("bar");

});


angularPeity.directive('lineChart', function () {

  return buildChartDirective("line");

});

angularPeity.directive('donutChart', function () {

  return buildChartDirective("donut");

});
