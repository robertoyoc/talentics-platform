import DS from 'ember-data';

export default DS.Model.extend({
	fecha: DS.attr('number'),
	asesoria: DS.belogsTo('advisory'),
	mensaje: DS.HasMany('message'),
	archMsj: DS.HasMany('file-message'),
});
