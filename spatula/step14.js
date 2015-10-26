/// jill.js on the client ///

(function ($) {

    $.jill = $.jill || {};


    $.jill.init = function (settings) {

        var self = this;
        this.settings = settings;

        if (settings.boardSelect && settings.boardCommand) {
            settings.boardCommand.bootstrapSwitch({
                onSwitchChange: this.handleCommand.bind(this)
            });
        }

        // require1k
        R(function (require, module, exports) {

            var Nes = require('nes');
            self._client = new Nes.Client('ws://localhost:8080');

            self._client.connect(function (err) {

                if (err) {
                  console.error(err);
                  return;
                }

                self._client.request('boards', function (err, payload) {

                    console.log(err || payload);
                });

                self._client.subscribe('/reading', self.handleReading);
            });
        });
    };

    $.jill.handleReading = function (err, reading) {

        if (err) {
            console.error(err);
            return;
        }

        var markup = '<div class="alert alert-warning alert-dismissible" role="alert">' +
          '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            'Board ' + reading.boardId + ' had reading of type ' + reading.type + ' and value ' + reading.value +
          '</div>';

        $('#alert').html(markup);
    };

    $.jill.handleCommand = function (event, state) {

        var boardId = this.settings.boardSelect.val();
        var addonId = this.settings.boardSelect.find(':selected').attr('data-addon');
        var request = {
            method: 'post',
            path: '/api/board/' + boardId + '/' + addonId + '/command',
            payload: {
                value: state
            }
        }
        this._client.request(request, function (err) {

            if (err) {
                console.error(err);
            }
        });
    };
})(jQuery);


// Lets see a route that uses Vision to render a template
