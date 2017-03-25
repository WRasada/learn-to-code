let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Wes'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(40, (user) => {
  console.log(user);
});
