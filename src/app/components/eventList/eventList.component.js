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
            description: `The best ever conference
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores aspernatur consectetur, doloribus labore nisi
            non nostrum, provident qui quidem quo recusandae
            suscipit velit, veniam! Adipisci non omnis quia tempore voluptate.`
        },
        {
            title: 'Frontend Meet up',
            description: `Party with HTML, CSS and JS The best ever conference
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores aspernatur consectetur, doloribus labore nisi
            non nostrum, provident qui quidem quo recusandae
            suscipit velit, veniam! Adipisci non omnis quia tempore voluptate.`
        }
    ];
}

appModule.component('eventList', {
    template,
    controller: EventListController
});