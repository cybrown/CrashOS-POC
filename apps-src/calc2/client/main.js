var Calc2 = require('./components/calc2');

console.log('calc loaded');

runApp(function (render) {
    console.log('calc started');
    render(Calc2());
});
