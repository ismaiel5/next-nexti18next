const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))


  //  rotues with language query params for the page

  // server.get("/:lang", (req, res) => {
  //   const actualPage = "/";
  //   const queryParams = { lang: req.params.lang };
  //   app.render(req, res, actualPage, queryParams);
  // })


  // server.get("/:lang/salary", (req, res) => {
  //   const actualPage = "/salary";
  //   const queryParams = { lang: req.params.lang };
  //   app.render(req, res, actualPage, queryParams);
  // })

  server.get("/salary/:position/:location", (req, res) => {
    const actualPage = "/salary";
    const queryParams = { lang: req.params.lang, position: req.params.position, location: req.params.location };
    app.render(req, res, actualPage, queryParams);
  })


  // server.get('/:lang/second-page', (req, res) => {
  //   const actualPage = "/second-page";
  //   const queryParams = { lang: req.params.lang };
  //   app.render(req, res, actualPage, queryParams)
  // });


  server.get('*', (req, res) => {
    // console.log('url :: ', req.headers.host);
    handle(req, res)
  });




  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
