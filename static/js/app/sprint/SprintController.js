scrumModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/VCrearElementoMeeting/:idReunion', {
                controller: 'VCrearElementoMeetingController',
                templateUrl: 'app/sprint/VCrearElementoMeeting.html'
            }).when('/VCrearReunionSprint/:idSprint', {
                controller: 'VCrearReunionSprintController',
                templateUrl: 'app/sprint/VCrearReunionSprint.html'
            }).when('/VCrearSprint/:idPila', {
                controller: 'VCrearSprintController',
                templateUrl: 'app/sprint/VCrearSprint.html'
            }).when('/VElementoMeeting/:idReunion', {
                controller: 'VElementoMeetingController',
                templateUrl: 'app/sprint/VElementoMeeting.html'
            }).when('/VReunion/:idSprint', {
                controller: 'VReunionController',
                templateUrl: 'app/sprint/VReunion.html'
            }).when('/VSprint/:idPila', {
              controller: 'VSprintController',
                templateUrl: 'app/sprint/VSprint.html'
            }).when('/VResumenHistoria/:idSprint', {
                controller: 'VResumenHistoriaController',
                templateUrl: 'app/sprint/VResumenHistoria.html'
            }).when('/VSprint/:idSprint', {
                controller: 'VSprintController',
                templateUrl: 'app/sprint/VSprint.html'
            }).when('/VSprintHistoria/:idSprint', {
                controller: 'VSprintHistoriaController',
                templateUrl: 'app/sprint/VSprintHistoria.html'
            }).when('/VSprintTarea/:idSprint', {
                controller: 'VSprintTareaController',
                templateUrl: 'app/sprint/VSprintTarea.html'
            }).when('/VSprints/:idPila', {
                controller: 'VSprintsController',
                templateUrl: 'app/sprint/VSprints.html'
            });
}]);

scrumModule.controller('VCrearElementoMeetingController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fElementoMeeting = {};

      sprintService.VCrearElementoMeeting({"idReunion":$routeParams.idReunion}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VReunion0 = function(idSprint) {
        $location.path('/VReunion/'+idSprint);
      };

      $scope.fElementoMeetingSubmitted = false;
      $scope.ACrearElementoMeeting1 = function(isValid) {
        $scope.fElementoMeetingSubmitted = true;
        if (isValid) {
          
          sprintService.ACrearElementoMeeting($scope.fElementoMeeting).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

    }]);

scrumModule.controller('VCrearReunionSprintController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fReunion = {};

      sprintService.VCrearReunionSprint({"idSprint":$routeParams.idSprint}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }

        if ($scope.fReunion.Fecha) {
          $scope.fReunion.Fecha=new Date($scope.fReunion.Fecha);
        }

      });
      $scope.VSprint0 = function(idPila) {
        $location.path('/VSprint/'+idPila);
      };

      $scope.fReunionSubmitted = false;
      $scope.ACrearReunionSprint1 = function(isValid) {
        $scope.fReunionSubmitted = true;
        if (isValid) {
          
          sprintService.ACrearReunionSprint($scope.fReunion).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

    }]);

scrumModule.controller('VCrearSprintController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fSprint = {};

      sprintService.VCrearSprint({"idPila":$routeParams.idPila}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VSprints1 = function(idPila) {
        $location.path('/VSprints/'+idPila);
      };

      $scope.fSprintSubmitted = false;
      $scope.ACrearSprint0 = function(isValid) {
        $scope.fSprintSubmitted = true;
        if (isValid) {
          
          sprintService.ACrearSprint($scope.fSprint).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

    }]);

scrumModule.controller('VElementoMeetingController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fElementoMeeting = {};

      sprintService.VElementoMeeting({"idReunion":$routeParams.idReunion}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VReunion0 = function(idSprint) {
        $location.path('/VReunion/'+idSprint);
      };

      $scope.fElementoMeetingSubmitted = false;
      $scope.AModifElementoMeeting1 = function(isValid) {
        $scope.fElementoMeetingSubmitted = true;
        if (isValid) {
          
          sprintService.AModifElementoMeeting($scope.fElementoMeeting).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

    }]);

scrumModule.controller('VResumenHistoriaController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fResumenHistoria = {};

      sprintService.VResumenHistoria({"idSprint":$routeParams.idSprint}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VSprint1 = function(idSprint) {
        $location.path('/VSprint/'+idSprint);
      };

      $scope.fResumenHistoriaSubmitted = false;
      $scope.AResumenHistoria0 = function(isValid) {
        $scope.fResumenHistoriaSubmitted = true;
        if (isValid) {
          
          sprintService.AResumenHistoria($scope.fResumenHistoria).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

    }]);

scrumModule.controller('VReunionController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'ngTableParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, ngTableParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fReunion = {};

      sprintService.VReunion({"idSprint":$routeParams.idSprint}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }

        if ($scope.fReunion.Fecha) {
          $scope.fReunion.Fecha=new Date($scope.fReunion.Fecha);
        }

              var VElementoMeeting4Data = $scope.res.data4;
              if(typeof VElementoMeeting4Data === 'undefined') VElementoMeeting4Data=[];
              $scope.tableParams4 = new ngTableParams({
                  page: 1,            // show first page
                  count: 10           // count per page
              }, {
                  total: VElementoMeeting4Data.length, // length of data
                  getData: function($defer, params) {
                      $defer.resolve(VElementoMeeting4Data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                  }
              });            


      });
      $scope.VSprint0 = function(idPila) {
        $location.path('/VSprint/'+idPila);
      };
      $scope.VCrearElementoMeeting2 = function(idReunion) {
        $location.path('/VCrearElementoMeeting/'+idReunion);
      };

      $scope.fReunionSubmitted = false;
      $scope.AModifReunionSprint1 = function(isValid) {
        $scope.fReunionSubmitted = true;
        if (isValid) {
          
          sprintService.AModifReunionSprint($scope.fReunion).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

      $scope.VElementoMeeting4 = function(idReunion) {
        $location.path('/VElementoMeeting/'+((typeof idReunion === 'object')?JSON.stringify(idReunion):idReunion));
      };

    }]);

scrumModule.controller('VSprintController',
    ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'ngTableParams', 'prodService', 'sprintService', 
    function ($scope, $location, $route, $timeout, flash, $routeParams, ngTableParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fSprint = {};

      sprintService.VSprint({"idSprint":$routeParams.idSprint}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


              var AElimSprintHistoria6Data = $scope.res.data6;
              if(typeof AElimSprintHistoria6Data === 'undefined') AElimSprintHistoria6Data=[];
              $scope.tableParams6 = new ngTableParams({
                  page: 1,            // show first page
                  count: 10           // count per page
              }, {
                  total: AElimSprintHistoria6Data.length, // length of data
                  getData: function($defer, params) {
                      $defer.resolve(AElimSprintHistoria6Data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                  }
              });            

              var AElimSprintTarea8Data = $scope.res.data8;
              if(typeof AElimSprintTarea8Data === 'undefined') AElimSprintTarea8Data=[];
              $scope.tableParams8 = new ngTableParams({
                  page: 1,            // show first page
                  count: 10           // count per page
              }, {
                  total: AElimSprintTarea8Data.length, // length of data
                  getData: function($defer, params) {
                      $defer.resolve(AElimSprintTarea8Data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                  }
              });   

              var VReunion4Data = $scope.res.data4;
              if(typeof VReunion4Data === 'undefined') VReunion4Data=[];
              $scope.tableParams4 = new ngTableParams({
                  page: 1,            // show first page
                  count: 10           // count per page
              }, {
                  total: VReunion4Data.length, // length of data
                  getData: function($defer, params) {
                      $defer.resolve(VReunion4Data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                  }
              });                

      });
      $scope.VCrearReunionSprint1 = function(idSprint) {
        $location.path('/VCrearReunionSprint/'+idSprint);
      };
      $scope.VSprints2 = function(idPila) {
        $location.path('/VSprints/'+idPila);
      };

      $scope.fSprintSubmitted = false;
      $scope.AModifSprint0 = function(isValid) {
        $scope.fSprintSubmitted = true;
        if (isValid) {
          
          sprintService.AModifSprint($scope.fSprint).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

      $scope.VReunion4 = function(idSprint) {
        $location.path('/VReunion/'+((typeof idSprint === 'object')?JSON.stringify(idSprint):idSprint));
      };

      $scope.VSprints1 = function(idPila) {
        $location.path('/VSprints/'+idPila);
      };
      $scope.VSprintHistoria2 = function(idSprint) {
        $location.path('/VSprintHistoria/'+idSprint);
      };
      $scope.VSprintTarea3 = function(idSprint) {
        $location.path('/VSprintTarea/'+idSprint);
      };
      $scope.VResumenHistoria4 = function(idSprint) {
        $location.path('/VResumenHistoria/'+idSprint);
      };

      $scope.fSprintSubmitted = false;
      $scope.AModifSprint0 = function(isValid) {
        $scope.fSprintSubmitted = true;
        if (isValid) {
          
          sprintService.AModifSprint($scope.fSprint).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

      $scope.AElimSprintHistoria6 = function(id) {
          var tableFields = [["idHistoria","id"],["prioridad","Prioridad"],["enunciado","Enunciado"]];
          var arg = {};
          arg[tableFields[0][1]] = ((typeof id === 'object')?JSON.stringify(id):id);
          sprintService.AElimSprintHistoria(arg).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
      };
      $scope.AElimSprintTarea8 = function(id) {
          var tableFields = [["idTarea","id"],["descripcion","Descripción"]];
          var arg = {};
          arg[tableFields[0][1]] = ((typeof id === 'object')?JSON.stringify(id):id);
          sprintService.AElimSprintTarea(arg).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
      };

    }]);

scrumModule.controller('VSprintHistoriaController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fSprintHistoria = {};

      sprintService.VSprintHistoria({"idSprint":$routeParams.idSprint}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VSprint1 = function(idSprint) {
        $location.path('/VSprint/'+idSprint);
      };

      $scope.fSprintHistoriaSubmitted = false;
      $scope.ASprintHistoria0 = function(isValid) {
        $scope.fSprintHistoriaSubmitted = true;
        if (isValid) {
          
          sprintService.ASprintHistoria($scope.fSprintHistoria).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

    }]);
scrumModule.controller('VSprintTareaController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, prodService, sprintService) {
      $scope.msg = '';
      $scope.fSprintTarea = {};

      sprintService.VSprintTarea({"idSprint":$routeParams.idSprint}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


      });
      $scope.VSprint1 = function(idSprint) {
        $location.path('/VSprint/'+idSprint);
      };

      $scope.fSprintTareaSubmitted = false;
      $scope.ASprintTarea0 = function(isValid) {
        $scope.fSprintTareaSubmitted = true;
        if (isValid) {
          
          sprintService.ASprintTarea($scope.fSprintTarea).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              $location.path(label);
              $route.reload();
          });
        }
      };

    }]);
scrumModule.controller('VSprintsController', 
   ['$scope', '$location', '$route', '$timeout', 'flash', '$routeParams', 'ngTableParams', 'prodService', 'sprintService',
    function ($scope, $location, $route, $timeout, flash, $routeParams, ngTableParams, prodService, sprintService) {
      $scope.msg = '';
      sprintService.VSprints({"idPila":$routeParams.idPila}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }


              var VSprint1Data = $scope.res.data1;
              if(typeof VSprint1Data === 'undefined') VSprint1Data=[];
              $scope.tableParams1 = new ngTableParams({
                  page: 1,            // show first page
                  count: 10           // count per page
              }, {
                  total: VSprint1Data.length, // length of data
                  getData: function($defer, params) {
                      $defer.resolve(VSprint1Data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                  }
              });            


      });
      $scope.VProducto0 = function(idPila) {
        $location.path('/VProducto/'+idPila);
      };
      $scope.VCrearSprint2 = function(idPila) {
        $location.path('/VCrearSprint/'+idPila);
      };

      $scope.VSprint1 = function(idSprint) {
        $location.path('/VSprint/'+((typeof idSprint === 'object')?JSON.stringify(idSprint):idSprint));
      };

    }]);
