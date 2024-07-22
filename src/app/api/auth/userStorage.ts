import fs from "fs";
import path from "path";

const usersFilePath = path.resolve(
  process.cwd(),
  "src",
  "app",
  "api",
  "auth",
  "users.json"
);

interface User {
  username: string;
  email: string;
  password: string;
}

export const getUsers = (): User[] => {
  if (!fs.existsSync(usersFilePath)) {
    return [];
  }
  const usersData = fs.readFileSync(usersFilePath, "utf-8");
  return JSON.parse(usersData) as User[];
};

export const saveUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};
