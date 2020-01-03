<template>
    <div class="preview-section" v-show=displaycontent>
        <ul class="preview-tab">
            <li>
                <div class="preview-list-item">
                    <span class="preview-title">{{details.source | state-code}} </span>
                    <span class="preview-city">{{details.source}}</span>
                    <span class="preview-city">{{details.depature | date-string}}</span>
                </div>
            </li>
            <li><img :src="this.details.trip === 'oneway' ? require(`@/assets/${this.tripimage.oneway}.png`) : require(`@/assets/${this.tripimage.roundtrip}.png`)" alt="dynamicimage"></li>
            <li>
                <div class="preview-list-item">
                    <span class="preview-title">{{details.destination | state-code}}  </span>
                    <span class="preview-city">{{details.destination}}</span>
                    <span class="preview-city" v-show="details.trip=='round'" >{{details.arrival | date-string}}</span>
                </div>
            </li>
            <li>
                <div class="preview-list-item">
                    <span class="preview-title">Class</span>
                    <span class="preview-des">Economy</span>
                </div>
            </li>
            <li>
                <div class="preview-list-item">
                    <span class="preview-title">{{details.passenger}}</span>
                    <span class="preview-des">1 Adult</span>    
                </div>
                </li>
            <li><button class="change-btn">Change</button></li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      displaycontent: false,
      tripimage: {
        oneway: "preview-one",
        roundtrip: "preview"
      }
    };
  },
  props: ["details"],
  updated() {
    this.displaycontent = true;
  }
};
</script>

<style>
.preview-section {
  min-height: 110px;
  border-top: 2px solid #3f4099;
  border-bottom: 2px solid #3f4099;
  margin-bottom: 75px;
  align-items: center;
}
.preview-tab {
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  color: #3f4099;
  box-sizing: border-box;
}
.preview-list-item {
  display: flex;
  text-align: center;
  flex-direction: column;
}
.preview-title {
  font-size: 2rem;
}
.preview-city {
  font-size: 0.75rem;
  font-weight: bold;
}
.preview-des {
  font-weight: bold;
}
.change-btn {
  padding: 10px 25px;
  background: transparent;
  border: 1px solid #3f419970;
  color: #3f4099;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
}
</style>