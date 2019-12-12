<template>
    <div class="search-box">
    <fieldset>
        <legend>Search Flights</legend>
        <form v-on:submit.prevent="submit(inputVals)">
            <div class="radio-btns">
                <input type="radio" v-model="inputVals.trip" value="oneway" name="trip" id="one-way" >
                <label for="one-way">One Way</label>
                <input type="radio" v-model="inputVals.trip" value="round" name="trip" id="round-trip">
                <label for="round-trip">Round Trip</label>
            </div>

            <div class="flight-details">
                <input type="text" v-model="inputVals.source" name="source-field" id="src-fld" placeholder="Origin" class="bck-origin">
                <input type="text" v-model="inputVals.destination" name="destination-field" id="dst-fld" placeholder="Destination" class="bck-origin">
                <input type="text" v-model="inputVals.departure" name="start-date" id="start-date" placeholder="Depart" class="bck-date" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" v-model="inputVals.arrival" name="end-date" id="end-date" placeholder="Return" class="bck-date" onfocus="(this.type='date')" onblur="(this.type='text')">
            </div>
   
            <img src="../assets/arrow.png" class="arrow-img" alt="arrow-svg">
   
            <div class="user-details">
                <input type="text" name="user-name" id="uname" v-model="inputVals.passenger" placeholder="Passenger" class="bck-user">
                <button class="submitbtn" type="submit">Search</button>
            </div>
        </form>
    </fieldset>
    </div>
</template>

<script>
export default {
  data() {
    return {
      inputVals: {
        trip: "",
        source: "",
        destination: "",
        departure: "",
        arrival: "",
        passenger: ""
      }
    };
  },
  methods: {
    submit(inputVals) {
      //  this.$emit("formSub", ...this.inputVals);
      this.$emit("formSub", inputVals);
    }
  }
};
</script>

<style>
legend {
  display: none;
}
fieldset {
  border: none;
}

.banner-block {
  position: relative;
  z-index: -1;
}

.search-box {
  background-color: white;
  min-height: 200px;
  margin: -160px 100px 0;
  padding: 20px 50px 10px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 2px 4px 8px #888;
  margin-bottom: 75px;
}

input[type="text"],
input[type="date"] {
  padding: 10px;
  border-radius: 5px;
  outline: none;
  box-shadow: none;
  width: 160px;
}
/* .arrow-img {
  display: inline;
} */
/* fieldset {
  margin: auto;
} */
.radio-btns {
  float: right;
  margin: 10px 0 40px 0;
}

.flight-details {
  width: 100%;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.arrow-img {
  position: absolute;
  margin: -76px 0 0 218px;
}

.bck-origin {
  background: url("../assets/map.svg") no-repeat 160px center;
}

.bck-date {
  background: url("../assets/calender.svg") no-repeat 155px center;
}

.bck-user {
  background: url("../assets/user.svg") no-repeat 390px center;
}
.user-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.user-details input[type="text"] {
  width: 400px;
}

.submitbtn {
  background: #2fe57c;
  width: 250px;
  font-size: 1.25rem;
  font-weight: 400;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 25px;
  box-shadow: 2px 4px 10px #888;
  cursor: pointer;
}
</style>
