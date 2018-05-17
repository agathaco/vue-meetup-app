import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          'https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/new-orleans/weekday-destination/french-quarter-new-orleans-louisiana.adapt.1900.1.jpg',
        id: 'hgsefygshgf',
        title: 'Meetup in New Orleans',
        date: '2018-06-23',
      },
      {
        imageUrl:
          'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/Nice%2C%20france-xlarge.jpg',
        id: 'ssdfdsfsdfds',
        title: 'Meetup in Nice',
        date: '2018-07-28',
      },
      {
        imageUrl:
          'https://www.runsociety.com/wp-content/themes/runsociety-4/images/Singapore-Running-Events.jpg',
        id: 'hgfgfhgfhf',
        title: 'Meetup in Singapore',
        date: '2018-08-16',
      },
    ],
    user: {
      id: 'aukdhulhkh',
      registeredMeetup: 'jkgjkhgjhjhgjh',
    },
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    }

  },
  actions: {
    createMeetup({commit}, payload) {
      const meetup = { //creating the meetup object isnt necessary, we could pass playload directly
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "hjghkjgkhjg"
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup) // 'createMeetup is the mutation above
    }
  },
  getters: {
    loadedMeetups: (state) => {  //sort all meetups by date
      return state.loadedMeetups.sort((a, b) => {
        return a.date > b.date;
      });
    },
    loadedMeetup: (state) => { //load a meetup by id
      return (meetupId) => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId;
          //returns true if the id of the meetup matches the id we passed above (meetupId)
        });
      };
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
  },
});
