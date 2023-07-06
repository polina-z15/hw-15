document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".nav-link");
  var panes = document.querySelectorAll(".tab-pane");

  function handleTabClick(event) {
    event.preventDefault();

    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });

    panes.forEach(function (pane) {
      pane.classList.remove("active");
    });
    this.classList.add("active");

    var targetPaneId = this.getAttribute("data-target");
    var targetPane = document.querySelector(targetPaneId);
    targetPane.classList.add("active");
  }
  tabs.forEach(function (tab) {
    tab.addEventListener("click", handleTabClick);
  });
});
