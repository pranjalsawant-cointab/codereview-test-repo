function processData(data) {
  let result = []
  for (let i = 0; i < data.length; i++) {
    result.push(data[i] * Math.random())
  }
  return result
}

module.exports = { processData }