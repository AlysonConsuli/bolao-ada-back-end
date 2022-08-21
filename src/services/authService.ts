import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../config/setup.js";

import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorHandlingMiddleware.js";
import { appRepository } from "../repositories/appRepository.js";
import { authRepository } from "../repositories/authRepository.js";
import { UserInsertData } from "../interfaces/createData.js";
import { formats } from "../utils/formats.js";

const signup = async (userData: UserInsertData) => {
  const SALT = 10;
  const { name: username, password } = userData;
  const name = formats.formatName(username);
  const user = await authRepository.findUserByName(name);
  if (user) {
    throw conflictError("Já existe um usuário com esse nome!");
  }
  const hashedPassword: string = bcrypt.hashSync(password, SALT);
  await appRepository.insertData({ name, password: hashedPassword }, "users");
};

const signin = async (userData: UserInsertData) => {
  const { name: username, password } = userData;
  const name = formats.formatName(username);
  const user = await authRepository.findUserByName(name);
  if (!user) {
    throw notFoundError("Nenhum usuário encontrado com esse nome!");
  }
  const validatePassword = bcrypt.compareSync(password, user.password);
  if (!validatePassword) {
    throw unauthorizedError("Senha incorreta!");
  }
  const secretKey = process.env.JWT_SECRET_KEY;
  const token: string = jwt.sign(user, secretKey);
  return token;
};

const adminlogin = async (userName: string) => {
  if (userName !== "admin") {
    throw unauthorizedError("Somente acessado pelo admin!");
  }
};

export const authService = {
  signup,
  signin,
  adminlogin,
};
