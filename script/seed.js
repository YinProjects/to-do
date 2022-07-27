'use strict'

const {db, models: {User} } = require('../server/db')


async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')


  const users = await Promise.all([
    User.create({ name: 'cody', username: 'c', password: '123' }),
    User.create({ name: 'murphy', username: 'm', password: '123' }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}


async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}


if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
