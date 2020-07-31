const { PrismaClient } = require('@prisma/client')
export const db = new PrismaClient()

export const handler = async (event, context) => {
  const users = await db.user.findMany()

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  }
}
