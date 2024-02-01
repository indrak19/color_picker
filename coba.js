window.addEventListener("load", () => {
  let ThemeColors = [
    "#ffffff",
    "#000000",
    "#eeeeee",
    "#134f5c",
    "#0b5394",
    "#e69138",
    "#bcbcbc",
    "#FFBF00",
    "#6fa8dc",
    "#8fce00",
  ];
  let box_1 = ["#e5e5e5", "#cccccc", "#b2b2b2", "#999999", "#7f7f7f"];
  let box_2 = ["#666666", "#4c4c4c", "#323232", "#191919", "#000000"];
  let box_3 = ["#d6d6d6", "#bebebe", "#8e8e8e", "#171717", "#000000"];
  let box_4 = ["#e7edee", "#a0b8bd", "#0f3f49", "#071f24", "#030f12"];
  let box_5 = ["#e6edf4", "#b5cbde", "#9dbad4", "#23649e", "#0b5394"];
  let box_6 = ["#fae9d7", "#f5d3af", "#f0bd87", "#eba75f", "#cf8232"];
  let box_7 = ["#f1f1f1", "#dddddd", "#bcbcbc", "#838383", "#5e5e5e"];
  let box_8 = ["#fff2cc", "#ffdf7f", "#ffd24c", "#e5ab00", "#b28500"];
  let box_9 = ["#e2edf8", "#c5dcf1", "#b7d3ed", "#7db0df", "#2c4358"];
  let box_10 = ["#ddf0b2", "#bbe166", "#a5d732", "#80b900", "#557b00"];
  let StandardColor = [
    "#990000",
    "#f40303",
    "#FFBF00",
    "#faff00",
    "#ace924",
    "#61d42f",
    "#5fb3ff",
    "#3d85c6",
    "#243166",
    "#910e5b",
  ];
  let RecentColor = [];
  const hexa = document.getElementById("hexa");
  const box = document.getElementById("box");

  //   memunculkan color
  const muncul = document.getElementById("color");
  document.getElementById("kotak").onclick = () => {
    muncul.classList.toggle("active");
  };

  for (let i = 0; i < ThemeColors.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = ThemeColors[i];
    document.getElementById("ThemeColor").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = ThemeColors[i];
      box.style.backgroundColor = ThemeColors[i];
      RecentColor.push(ThemeColors[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = ThemeColors[i];
          box.style.backgroundColor = ThemeColors[i];
        });
      }
    });
  }
  for (let i = 0; i < box_1.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_1[i];
    document.getElementById("box_1").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_1[i];
      box.style.backgroundColor = box_1[i];
      RecentColor.push(box_1[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_1[i];
          box.style.backgroundColor = box_1[i];
        });
      }
    });
  }
  for (let i = 0; i < box_2.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_2[i];
    document.getElementById("box_2").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_2[i];
      box.style.backgroundColor = box_2[i];
      RecentColor.push(box_2[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_2[i];
          box.style.backgroundColor = box_2[i];
        });
      }
    });
  }
  for (let i = 0; i < box_3.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_3[i];
    document.getElementById("box_3").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_3[i];
      box.style.backgroundColor = box_3[i];
      RecentColor.push(box_3[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_3[i];
          box.style.backgroundColor = box_3[i];
        });
      }
    });
  }
  for (let i = 0; i < box_4.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_4[i];
    document.getElementById("box_4").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_4[i];
      box.style.backgroundColor = box_4[i];
      RecentColor.push(box_4[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_4[i];
          box.style.backgroundColor = box_4[i];
        });
      }
    });
  }
  for (let i = 0; i < box_5.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_5[i];
    document.getElementById("box_5").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_5[i];
      box.style.backgroundColor = box_5[i];
      RecentColor.push(box_5[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_5[i];
          box.style.backgroundColor = box_5[i];
        });
      }
    });
  }
  for (let i = 0; i < box_6.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_6[i];
    document.getElementById("box_6").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_6[i];
      box.style.backgroundColor = box_6[i];
      RecentColor.push(box_6[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_6[i];
          box.style.backgroundColor = box_6[i];
        });
      }
    });
  }
  for (let i = 0; i < box_7.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_7[i];
    document.getElementById("box_7").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_7[i];
      box.style.backgroundColor = box_7[i];
      RecentColor.push(box_7[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_7[i];
          box.style.backgroundColor = box_7[i];
        });
      }
    });
  }
  for (let i = 0; i < box_8.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_8[i];
    document.getElementById("box_8").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_8[i];
      box.style.backgroundColor = box_8[i];
      RecentColor.push(box_8[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_8[i];
          box.style.backgroundColor = box_8[i];
        });
      }
    });
  }
  for (let i = 0; i < box_9.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_9[i];
    document.getElementById("box_9").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_9[i];
      box.style.backgroundColor = box_9[i];
      RecentColor.push(box_9[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_9[i];
          box.style.backgroundColor = box_9[i];
        });
      }
    });
  }
  for (let i = 0; i < box_10.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = box_10[i];
    document.getElementById("box_10").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = box_10[i];
      box.style.backgroundColor = box_10[i];
      RecentColor.push(box_10[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = box_10[i];
          box.style.backgroundColor = box_10[i];
        });
      }
    });
  }
  for (let i = 0; i < StandardColor.length; i++) {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = StandardColor[i];
    document.getElementById("StandardColor").appendChild(div);
    div.addEventListener("click", function () {
      hexa.innerHTML = StandardColor[i];
      box.style.backgroundColor = StandardColor[i];
      RecentColor.push(StandardColor[i]);
      const recent = document.createElement("div");
      recent.className = "now-color";
      document.getElementById("recent").appendChild(recent);
      for (j = 0; j < RecentColor.length; j++) {
        const now = document.getElementsByClassName("now-color");
        now[j].style.backgroundColor = RecentColor[j];
        recent.addEventListener("click", function () {
          hexa.innerHTML = StandardColor[i];
          box.style.backgroundColor = StandardColor[i];
        });
      }
    });
  }
});
