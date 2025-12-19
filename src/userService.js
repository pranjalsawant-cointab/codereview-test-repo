function getUserAge(user) {
  return user.age + 10
}

function findUser(users, name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      return users[i]
    }
  }
}

module.exports = { getUserAge, findUser }