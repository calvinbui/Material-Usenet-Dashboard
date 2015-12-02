// loading bar configuration

angular.module('myApp').config(LoadingBarProviderConfiguration);

LoadingBarProviderConfiguration.$inject = ['cfpLoadingBarProvider'];

function LoadingBarProviderConfiguration(cfpLoadingBarProvider) {
    // do not show the spinner
    cfpLoadingBarProvider.includeSpinner = false;
}