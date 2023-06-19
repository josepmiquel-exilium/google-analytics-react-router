
# Google Analytics 4 + React Router 6 Integration

This repository provides a solution for integrating Google Analytics 4 with `react-router-dom` to track events and navigation.

## Usage

1.  Install the dependencies by running `npm install` or `yarn install`.
2.  Obtain your Measurement ID from Google Analytics. You can find instructions on how to do this [here](https://support.google.com/analytics/answer/12270356?hl=en#:~:text=A%20Measurement%20ID%20is%20an,same%20as%20your%20destination%20ID.).
3.  Open the **index.html** file and replace the Google Analytics tag with your Measurement ID.
4.  Enjoy the benefits of Google Analytics integration!

The magic of this solution lies in the custom hook imported into **App.js**:

    import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';
    
    export const usePageTracking = () => {
        const location = useLocation();
    
	    useEffect(() => {
	        window.gtag('event', 'page_view', {
	            page_path: location.pathname + location.search + location.hash,
	            page_search: location.search,
	            page_hash: location.hash,
	        });
	    }, [location]);
    };

By utilizing this custom hook, events and navigation are tracked automatically with Google Analytics every time the page changes.

Note: While similar solutions exist for Universal Analytics, this repository focuses on Google Analytics 4 as Universal Analytics is deprecated ([read more about it](https://support.google.com/analytics/answer/11583528?hl=en#:~:text=On%20July%201,%202023,%20standard,Google%20Analytics%204%20going%20forward.)). Feel free to explore alternative solutions if Universal Analytics is a better fit for your needs.
