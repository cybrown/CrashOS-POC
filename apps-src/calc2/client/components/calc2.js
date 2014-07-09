/**@jsx React.DOM*/
var Keyboard = require('./keyboard');
var Screen = require('./screen');

module.exports = React.createClass({
    render: function () {
        return <div>
            <Screen />
            <Keyboard />
        </div>
    }
});
