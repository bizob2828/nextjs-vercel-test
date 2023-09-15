export async function register(nextServer) {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { default: nextInstrumentation } = await import('@newrelic/next/lib/next-server.js')
    const newrelic = await import('newrelic')
    const shims = await import('newrelic/lib/shim/index.js')
    console.log(__dirname)
    const moduleName = 'next/dist/server/next-server'
    const shim = shims.createShimFromType(shims.constants.MODULE_TYPE.WEB_FRAMEWORK, newrelic.agent, moduleName, nextServer.dir + '/node_modules/next') 
    debugger
    nextInstrumentation(shim, nextServer, moduleName, true)
  }
}
