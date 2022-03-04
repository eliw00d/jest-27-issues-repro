const axios = jest.createMockFromModule('axios')

axios.create.mockImplementation(() => axios)

module.exports = axios
