const sharePrice = require("share-price");
exports.handler = async function (event, context) {
  const vmw = await new Promise((resolve, reject) => {
    sharePrice.getSharePrice({ stockSymbol: "VMW" }).then(function(stockPrice) {
      resolve(stockPrice);
    }).catch((error) => {
      reject(error);
    });
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      VMWareStock: vmw,
      message: "Hello World from example v4.",
      path: event.path,
      headers: event.headers
      }),
  };
}

