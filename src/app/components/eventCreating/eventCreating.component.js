/**
 * Created by bubble on 12.10.16.
 */

import appModule from '../../app.module';
import './eventCreating.scss';
import template from './eventCreating.html';

function EventCreatingController() {
    let vm = this;
    vm.event = {};
}

appModule.component('eventCreating', {
    template,
    controller: EventCreatingController
});