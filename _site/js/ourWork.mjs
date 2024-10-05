import { toggleTextOverflow } from "./general.mjs";

//Makes the specific Id's of the elements as arguments.
function addReadMoreSections(sectionContainerId, textContainerId, showMoreBtnId) {
    let sectionContainer = document.getElementById(sectionContainerId);
    let textContainer = document.querySelector(textContainerId);
    let showMoreBtn = document.querySelector(showMoreBtnId);
    toggleTextOverflow(sectionContainer, textContainer, showMoreBtn);
  }

//Add toggleTextOverflow functionality to individual sections:
//Healthcare section
addReadMoreSections("section-container", "#scroll-container-health", "#read-more-btn");
//Education section
addReadMoreSections("section-container-edu", "#scroll-container-edu", "#read-more-btn-edu");
// Living situation section
addReadMoreSections("section-container-lisi", "#scroll-container-lisi", "#read-more-btn-lisi");
//Food Distribution section
addReadMoreSections("section-container-food", "#scroll-container-food", "#read-more-btn-food");
//Music Lessong section
readMore("section-container-music", "#scroll-container-music", "#read-more-btn-music");
//Future goals section
addReadMoreSections("section-container-futuregoals", "#scroll-container-futuregoals", "#read-more-btn-futuregoals");
//Activities section
addReadMoreSections("section-container-activities", "#scroll-container-activities", "#read-more-btn-activities");