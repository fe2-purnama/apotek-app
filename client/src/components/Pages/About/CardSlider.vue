<script>
export default {
  data() {
    return {
      boxes: [
        { key: 1, word: 'Yeriko' },
        { key: 2, word: 'Ari' },
        { key: 3, word: 'Ibnu' },
        { key: 4, word: 'Amir' },
        { key: 5, word: 'Rizqy' },
        { key: 6, word: 'Ginda' },
      ],
      currentIndex: 0
    };
  },
  computed: {
    displayedBoxes() {
      return this.boxes.slice(this.currentIndex, this.currentIndex + 3);
    }
  },
  methods: {
    next() {
      if (this.currentIndex < this.boxes.length - 3) {
        this.currentIndex++;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
};
</script>

<template>
  <div id="CONTRIBUTORS">
    <h1>Our Team</h1>
  </div>

  <div id="slider-container">
    <div id="slider">
      <button @click="prev">&#8592;</button> <!-- Left arrow symbol -->
      <transition-group name="slide" tag="div" id="photos">
        <div class="box" v-for="(item, index) in displayedBoxes" :key="item.key">
          <div :class="'box' + (index + 1)"></div>
          <p>{{ item.word }}</p>
        </div>
      </transition-group>
      <button @click="next">&#8594;</button> <!-- Right arrow symbol -->
    </div>
  </div>
</template>

<style>
#CONTRIBUTORS {
    text-align: center;
}

#photos {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.box {
    text-align: center; /* Center the text under each box */
}

.box1, .box2, .box3, .box4, .box5, .box6 {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
}

.box1 {
    background-color: #00e4e4;
}

.box2 {
    background-color: #1aa7a7;
}

.box3 {
    background-color: #18587c;
}

.box4 {
    background-color: #235e5e;
}

.box5 {
    background-color: #0c6854;
}

.box6 {
  background-color: #2a7d8b;
}

p {
    margin: 0; /* Remove default paragraph margin */
}

/* SLIDER  */
#slider-container { 
    text-align: center;
}

#slider {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  text-align: center;
  margin: 10px;
  transition: all 0.5s ease;
}

/* Vue transition styles */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}

button {
    background-color: #646464;
    border: 0;
    color: #ffffff;
    padding: 15px;
    border-radius: 7px;
    margin: 10px;
    cursor: pointer;
}

#prev {
    position: absolute;
  left: 0; /* Position the 'prev' button on the left */
}

#next {
        position: absolute;
  right: 0; /* Position the 'next' button on the right */
}
</style>