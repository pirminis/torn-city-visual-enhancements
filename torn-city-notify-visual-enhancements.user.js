// ==UserScript==
// @name         Visual enhancements for Torn City
// @namespace    https://github.com/pirminis/torn-city-visual-enhancements
// @version      0.0.2
// @description  Visual enhancements for Torn City
// @author       pirminis
// @match        https://www.torn.com/*
// @updateURL    https://github.com/pirminis/torn-city-visual-enhancements/raw/master/torn-city-visual-enhancements.user.js
// @downloadURL  https://github.com/pirminis/torn-city-visual-enhancements/raw/master/torn-city-visual-enhancements.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function(global) {
  "use strict";

  const loaded = "tornCityVisualEnhancementsLoaded";

  if (window[loaded]) {
    return;
  }

  window[loaded] = true;

  console.log("Torn City visual enhancements loaded.");

  updateStyles();

  function updateStyles() {
    GM_addStyle(`
      img.torn-item.red {
        filter: none;
        background-color: rgba(255,0,0,0.25);
      }
      img.torn-item.orange {
        filter: none;
        background-color: rgba(255,128,0,0.25);
      }
      img.torn-item.yellow {
        filter: none;
        background-color: rgba(255,255,0,0.25);
      }
    `);
  }
})(window);
