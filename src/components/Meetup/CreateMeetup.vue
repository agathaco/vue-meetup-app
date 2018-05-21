<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="secondary--text">Create a new meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form ref="form" lazy-validation @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" label="Title" id="title" v-model="title" required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="location" label="Location" id="location" v-model="location" required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="imageUrl" label="Image Url" id="image-url" v-model="imageUrl" required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="200">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="description" label="Description" id="description" v-model="description" required multi-line>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h3>Choose a date and time</h3>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary"
              type="submit"
              :disabled="!formIsValid">Create a meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'
  export default {
    data() {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: new Date(),
        time: new Date(),
      }
    },
  created: function () {
    const dateTime = moment()
    this.date = dateTime.format('YYYY-MM-DD')
    this.time = dateTime.format('HH:mm')
   },
    computed: {
      formIsValid() {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== '';
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          const hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },
    methods: {
      onCreateMeetup() {
        if (!this.formIsValid) {
          return;
        }
        // creating a js object and storing the data defined above in data(). then we can pass this object in our store with dispatch
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.submittableDateTime,
        }
        this.$store.dispatch('createMeetup', meetupData); //'createMeetup' is the action, not the mutation
        this.$router.push('/meetups');
      }
    },
  }
</script>

<style>

</style>
