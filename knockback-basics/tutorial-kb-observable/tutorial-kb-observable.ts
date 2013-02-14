/// <reference path="_all.ts"/>


class ObservableOptions implements Knockback.IObservableOptions {
	constructor(public key: string
		, public read?: () => any
		, public write?: (value: any) => void
		,public args?: KnockoutObservableAny[]
		,public localizer?: Knockback.LocalizedObservable
		,defaultValue ?: any
		,public path?: string
		,public store?: any
		,public factory?: any
		,public options?: any
		) {
		this.default = defaultValue;
	}
	public default: any;
}

class ViewModel extends Knockback.ViewModel {
	public number: KnockoutObservableAny;
	public formatted_number: KnockoutObservableAny;

	constructor(model: Backbone.Model) {
		super(model);
		this.number = kb.observable(model, 'number');
		
		var options: Knockback.IObservableOptions = new ObservableOptions("number");
		options.read = () => { return "#: #: #: " + (this.number()); };
		options.write = (value) => { return this.number(value.substring(9)); };

		this.formatted_number = kb.observable(model, options, this);

		//
	}
}

var model = new Backbone.Model({ number: 33 });

var view_model = new ViewModel(model);

ko.applyBindings(view_model, $('#kboo_read_write')[0]);


