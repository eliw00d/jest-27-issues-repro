const axios = require('axios')

let api

beforeEach(() => {
  jest.isolateModules(() => {
    api = require('./api')
  })
})

it('should have created axios instance', () => {
  expect(axios.create).toHaveBeenCalled()
})
