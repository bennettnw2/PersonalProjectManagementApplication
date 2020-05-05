const Pool = require('pg').Pool
const pool = new Pool({
  user: 'bennettnw2',
  host: 'localhost',
  database: 'my_database2',
  password: 'Platinum420',
  port: 5432
})

const getMerchants = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resovle(results.rows)
    })
  })
}

const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body

    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added: ${JSON.stringify(results.rows[0])}`)
    })
  })
}

const deleteMerchant = (merchantID) => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(merchantID)

    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  getMerchants,
  createMerchant,
  deleteMerchant,
}
