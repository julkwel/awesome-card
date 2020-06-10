/**
 * @Author Julkwel <julienrajerison5@gmail.com>
 *
 * Created 09 - 06 - 2020
 */

$(document).ready(function () {
    action.updateMonth().updateYear().flipCard().maskInput();
});

const action = {
    // update month options on month select
    updateMonth: () => {
        let html = '';
        for (let i = 1; i <= 12; i++) {
            if (i < 10) {
                i = '0' + i;
            }
            html += '<option value="' + i + '">' + i + '</ooption>'
        }
        $('#monthInput').append(html);

        return action;
    },

    // update year option on year select
    updateYear: () => {
        let year = new Date();
        let currentYear = year.getFullYear();
        let html = '';
        for (let i = 0; i <= 12; i++) {
            let yearVal = currentYear + i;
            html += '<option value="' + yearVal + '">' + yearVal + '</ooption>'
        }
        $('#yearInput').append(html);

        return action;
    },

    // flip card action
    flipCard: () => {
        let cardToFlip = $("#willFlip");
        let inputCw = $('#cwInput');

        cardToFlip.flip({
            trigger: 'manual',
            speed: 500
        });

        $(document).on('click', function (e) {
            if (!$(e.target).is('#cwInput')) {
                cardToFlip.flip(false);
            }
        });

        inputCw.on('click', function () {
            cardToFlip.flip(true);
        });

        return action;
    },

    maskInput: () => {
        let cardInput = $('#cardInput');
        let cardNumber = $('#cardNumber');
        let expiredMonth = $('#expiredMonth');
        let expiredYear = $('#expiredYear');
        let yearInput = $('#yearInput');
        let monthInput = $('#monthInput');
        let cardHolderValue = $('#cardHolderValue');
        let cardHolderInput = $('#cardHolder');
        let cwInput = $('#cwInput');
        let cardCcv = $('#cardCcv');

        cardNumber.inputmask({
            mask: '9999 9999 9999 9999',
            regex: "\\d*",
            placeholder: '#',
            clearMaskOnLostFocus: false
        });

        cardInput.inputmask({
            mask: '9999 9999 9999 9999',
            regex: "\\d*",
            placeholder: ''
        });

        expiredMonth.inputmask({
            mask: '99',
            placeholder: 'MM',
            clearMaskOnLostFocus: false
        });

        expiredYear.inputmask({
            mask: '99',
            placeholder: 'YY',
            clearMaskOnLostFocus: false
        });

        cwInput.inputmask({
            mask: '9999',
            placeholder: '',
        });

        cardInput.bind("keyup paste", function () {
            cardNumber.val($(this).val());
        });

        cardHolderInput.bind("keyup paste", function () {
            cardHolderValue.val($(this).val());
        });

        yearInput.bind('change', function () {
            expiredYear.val(parseInt($(this).val().toString().slice(-2)));
        });

        monthInput.bind('change', function () {
            expiredMonth.val($(this).val());
        });

        cwInput.bind("keyup paste", function () {
            cardCcv.val($(this).val());
        });

        return action;
    }
};
