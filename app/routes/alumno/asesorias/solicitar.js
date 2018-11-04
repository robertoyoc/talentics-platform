import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(){
        return RSVP.hash({
        	tutoringRequest: this.store.createRecord('tutoring-request',{
					        	approval: false
					        }),

        	teachers: this.store.findAll('teacher')
        })

    }
});
