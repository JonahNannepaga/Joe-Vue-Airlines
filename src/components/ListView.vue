<template>
    <div class="list-section" v-show="details.trip != undefined">
        <div class="render-block" >
            <table>
                <thead>
                    <tr>
                        <th>Flight No.</th>
                        <th>Depature</th>
                        <th>Arrival</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(fdetails,index) in filterMethod" :key="index">
                        <td>{{fdetails.fno}}</td>
                        <td>{{fdetails.from | state-code}}({{fdetails.fromtime}})</td>
                        <td>{{fdetails.to | state-code}}({{fdetails.totime}})</td>
                        <td>{{fdetails.duration}}</td>
                        <td>{{fdetails.price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="render-block" v-show="details.trip == 'round'">
            <table>
                <thead>
                    <tr>
                        <th>Flight No.</th>
                        <th>Depature</th>
                        <th>Arrival</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(fdetails,index) in filterMethodround" :key="index">
                        <td>{{fdetails.fno}}</td>
                        <td>{{fdetails.from | state-code}}({{fdetails.fromtime}})</td>
                        <td>{{fdetails.to | state-code}}({{fdetails.totime}})</td>
                        <td>{{fdetails.duration}}</td>
                        <td>{{fdetails.price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {
  props: ["alldata", "details", "filterMethod", "filterMethodround"],
  data() {
    return {
      alldetails: ""
    };
  },
  methods: {},
  created() {
    this.alldetails = this.alldata;
    console.log(this.alldetails); // eslint-disable-line no-console
  }
};
</script>

<style>
.list-section {
  margin: 20px 100px;
  color: #3f4099;
}
th {
  font-size: 1.25rem;
  padding-right: 15px;
  padding-bottom: 10px;
}
td {
  padding-right: 15px;
  padding-bottom: 10px;
}

.render-block {
  display: inline-block;
  width: 50%;
}
</style>
