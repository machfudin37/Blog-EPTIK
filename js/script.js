function showTab(tabId) {
  // Menghapus class 'active' dari semua tab-content
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function (tabContent) {
    tabContent.classList.remove("active");
  });

  // Menambah class 'active' hanya pada tab-content yang diinginkan
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add("active");
  }
}
