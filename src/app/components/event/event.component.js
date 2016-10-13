/**
 * Created by bubble on 12.10.16.
 */

import appModule from '../../app.module';
import './event.scss';
import template from './event.html';

function EventController () {}

appModule.component('event', {
    template,
    bindings: {
        data: '<'
    },
    controller: EventController
});