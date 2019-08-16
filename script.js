var easterEgg = new Vue({
  el: "#title-div",
  data: {
    egg: false,
    title: "Michael Jackson",
    easterEgg: "Code for life."
  },
  methods: {
    easter: function() {
      this.egg = !this.egg
    }
  }
})