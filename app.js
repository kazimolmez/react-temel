import service from "./lib/service.js"

(async() => {
    const data = await service.getData(1)
    console.log(data)
})()