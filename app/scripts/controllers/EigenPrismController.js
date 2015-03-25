angularTestApp.controller('EigenCtrl', function ($scope) {

	$scope.tab = 1;
	$scope.subtab=1;
	$scope.attributes = [
						{
						name:'TIV',
						min:0,
						max:100
						},
						{
						name: '% change value',
						min: 0,
						max: 1000	
						}, 
						{
						name:'Time Allotment',
						min:0,
						max:500
						},
						{
						name: 'Structure value',
						min: 0, 
						max: 100	
						}, 
						{
						name:'other Structure value',
						min:0,
						max:100
						},
						{
						name:'Content value' ,
						min: 0,
						max:100
						},
						{
						name:'Special value',
						min:0,
						max:100
						},
						{
						name: 'Personal Property ',
						min: 0, 
						max: 100
						},
						{
						name: 'Machinery and equipment value',
						min: 0,
						max: 100	
						}
						] 
	$scope.assertModel = "Eigen Risk Advantage Hierarchy"



	$scope.accordians = [
    {
      title: 'Campus',
      content: ['Site amount', 'Number of buildings']
    },
    {
      title: 'Site',
      content: ['Site amount', 'Number of buildings']
    },
     {
      title: 'Building',
      content: ['Site amount', 'Number of buildings']
    },
     {
      title: 'Content',
      content: ['Site amount', 'Number of buildings']
    }
  ];

  $scope.attributesIds = []; 
  $scope.alerts = [];
  
  $scope.selectAttribute = function(index) {  
  	console.log($scope.attributesIds[index]);
  	if ($scope.attributesIds[index]) {
        delete($scope.attributesIds[index] )
        var elementPos = $scope.alerts.map(function(x) {
          return x.name;
        }).indexOf($scope.attributes[index].name);
        if (~elementPos) $scope.alerts.splice(elementPos, 1);
      } else {
        $scope.attributesIds[index]  = true;
        $scope.alerts.push($scope.attributes[index]);
      }
      console.log($scope.attributesIds);
    }
  
  $scope.closeAlert = function(index) {
  	
  	var elementPos = $scope.attributes.map(function(x) {
          return x.name;
        }).indexOf($scope.alerts[index].name);
        if (~elementPos)  delete($scope.attributesIds[elementPos] );

    $scope.alerts.splice(index,1);
    console.log($scope.attributesIds);
  }

});