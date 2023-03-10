const baseAddressMap = {
  //test
  localhost: "https://polaris-core.datarete.cloud/",

  //live
  "polaris.datarete.cloud": "https://polaris.datarete.cloud/",
}

const themesMap = {
  localhost: "blue-theme",
  "prestitosi.datarete.cloud": "blue-theme",
}

const host = window.location.hostname
const cleanedHost = host.replace(/[^a-z0-9._-]/gi, "").toLowerCase()

let baseAddress = null
let theme = null
if (cleanedHost) {
  baseAddress = baseAddressMap[host] || null
  theme = themesMap[cleanedHost] || null
}

const settingAddress = baseAddress + "api/GetSettings"
const apiAddress = baseAddress + "api/"
const driveAddress = baseAddress + "Drive/"

export { baseAddress, settingAddress, apiAddress, driveAddress, theme }
