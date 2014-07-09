var Calc = require('./components/calc');

console.log('calc loaded');

runApp(function (render) {
    console.log('calc started');
    render(Calc());
});
