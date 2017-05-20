import './modules'

console.log(`app.js has loaded!`)
if (module.hot) {
    module.hot.accept();
}