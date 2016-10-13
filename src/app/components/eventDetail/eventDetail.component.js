/**
 * Created by bubble on 12.10.16.
 */

import appModule from '../../app.module';
import './eventDetail.scss';
import template from './eventDetail.html';

function EventDetailController() {}

appModule.component('eventDetail', {
    template,
    controller: EventDetailController
});