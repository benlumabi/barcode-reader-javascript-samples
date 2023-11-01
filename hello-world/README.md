# The Hello World Sample Set

As you have already gone through the [user guide](https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/?ver=latest#getting-started---hello-world), you may have come across some basic "Hello World" code that can help you create a simple web application using our SDK quickly.

In this set of samples, we will revisit the "Hello World" code and show how to implement it using some popular frameworks, such as Angular, React, and Vue.

Let's now go through each of the samples.

## Hello World

In this example, you will learn the minimum codes required to initialize and set up the SDK.

Let's quickly break down the methods used in order:

* `license`: This property specifies a license key.
* `createInstance()`: This method creates a `BarcodeScanner` object. This object can read barcodes directly from a video input with the help of its interactive UI (hidden by default) and the MediaDevices interface.
* `onFrameRead`: This event is triggered every time the SDK finishes scanning a video frame. The `results` object contains all the barcode results that the SDK have found on this frame. In this example, we print the results to the browser console.
* `onUniqueRead`: This event is triggered when the SDK finds a new barcode, which is unique among multiple frames. `txt` holds the barcode text value while `result` is an object that holds details of the barcode. In this example, an alert will be displayed on unique reads.
* `show()`: This method brings up the built-in UI of the `BarcodeScanner` object and starts scanning

Actually, it is not necessary to define both onFrameRead and onUniqueRead in the code. onUniqueRead is more commonly used because it is triggered only when a new barcode is detected, rather than on every frame.

## Hello World - Read Barcodes from an Image

The second sample in this set focuses on the secondary class `BarcodeReader` which is a low-level barcode reader that processes static images and returns barcode results.

In this sample, an event listener is set up so that the SDK decodes any images that the user uploads.

When working with the BarcodeReader class, the main method to use is [`decode`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader.html?ver=latest#decode), although the class provides several other methods if you need to work with base64 strings or other formats. You can find the rest of the image decoding methods [here](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader.html?ver=latest#decode-barcodes).

## Hello World in Angular

Read more in the README under "angular".

## Hello World in React

Read more in the README under "react".

## Hello World in React using Hooks

Read more in the README under "react-hooks".

## Hello World in Vue

Read more in the README under "vue".

## Hello World in Next.js

Read more in the README under "next".

## Hello World in NuxtJS

Read more in the README under "nuxt".

## Hello World in Electron

Read more in the README under "electron".

## Hello World in PWA

Read more in the README under "pwa".

## Hello World with RequireJS

This sample shows how to use the SDK in a web page based on RequireJS.

## Hello World with ES6

This sample shows how to use the SDK in a web page based on ES6 (also known as ECMAScript 2015 or ECMAScript 6).

## Hello World with WebView

Read more in the README under "webview".

## Support

If you have any questions, feel free to [contact Dynamsoft support](https://www.dynamsoft.com/company/contact?utm_source=sampleReadme).