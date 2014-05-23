# mLabs Alerts Link Browser

## Details

- URL: http://mlabs-alerts.herokuapp.com/
- Code: https://github.com/nknj/mlabs-alerts-frontend
- Stack: AngularJS, hosted using Express on Node.js
  + To deploy this, I wrote my own Heroku buildpack for angular apps that you can see here.

## Functionality

- Load a URL by entering the it in the form in the header navbar
- Share on Twitter (Tweet content will be customised based on link)
- Share on Facebook (Share content will be customised)
  + I set up a sample FB app of mLabs alerts to do this
- Ask for help (Contact us button on the bottom right)
  + Subject of the email will be customised based on link
- Fully Responsive (using bootstrap) - I can’t guarantee the content in the iFrame to be responsive ;)
- Single-page application, everything loads on to the browser on the first load.

## Testing

Tested on:
- Chrome and Safari, OSX
- Chrome and Safari, iOS

## Limitations

Doesn’t work for websites that require same origin requests. These are usually websites like Facebook, Google, Reddit that want users to access their site directly. News websites like BBC, CNN, WSJ, Techcrunch, do not enforce this policy. I haven't come across any news site that prevented this load while testing. So, this works best for our purposes.

SAME ORIGIN requirements are a browser security feature. There are several hacks to bypass this, but if I was to hack this, I would create a proxy server. I.E. instead of making a request to reddit.com, I would make a request to something like proxy.mlabsalerts.com/reddit.com that would just forward the website to me. This will be a reliable bypass without the hassles of browser compatibility.
