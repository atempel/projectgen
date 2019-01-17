// document.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello Bulma!');
// });

const app = new Vue({
  el: "#app",
  data: {
    min: 1,
    max: 10,
    randomNumber: 1,
    generating: false,
    pGenerated: "Your project will be generated here"
  },
  created: function () {
    this.generateNumber();
  },
  methods: {
    loadNum: function () {
      this.min = 1;
      this.max = 10;
      this.generateNumber();
    },
    getInput: function () {
      if (this.min > this.max) {
        [this.min, this.max] = [this.max, this.min];
      }
      this.generateNumber();
    },
    generateProject: function () {
      // WIP
    },
    generateNumber: function () {
      this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
  }
});