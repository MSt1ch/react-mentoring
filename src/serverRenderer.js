import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './Root';
import { StaticRouter } from 'react-router-dom';
import configureStore from './configureStore';

function renderHTML (html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#000000" />
                <title>React App</title>
                ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
            </head>
            <body>
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
                <div id="app" class="app">${ html }</div>
                <script>
                    // WARNING: See the following for security issues around embedding JSON in HTML:
                    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                    window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
}

export default function serverRenderer () {
    return (req, res) => {
        const store = configureStore();
        // This context object contains the results of the render
        const context = {};

        const renderRoot = () => (
          <Root
            context={ context }
            location={ req.url }
            Router={ StaticRouter }
            store={ store }
          />
        );

        renderToString(renderRoot());

        // context.url will contain the URL to redirect to if a <Redirect> was used
        if (context.url) {
          res.writeHead(302, {
            Location: context.url
          });
          res.end();
          return;
        }

        const htmlString = renderToString(renderRoot());
        const preloadedState = store.getState();

        res.send(renderHTML(htmlString, preloadedState));
      };
  }

