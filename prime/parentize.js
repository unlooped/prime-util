"use strict";

var prime = require('prime')
var slice = Array.prototype.slice

module.exports = prime({
    parent: function(method){
        var parent = this._parent || this.constructor.parent
        this._parent = parent.constructor.parent
        var result = parent[method].apply(this, slice.call(arguments, 1))
        this._parent = parent
        return result
    }
})
