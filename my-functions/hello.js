const SI = require('nodejs-stock-info')
exports.handler = async function (event, context) {
  let stockInfo = new SI("vmw");
  const vmw = await new Promise(resolve => {
    stockInfo.getStockInfo().then((response) => {
      resolve(response);
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