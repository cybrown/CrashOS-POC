(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**@jsx React.DOM*/
var Keyboard = require('./keyboard');
var Screen = require('./screen');

module.exports = React.createClass({displayName: 'exports',
    render: function () {
        return React.DOM.div(null, 
            Screen(null ),
            Keyboard(null )
        )
    }
});

},{"./keyboard":2,"./screen":3}],2:[function(require,module,exports){
/**@jsx React.DOM*/

module.exports = React.createClass({displayName: 'exports',
    onClickEql: function () {
        // On ne devrait pas avoir de chemin en dure comme ça
        reqwest('/apps/calc/').then(function (data) {
            alert(data);
        });
    },
    render: function () {
        return React.DOM.div(null, 
            React.DOM.div(null, 
                React.DOM.button(null, "7"),
                React.DOM.button(null, "8"),
                React.DOM.button(null, "9"),
                React.DOM.button(null, "-")
            ),
            React.DOM.div(null, 
                React.DOM.button(null, "4"),
                React.DOM.button(null, "5"),
                React.DOM.button(null, "6"),
                React.DOM.button(null, "*")
            ),
            React.DOM.div(null, 
                React.DOM.button(null, "1"),
                React.DOM.button(null, "2"),
                React.DOM.button(null, "3"),
                React.DOM.button(null, "+")
            ),
            React.DOM.div(null, 
                React.DOM.button(null, "0"),
                React.DOM.button(null, "."),
                React.DOM.button(null, "/"),
                React.DOM.button(null,  " = " )
            ),
            React.DOM.div(null, 
                React.DOM.button( {onClick:this.onClickEql}, "Click here for message from server")
            )
        )
    }
});

},{}],3:[function(require,module,exports){
/**@jsx React.DOM*/

module.exports = React.createClass({displayName: 'exports',
    render: function () {
        return React.DOM.div(null, 
            "0123456789"
        )
    }
});

},{}],4:[function(require,module,exports){
var Calc = require('./components/calc');

console.log('calc loaded');

runApp(function (render) {
    console.log('calc started');
    render(Calc());
});

},{"./components/calc":1}]},{},[4])