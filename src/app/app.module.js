import config from 'app.config.js';

const homeEventsModule = angular.module('homeEvents', ['ui.router']);
homeEventsModule.config(config);

homeEventsModule.run($state => {
    $state.go('events');
});

export default homeEventsModule;
