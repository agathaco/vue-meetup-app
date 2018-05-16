<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5>
                <v-card-media src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/new-orleans/weekday-destination/french-quarter-new-orleans-louisiana.adapt.1900.1.jpg" height="125px"></v-card-media>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <h2 class="white--text mb-0">My Meetup</h2>
                    <div>17th July 2018</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="meetups/1">
                    <v-icon left light>arrow_forward</v-icon>View Meetup</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  
</script>

<style>
  
</style>