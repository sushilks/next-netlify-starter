exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World from example v3. \n
        path=${event.path}, headers=${event.headers}\n
        clientcontext=${context.clientContex}
        ` }),
    };
  }