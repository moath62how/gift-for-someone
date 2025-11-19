// main.js – Initialize all features

import { initGiftFeature } from "./gift.js";
import { initSorryFeature } from "./sorry.js";
import { initFloatingHearts } from "./floating.js";
import './reasons.js';

document.addEventListener("DOMContentLoaded", () => {
    initGiftFeature();
    initSorryFeature();
    initFloatingHearts();
});
