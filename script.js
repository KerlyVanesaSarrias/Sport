function openSidebar() {
    document.getElementById("mySidebar").style.width = "320px";
    document.getElementById("overlay").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
  }
  

  fetch('/components/header.html')
  .then(res => res.text())
  .then(data => {
    const header = document.getElementById('header');
    if (header) header.innerHTML = data;
  });

fetch('/components/footer.html')
  .then(res => res.text())
  .then(data => {
    const footer = document.getElementById('footer');
    if (footer) footer.innerHTML = data;
  });