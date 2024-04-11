function dropdownNavMenu() {
    document.getElementById("myDropdown").classList.toggle("hidden");
  }
  
  window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        
        if (!openDropdown.classList.contains('hidden')) {
          openDropdown.classList.add('hidden');
        }
      }
    }
  }

