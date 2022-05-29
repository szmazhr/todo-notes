class Clock {
  constructor(template) {
    this.template = template;
  }

  render(element) {
    const months = ["Jan","Few","Mar","Apr","May","Jun","Jul","Aug","Sep", "Oct","Nov","Dec"];
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let day = date.getDate();
    let month = months[date.getMonth()];
    let hr12 = "AM";
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs)
      .replace("D", day)
      .replace("M", month);

    element.textContent = output;
  }

  stop() {
    clearInterval(this.timer);
    return "Stopped";
  }

  start(element) {
    this.timer = setInterval(() => {
      this.render(element);
    }, 1000);
    return "Started";
  }
}

export default Clock;