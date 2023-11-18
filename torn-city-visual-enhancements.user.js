// ==UserScript==
// @name         Visual enhancements for Torn City
// @namespace    https://github.com/pirminis/torn-city-visual-enhancements
// @version      0.0.11
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

  updateStyles();
  improveAuctionPagination();

  function updateStyles() {
    GM_addStyle(`
      [class*="innerOutcomeWrapper"] [class*="story"],
      [class*="innerOutcomeWrapper"] [class*="divider"] {
        display: none;
      }
      .glow-red,
      #body.d .item-plate.glow-red,
      div[class*="imgContainer"] [class*='rarity3'] {
        filter: none;
        background: rgba(255,0,0,0.25);
      }
      .glow-orange,
      #body.d .item-plate.glow-orange,
      div[class*="imgContainer"] [class*='rarity2'] {
        filter: none;
        background: rgba(255,128,0,0.33);
      }
      .glow-yellow,
      #body.d .item-plate.glow-yellow,
      div[class*="imgContainer"] [class*='rarity1'] {
        filter: none;
        background: rgba(255,255,0,0.25);
      }

      #body.d .pagination-left {
        position: absolute;
        display: inline-block;
        left: 10px;
        top: 10px;
      }
      #body.d .pagination-right {
        position: absolute;
        display: inline-block;
        right: 10px;
        top: 10px;
      }
      .action-wrap.use-act.use-action {
        height: 55px;
      }
    `);
  }

  function improveAuctionPagination() {
    const itemsList = document.querySelector("#types-tab-1 .items-list-wrap");
    const pagination = document.querySelector("#types-tab-1 .pagination-wrap");

    if (itemsList && pagination && itemsList.nextElementSibling == pagination) {
      itemsList.before(pagination);
    }
  }
})(window);
