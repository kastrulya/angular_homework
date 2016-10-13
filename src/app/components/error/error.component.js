/**
 * Created by bubble on 12.10.16.
 */

import appModule from '../../app.module';
import './error.scss';
import template from './error.html';

function ErrorController () {
    var vm = this;
}

appModule.component('error', {
    template,
    bindings: {
        data: '<'
    },
    controller: ErrorController
});