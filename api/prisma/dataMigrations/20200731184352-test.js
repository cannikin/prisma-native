export default async ({ db }) => {
  const users = db.user.findMany()
  console.info('users', users)
}
