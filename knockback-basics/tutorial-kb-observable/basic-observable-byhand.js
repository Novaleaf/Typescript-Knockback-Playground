var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="_all.ts"/>
var ObservableOptions = (function () {
    function ObservableOptions(key, read, write, args, localizer, defaultValue, path, store, factory, options) {
        this.key = key;
        this.read = read;
        this.write = write;
        this.args = args;
        this.localizer = localizer;
        this.path = path;
        this.store = store;
        this.factory = factory;
        this.options = options;
        this.default = defaultValue;
    }
    return ObservableOptions;
})();
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel(model) {
        var _this = this;
        _super.call(this, model);
        this.number = kb.observable(model, 'number');
        var options = new ObservableOptions("number");
        options.read = function () {
            return "#: #: #: " + (_this.number());
        };
        options.write = function (value) {
            return _this.number(value.substring(9));
        };
        this.formatted_number = kb.observable(model, options, this);
        //
            }
    return ViewModel;
})(Knockback.ViewModel);
var model = new Backbone.Model({
    number: 33
});
var view_model = new ViewModel(model);
ko.applyBindings(view_model, $('#kboo_read_write')[0]);
//@ sourceMappingURL=basic-observable-byhand.js.map
