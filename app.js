angular
  .module("PortFall", ["ui.router"])
  .config(Router);

  Router.$inject = ["$stateProvider", "$urlRouterProvider"]
  function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "templates/home.html",
        controller: "MainController",
        controllerAs:'main'
      });      
    $urlRouterProvider.otherwise("/")
  }