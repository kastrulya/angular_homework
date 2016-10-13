const localEventsModule = angular.module('localEvents', [uiRouter, localEventsModule]);
localEventsModule.config(config);
localEventsModule.run($state => {
    $state.go('events');
});

export default localEventsModule;
