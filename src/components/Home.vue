<template>
  <v-container fluid>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router to="/meetups" class="info">Explore meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large router to="/meetups/new" class="info">Organise meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel style="cursor:pointer">
          <v-carousel-item class="test"
          v-for="(meetup, id) in meetups" 
          :src="meetup.imageUrl" 
          :key="id"
          @click.native="onLoadMeetup(meetup.id)">
            <div class="title">
              {{meetup.title}}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <p @click="testing">Join our awesome meetups</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageUrl:
            "https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/new-orleans/weekday-destination/french-quarter-new-orleans-louisiana.adapt.1900.1.jpg",
          id: "hgsefygshgf",
          title: "Meetup in New Orleans"
        },
        {
          imageUrl:
            "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Nice/Nice%2C%20france-xlarge.jpg",
          id: "ssdfdsfsdfds",
          title: "Meetup in Nice"
        },
        {
          imageUrl:
            "https://www.runsociety.com/wp-content/themes/runsociety-4/images/Singapore-Running-Events.jpg",
          id: "hgfgfhgfhf",
          title: "Meetup in Singapore"
        }
      ]
    };
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push('/meetups/' + id);
      console.log('test')
    },
    testing() {
      console.log('test')
    }
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  display: inline-block;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  font-size: 2em;
  text-align: center;
  white-space: nowrap;
}
</style>
