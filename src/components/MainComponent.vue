<template>
    <main>
         <div class="banner-block banner" >
        <img src="../assets/Banner.png" class="banner" alt="banner">
         </div>
        <form-section @formSub="previewData"></form-section>
        <preview :details='details'></preview>
        <list-view :alldata='alldata' :details='details' :filterMethod='filterMethod' :filterMethodround='filterMethodround'></list-view>
    </main>
</template>

<script>
/* eslint-disable */
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
      console.log(inputVals); // eslint-disable-line no-console
      this.details = inputVals;
      //   console.log(inputVals);
    }
  },
  computed: {
    filterMethod() {
      //   return _.filter(this.alldata, ["from", this.details.source]);
      return _.filter(this.alldata, {
        from: this.details.source,
        to: this.details.destination
      });
    },
    filterMethodround() {
      //   return _.filter(this.alldata, ["from", this.details.source]);
      return _.filter(this.alldata, {
        from: this.details.destination,
        to: this.details.source
      });
    }
  },

  created() {
    async function getAllflights(filename) {
      let response = await fetch(`http://localhost:3000/${filename}`);
      let data = await response.json();
      return data;
    }

    getAllflights("flightdb").then(data => {
      console.log(data);
      this.alldata = data;
      console.log("myjson data is fetched");
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
