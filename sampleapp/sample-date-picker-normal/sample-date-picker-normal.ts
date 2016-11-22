import {Component, OnInit} from '@angular/core';

declare var require:any;
const normalSampleTpl: string = require('./sample-date-picker-normal.html');

@Component({
    selector: 'sample-date-picker-normal',
    template: normalSampleTpl
})

export class SampleDatePickerNormal implements OnInit {

    private myDatePickerNormalOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'dd mmm yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        selectionTxtFontSize: '18px',
        alignSelectorRight: false,
        indicateInvalidDate: true,
        showDateFormatPlaceholder: true,
        editableMonthAndYear: true,
        minYear: 1900,
        componentDisabled: false
    };
    private selectedDateNormal:string = '';

    private selectedTextNormal: string = '';
    private border: string = 'none';

    constructor() {
        let date = new Date();
    }

    clearDate() {
        this.selectedDateNormal = '';
    }

    enableDisable() {
        let copy = JSON.parse(JSON.stringify(this.myDatePickerNormalOptions));
        copy.componentDisabled = !this.myDatePickerNormalOptions.componentDisabled;
        this.myDatePickerNormalOptions = copy;
    }

    ngOnInit() {
        console.log('onInit(): SampleDatePickerNormal');
    }

    onDateChanged(event:any) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if(event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';

            this.selectedDateNormal = event.formatted;
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    }

    onInputFieldChanged(event:any) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    }
}