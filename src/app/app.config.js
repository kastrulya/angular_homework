export default $stateProvider => {
    $stateProvider
        .state('events', {
            url: '/events',
            template: '<event-list><event-list>'
        })
        .state('create', {
            url: '/create',
            template: '<event-creating></event-creating>'
        })
        .state('detail', {
             url: '/detail',
            template: '<h1>There will be details! </h1>'
        })
};