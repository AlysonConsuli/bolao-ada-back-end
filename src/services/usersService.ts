import { unauthorizedError } from "../middlewares/errorHandlingMiddleware.js";
import { PaymentInsertData } from "../interfaces/createData.js";
import { validateData } from "../utils/validateData.js";
import { usersRepository } from "../repositories/usersRepository.js";

const postPayment = async (user: PaymentInsertData, admin: string) => {
  const { id: userId, isPaid } = user;
  if (admin !== "admin") {
    throw unauthorizedError("Somente acessado pelo admin!");
  }
  await validateData.validateHasData(userId, "users", "User");
  await usersRepository.postPayment(userId, isPaid);
};

const getRanking = async () => {
  const users = await usersRepository.getUsers();
  const points = await usersRepository.getRanking();
  const allUsers = points.map((userPoints) => {
    const user = users.find((user) => user.id === userPoints.userId);
    return { ...user, points: userPoints._sum.points };
  });
  allUsers.sort(alphabeticalOrder);
  const ranking = allUsers.filter((user) => user.isPaid === true);

  let pos = 1;
  ranking.forEach((user, i) => {
    if (i === 0) {
      return (user.ranking = pos);
    }
    if (user?.points === ranking[i - 1]?.points) {
      return (user.ranking = pos);
    }
    pos++;
    user.ranking = pos;
  });
  return ranking;
};

const getUsers = async () => {
  const users = await usersRepository.getUsers();
  return users;
};

const alphabeticalOrder = (a: any, b: any) => {
  if (a.points === null) {
    return 1;
  }
  if (b.points === null) {
    return -1;
  }
  if (a.points === b.points && a.name > b.name) {
    return 1;
  }
  if (a.points === b.points && a.name < b.name) {
    return -1;
  }
  return 0;
};

export const usersService = {
  postPayment,
  getRanking,
  getUsers,
};
