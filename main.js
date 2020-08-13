$(document).ready(function () {
  const particlesJSON = {
    "particles": {
      "number": {
        "value": 336,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  particlesJS("particles-js", particlesJSON);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTimeSalam() {
    var ucapanSalam = "";
    var todaySalam = new Date();
    var hSalam = todaySalam.getHours();
    var mSalam = todaySalam.getMinutes();
    var sSalam = todaySalam.getSeconds();
    mSalam = checkTime(mSalam);
    sSalam = checkTime(sSalam);
    if (hSalam < 1) {
      ucapanSalam = "Cie yang bertambah usianya"
      kata1 = "Sukses dan sehat selalu ya sayang ♥️";
      kata2 = "Semoga keinginan sayang tercapai<i class='fa fa-heart'></i>";
      kata3 = "Dan jangan pernah lupain mas ya 🙃️";
      kata4 = "Selamat ulang tahun sayangku 😗♥️"
    } else {
      if (hSalam < 11) {
        ucapanSalam = "Selamat Pagi Lia Sayang 😗"
        kata1 = "Jangan lupa sarapan";
        kata2 = "Jangan sampe jatuh sakit lagi loh😤<i class='fa fa-heart'></i>";
        kata3 = "Selamat beraktivitas ♥️";
        kata4 = "Have a nice day! ♥️";
      } else {
        if (hSalam < 15) {
          ucapanSalam = "Selamat Siang Lia Sayang ♥️♥️"
          kata1 = "Jangan lupa istirahat 😗";
          kata2 = "Kesehatan sayang penting tau 😤♥️";
          kata3 = "";
          kata4 = "Tetap semangat ya sayang!♥️";
        } else {
          if (hSalam < 18) {
            ucapanSalam = "Selamat Sore Pandaku 🐼♥️"
            kata1 = "Udah cepetan mandi gih ♥️";
            kata2 = "Ga baik tau kalo mandinya malam 🙃<i class='fa fa-heart'></i>";
            kata3 = "Kalo ada yang menarik hari ini️";
            kata4 = "Jangan lupa ceritain ya!♥️";
          } else {
              ucapanSalam = "                                                                                  "
              kata1 = "                                                                                        ";
              kata2 = "                                                                                        ";
              kata3 = "Nungguin apaan coba?";
              kata4 = "Pasti lelah,cepet tidur gih 😗";
          }
        }
      }
    }
    // $(".salam").html(ucapanSalam);
    var typed = new Typed('h3', {
      strings: [ucapanSalam, kata1, kata2,kata3,kata4],
      smartBackspace: true,
      showCursor: 0,
      typeSpeed: 100,
    });
  }

  window.onload = startTimeSalam();
})