# Google Analytics 4 + React Router 6

Are you interested in integrating Google Analytics 4 with react-router-dom for event and navigation tracking?

1.  Install dependencies with `npm i install` or `yarn install`
2.  Find your Measurement ID from Google Analytics [(See how)](https://support.google.com/analytics/answer/12270356?hl=en#:~:text=A%20Measurement%20ID%20is%20an,same%20as%20your%20destination%20ID.)
3.  Edit the google tag in index.html with your Measurement ID
4.  Enjoy! :)

The magic of this solution is due to the following custom hook that is imported into App.js

    import { useEffect } from  'react';
    import { useLocation } from  'react-router-dom';

    export  const  usePageTracking  = () => {
        const location =  useLocation();

        useEffect(() => {
    		    window.gtag('event', 'page_view', {
    		    page_path: location.pathname + location.search + location.hash,
    		    page_search: location.search,
    		    page_hash: location.hash,
    	    });
        }, [location]);

    };

There are similar solutions for Universal Analytics also, but I decided to skip it because UA will be deprecated soon. ([Read more about it](https://support.google.com/analytics/answer/11583528?hl=en#:~:text=On%20July%201,%202023,%20standard,Google%20Analytics%204%20going%20forward.))
