$(document).ready(function () {
    action.updateMonth().updateYear().flipCard();
});

const action = {
    // update month options on month select
    updateMonth: () => {
        let html = '';
        for (let i = 1; i <= 12; i++) {
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
            trigger: 'manual'
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
    }
};
