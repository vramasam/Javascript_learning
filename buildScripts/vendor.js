/* This file contains references to the vendor libraries
  we're using in the project. This is used by webpack
  in the production build only. A separate bundle for vendor
  code is useful since it's unlikely to change as often
  as the application's code. So all the libraries we refernce
  here will be written to vendor.js so they can be
  cached until one of them change. So basically, this avoids
  customers having to downlaod a huge JS file anytime a line
  of code changes. They only have to download vendor.js when
  a vendor library changes which should be less frequent.
  Any files that aren't referenced here will be bundled into
  main.js for the production build.
  */

  /* eslint-disable no-unused-vars*/

  // Everything we define here will be separatly by webpack into file called vendor.js
  import fetch from 'whatwg-fetch'; // Of-Course the only library that we're using for our silly
                                    // demo app is the what working group fetch poly-fill, but
                                    // you get the idea. In real application we would likely
                                    // reference jQuery, React, Angular, bootstrap and so on here.
                                    // Any third party tools that we used taht can be listed here
