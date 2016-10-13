/**
 * Created by bubble on 12.10.16.
 */

import appModule from '../../app.module';
import './eventList.scss';
import template from './eventList.html';

function EventListController() {
    var vm = this;
    vm.events = [
        {
            title: 'EcmaScriptDay',
            description: 'The best ever conference'
        },
        {
            title: 'Frontend Meet up',
            description: 'Party with HTML, CSS and JS'
        }
    ];
}

appModule.component('eventList', {
    template,
    controller: EventListController
});