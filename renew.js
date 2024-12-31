
function handleRenewal() {
    window.location.href = "/renewFinalized.html";
}

function initPage() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    const renewButton = document.getElementById("renewFinalizedButton");
    renewButton.addEventListener("click", () => {
      let allChecked = true; 
  
      checkboxes.forEach(box => {
        if (!box.checked) {
          allChecked = false; 
        }
      });
  
      if (allChecked) {
        window.location.href = "/thankyou.html";
      }
    });
  }
  

initPage()
