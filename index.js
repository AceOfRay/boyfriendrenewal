
function handleRenewal() {
    window.location.href = "/boyfriendrenewal/renew.html";
}

function handleUpgrade() {
    window.location.href = "/boyfriendrenewal/upgrade.html";
}

function initPage() {
    
    const renewButton = document.getElementById("renewButton");
    renewButton.addEventListener("click", () => {handleRenewal()});

    const upgradeButton = document.getElementById("upgradeButton");
    upgradeButton.addEventListener("click", () => {handleUpgrade()});

}

initPage()
