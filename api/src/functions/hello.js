const { db } = require('api/src/lib/db')

export const handler = async (event, context) => {
  const users = await db.user.findMany()

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  }
}
