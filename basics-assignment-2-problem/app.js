const app = Vue.createApp({
  data() {
    return {
      output: "",
      onEnterText: ""
    };
  },
  methods: {
    setonEnter(event) {
      this.onEnterText = event.target.value;
    },
    grabInput(event) {
      this.output = event.target.value;
    },
    confirmInput() {
      this.onEnterText = this.output;
    },
    alert() {
      alert("HELLOOOOOO!");
    }
  }
});

app.mount("#assignment");
