const express = require('express');
const httpProxy = require ('http-proxy');
const app = express();
const port = 8000;

const apiProxy = httpProxy.createProxyServer();

const Search = 'http://nodedockersearch-env.z6b7pgpgn9.us-east-2.elasticbeanstalk.com/';
const Description = 'http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/';
const ProductImage = 'http://fecimages-env.pjpdatnnmu.us-east-1.elasticbeanstalk.com/';
const Checkout = 'http://Amazonproj-env.uee7t6cmb9.us-east-2.elasticbeanstalk.com';
const Carousel= 'http://saskatchewanizon-env.ed33rmniub.us-east-2.elasticbeanstalk.com/';
const Ratings = 'http://Canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/';

app.all('/Search/*', (req, res) => {
  apiProxy.web(req, res, {target: Search});
});

app.all('/Description/*', (req, res) => {
  apiProxy.web(req, res, {target: Description});
});

app.all('/ProductImage/*', (req, res) => {
  apiProxy.web(req, res, {target: ProductImage});
});

app.all('/Checkout/*', (req, res) => {
  apiProxy.web(req, res, {target: Checkout});
});

app.all('/Carousel/*', (req, res) => {
  apiProxy.web(req, res, {target: Carousel});
});

app.all('/Ratings/*', (req, res) => {
  apiProxy.web(req, res, {target: Ratings});
});

//
app.listen(port, () => {console.log(`just chillin at ${port}`)});