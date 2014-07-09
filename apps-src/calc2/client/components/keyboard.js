/**@jsx React.DOM*/

module.exports = React.createClass({
    onClickEql: function () {
        // On ne devrait pas avoir de chemin en dure comme ça
        reqwest('/apps/calc/').then(function (data) {
            alert(data);
        });
    },
    render: function () {
        return <div>
            <div>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
            </div>
            <div>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>*</button>
            </div>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>
            <div>
                <button>0</button>
                <button>.</button>
                <button>/</button>
                <button> = </button>
            </div>
            <div>
                <button onClick={this.onClickEql}>Click here for message from server</button>
            </div>
        </div>
    }
});
