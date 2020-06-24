import Mock from "mockjs";

const user = {
  id: "",
  username: "",
  password: "",
  token: "",
  role: "",
  name: ""
};
const userList = [];
userList.push({
  id: "admin",
  username: "admin",
  password: "admin",
  token: "token-admin",
  role: "10",
  name: "admin"
})
Mock.mock("/api/login", "post", data => {
  const ops = JSON.parse(data.body);
  const result = { status: "帐号或密码错误", user };
  userList.forEach(item => {
    if (ops.username === item.username && ops.password === item.password) {
      result.data = item;
      result.status = "ok";
      result.data.token = "token-admin"
    }
    return;
  });
  return result;
});

Mock.mock("/api/registry", "post", data => {
  const ops = JSON.parse(data.body);
  ops.id = ops.username;
  userList.push(ops);
  ops.status = "ok";
  return ops;
});

Mock.mock("/api/getUserInfo", "post", data => {
  const ops = JSON.parse(data.body);
  const result = { status: "帐号或密码错误", user };
  userList.forEach(item => {
    if (ops.token === item.token) {
      result.data = item;
      result.status = "ok";
      result.data.token = "token-admin"
      result.data.role = "10"
    }
    return;
  });
  return result;
});
