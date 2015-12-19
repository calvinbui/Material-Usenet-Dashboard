// loading bar configuration

angular.module('homepageApp').config(LoadingBarProviderConfiguration);

LoadingBarProviderConfiguration.$inject = ['cfpLoadingBarProvider'];

function LoadingBarProviderConfiguration(cfpLoadingBarProvider) {
    // do not show the spinner
    cfpLoadingBarProvider.includeSpinner = false;
}