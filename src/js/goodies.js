// USE LAX.JS
import lax from "lax.js";

function initLax() {
  lax.setup();

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
}

window.addEventListener("load", initLax());

// EVENT-GROUP
function useEventGroup() {
  const useEvents = document.querySelectorAll(".use-event");

  useEvents.forEach(event => {
    const listener = event.getAttribute("data-event");
    const setElement = event.getAttribute("data-event-element");
    const setClass = event.getAttribute("data-event-add");

    event.addEventListener(listener, () => {
      const elements = document.querySelectorAll(`.${setElement}`);

      elements.forEach(element => {
        element.classList.toggle(setClass);
        console.log(element, element.classList);
      });
    });
  });
}

useEventGroup();

// WIDOW SLAYER
function widowSlayer() {
  const pTag = document.querySelectorAll("p");

  pTag.forEach(tag => {
    // 1. Split all the words from the p tag from anytime there's a space
    const words = tag.innerHTML.split(" ");
    // 2. Find the last space and insert a &nbsp; in it's place
    const lastWordsList = words.slice(-1) && words.splice(-2);
    // 3. Join the last two togehter with a &nbsp;
    tag.innerHTML = words.join(" ") + " " + lastWordsList.join("&nbsp;");
  });
}

widowSlayer();

// PARALAX PG MOUSE
//? When we move the mouse, we want the items to follow it

//! 1. Add in the '.pg-mouse' on the wrapper div
//! 2. Add in '[data-pg-speed]' to all items that you wish to have parallax
//todo positive go in the direction of the scroll and negative go opposite
//todo the higher the number the faster the speed of the animation

function runParallaxPG() {
  // HTML SETUP
  const pgMouse = document.querySelectorAll(".pg-mouse");

  // startingPos SETUP
  const startingPos = {
    xPos: {
      begin: 0,
      end: window.innerWidth,
      position: 0
    },

    yPos: {
      begin: 0,
      end: window.innerHeight,
      position: 0
    }
  };

  const startingXPosRange = startingPos.xPos.end - startingPos.xPos.begin;
  const startingYPosRange = startingPos.yPos.end - startingPos.yPos.begin;

  // itemPosition SETUP
  const itemPosition = {
    x: {
      begin: -150,
      end: 150,
      position: 0
    },
    y: {
      begin: -150,
      end: 150,
      position: 0
    }
  };

  const xRange = itemPosition.x.end - itemPosition.x.begin;
  const yRange = itemPosition.y.end - itemPosition.y.begin;

  const startPgMouse = event => {
    // Mouse x
    startingPos.xPos.position = event.clientX;
    startingPos.xPos.fraction =
      (startingPos.xPos.position - startingPos.xPos.begin) / startingXPosRange;
    // Mouse y
    startingPos.yPos.position = event.clientY;
    startingPos.yPos.fraction =
      (startingPos.yPos.position - startingPos.yPos.begin) / startingYPosRange;
    // itemPosition X
    // The .end - will make it move inverse of the mouse
    itemPosition.x.position =
      itemPosition.x.end - startingPos.xPos.fraction * xRange;
    // itemPosition Y
    itemPosition.y.position =
      itemPosition.y.end - startingPos.yPos.fraction * yRange;

    //itemPosition to HTML
    pgMouse.forEach(pg => {
      const tags = pg.querySelectorAll("[data-pg-speed]");

      tags.forEach(tag => {
        const pgSpeed = parseFloat(tag.getAttribute("data-pg-speed"));

        let newItemPosition = {
          x: itemPosition.x.position - itemPosition.x.position * pgSpeed,
          y: itemPosition.y.position - itemPosition.y.position * pgSpeed,
          zIndex: 10000 - 10000 * pgSpeed
        };
        tag.style.zIndex = newItemPosition.zIndex;
        tag.style.transform = `translate(${newItemPosition.x}px, ${newItemPosition.y}px`;
        tag.style.transition = "transform  ease";
      });
    });
  };

  const windowResize = () => {
    // This is the X position
    startingPos.xPos.end = window.innerWidth;
    startingXPosRange = startingPos.xPos.end - startingPos.xPos.begin;

    // This is the Y position
    startingPos.yPos.end = window.innerHeight;
    startingYPosRange = startingPos.yPos.end - startingPos.yPos.begin;
  };

  //todo If window.innerwidth = a certain amount run the mouse follow else run the device orientation

  const mouseWrapper = document.querySelectorAll(".pg-mouse");
  // Run parallax mouse only on tablet and above

  const breakpointMedium = "1050";

  if (window.innerWidth > breakpointMedium) {
    mouseWrapper.forEach(wrapper => {
      wrapper.addEventListener("mousemove", startPgMouse);
      wrapper.addEventListener("resize", windowResize);
    });
  }
}

runParallaxPG();

// REFRESH JS AFTER SWUP TRANSITION
document.addEventListener("swup:contentReplaced", () => {
  widowSlayer();
  initLax();
  runParallaxPG();
  useEventGroup();
});
