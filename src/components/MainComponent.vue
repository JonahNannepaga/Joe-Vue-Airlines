<template>
    <main>
        <!-- Banner image -->
         <div class="banner-block banner" >
            <img src="../assets/Banner.png" class="banner" alt="banner">
         </div>
        <!-- Form Component - searching -->
        <form-section @formSub="previewData"></form-section>
        <!-- Preview Component - displays details  -->
        <preview :details='details'></preview>
        <!-- List Component - displays the available flights -->
        <list-view :alldata='alldata' :details='details' :filterMethod='filterMethod' :filterMethodround='filterMethodround'></list-view>
    </main>
</template>

<script>
import _ from "lodash";
import Form from "../components/FormComponent.vue";
import Preview from "../components/Preview.vue";
import List from "../components/ListView.vue";
export default {
  data() {
    return {
      details: {},
      alldata: {}
    };
  },
  components: {
    "form-section": Form,
    preview: Preview,
    "list-view": List
  },
  methods: {
    previewData(inputVals) {
      console.log("user input values", inputVals); // eslint-disable-line no-console
      this.details = inputVals;
      //console.log(inputVals);
    },
    async getAllflights(filename) {
      let response = await fetch(`http://localhost:3000/${filename}`);
      let data = await response.json();
      return data;
    }
  },
  computed: {
    //filter oneway
    filterMethod() {
      return _.filter(this.alldata, {
        from: this.details.source,
        to: this.details.destination,
        day: this.details.departureday
      });
    },

    //filter twoway
    filterMethodround() {
      return _.filter(this.alldata, {
        from: this.details.destination,
        to: this.details.source,
        day: this.details.departureday
      });
    }
  },

  created() {
    //Fetching all the flights data initially
    this.getAllflights("flightdb").then(data => {
      console.log(data); // eslint-disable-line no-console
      console.log("myjson data is fetched"); // eslint-disable-line no-console
      this.alldata = data;
    });
  }
};
</script>

<style>
.banner {
  width: 100%;
  height: 550px;
}
</style>