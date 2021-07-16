const Alpaca = require('@alpacahq/alpaca-trade-api');

const alpaca = new Alpaca({
  keyId: process.env.KEY_ID,
  secretKey: process.env.SECRET_KEY,
  paper: true,
  usePolygon: false,
});

alpaca.getAccount().then((account) => {
  console.log('Current Account:', account);
});
