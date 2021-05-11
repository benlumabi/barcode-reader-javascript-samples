/* The purpose of this file is to combine the DBR Scanner initialization code as well as the common operations among all the samples in the settings folder */

let scanner = null;
let initialSettings = null;
let loadingText = document.getElementById('lib-load');
let modalSettings = document.getElementById('settingsModal');
let settingsBtn = document.getElementById('openSimpleSettingsMenu');
let closeModalBtn = document.getElementById('closeModalBtn');
let resultBox = document.getElementById('result');

// Create a BarcodeScanner instance on page load to speed things up.
window.onload = async function () {
    try {
        /** LICENSE ALERT - README
         * The library requires a license to work, the APIs organizationID and handshakeCode specify how to acquire a license.
         * If nothing is specified, a 7-day (public) trial license will be used by default which is the case in this sample.
         * Note that network connection is required for this license acquisition to work.
         */

        /* When using your own license, please uncomment the following lines and fill in your own information. */
        /* For more information, please refer to https://www.dynamsoft.com/license-tracking/docs/about/licensefaq.html?ver=latest#how-to-use-a-trackable-license. */

        // Dynamsoft.DBR.BarcodeReader.organizationID = "YOUR-ORGANIZATION-ID";
        // Dynamsoft.DBR.BarcodeReader.handshakeCode = "A-SPECIFIC-HANDSHAKECODE";
        // Dynamsoft.DBR.BarcodeReader.sessionPassword = "PASSWORD-TO-PROTECT-YOUR-LICENSE"; // Important field to protect your license.
        // Dynamsoft.DBR.BarcodeReader.licenseServer = ["YOUR-OWN-MAIN-LTS", "YOUR-OWN-STANDBY-LTS"]; // Ignore this line if you are using Dynamsoft-hosting LTS

        /* The API "productKeys" is an alternative way to license the library, the major difference is that it does not require a network. Contact support@dynamsoft.com for more information. */

        // Dynamsoft.DBR.BarcodeReader.productKeys = "YOUR-PRODUCT-KEY";

        /** LICENSE ALERT - THE END */

        loadingText.hidden = false;
        scanner = scanner || await Dynamsoft.DBR.BarcodeScanner.createInstance();
        initialSettings = await scanner.getRuntimeSettings();
        await scanner.setUIElement(document.getElementById('div-video-container'));
        startReading();
    } catch (ex) {
        alert(ex.message);
        throw ex;
    }

    // Open the settings modal menu once the settings button is clicked
    settingsBtn.onclick = function () {
        modalSettings.style.display = "block";
    }

    // Close the modal when the 'x' is clicked
    closeModalBtn.onclick = function () {
        modalSettings.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalSettings) {
            modalSettings.style.display = "none";
        }
    }

    /* The following defines an ontouchstart event for all the tooltip elements. This trigger is being added to take into account that there is no 'hover' event when using a mobile browser. Therefore, this event will be added so that the tooltip appears whenever it is tapped on a mobile browser */
    const tooltips = document.getElementsByClassName("tooltip");
    for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener('click', function () {
            var _tip = this;
            _tip.setAttribute('data-balloon-visible', '');
            setTimeout(function () {
                _tip.removeAttribute('data-balloon-visible');
            }, 3000);
        })
    }
    if (typeof initPage === "function")
        initPage();
};

// open the scanner video and start decoding once the Read Barcode button is clicked
async function startReading() {
    try {
        scanner.onFrameRead = (_results) => {
            for (let result of _results) {
                resultBox.value = result.barcodeFormatString + ": " + result.barcodeText;
            }
        };
        await scanner.show();
        loadingText.hidden = true;
        resultBox.style.visibility = "visible";
        settingsBtn.style.visibility = "visible";
    } catch (ex) {
        alert(ex.message);
        throw ex;
    }
}

function showModes(elID, modes, index) {
    var modesToShow = [];
    for (var i = 0; i < modes.length; i++) {
        var m = modes[i];
        if (i === index) {
            modesToShow.push("<strong>" + m + "</strong>")
        } else {
            modesToShow.push(m)
        }
    }
    document.getElementById(elID).innerHTML = modesToShow.join(", ");
}