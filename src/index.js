const TailwindDarkMode = (function () {
  /**
   * Initializes the dark mode toggle feature.
   *
   * @private
   *
   * @function init
   * @returns {void}
   */
  function init() {
    const themeNameLocalStorage = "THEME";

    const switchElement = document.getElementById("switch");

    switchElement.addEventListener("change", switchHandler);

    window.addEventListener("DOMContentLoaded", windowHandler);

    /**
     * Checks if there is a theme set in localStorage and if so,
     * applies it to the documentElement and sets the switch
     * element to the correct state.
     *
     * @private
     *
     * @function windowHandler
     * @param {Event} event - The event triggered when the window
     *                        is loaded.
     * @returns {void}
     */
    function windowHandler(event) {
      const localStorageValue = localStorage.getItem(themeNameLocalStorage);

      if (localStorageValue) {
        if (localStorageValue === "dark") {
          document.documentElement.classList.add("dark");
          switchElement.checked = true;
        } else if (localStorageValue === "light") {
          document.documentElement.classList.remove("dark");
          switchElement.checked = false;
        }
      }
    }

    /**
     * Handles the change event of the theme switch. Toggles the 'dark' class on the
     * document's root element based on the switch's checked state and updates the
     * theme preference in localStorage.
     *
     * @private
     *
     * @function switchHandler
     * @param {Event} event - The event triggered when the switch is toggled.
     * @returns {void}
     */
    function switchHandler(event) {
      const html = document.documentElement;

      if (event.target.checked) {
        html.classList.add("dark");

        localStorage.setItem(themeNameLocalStorage, "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem(themeNameLocalStorage, "light");
      }
    }
  }

  return {
    init,
  };
})();

TailwindDarkMode.init();
