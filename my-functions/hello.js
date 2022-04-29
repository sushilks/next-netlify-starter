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
      vmwStock: vmw, message: `Hello World from example v3. \n
        path=${event.path}, headers=${event.headers}\n
        clientcontext=${context.clientContex}
        ` }),
  };
}

