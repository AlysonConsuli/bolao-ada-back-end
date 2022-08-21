import prisma from "../src/config/db.js";

const users = [
  {
    name: "admin",
    password: "$2b$10$dlDETryrvw4qQZ9P1KOywu45kez6qhj7j2PuGSeyrBl8W3flbi0B.",
  },
];

const teams = [
  { name: "Catar" },
  { name: "Equador" },
  { name: "Senegal" },
  { name: "Holanda" },
  { name: "Inglaterra" },
  { name: "Irã" },
  { name: "Estados Unidos" },
  { name: "País de Gales" },
  { name: "Argentina" },
  { name: "Arábia Saudita" },
  { name: "México" },
  { name: "Polônia" },
  { name: "França" },
  { name: "Austrália" },
  { name: "Dinamarca" },
  { name: "Tunísia" },
  { name: "Espanha" },
  { name: "Costa Rica" },
  { name: "Alemanha" },
  { name: "Japão" },
  { name: "Belgica" },
  { name: "Canadá" },
  { name: "Marrocos" },
  { name: "Croácia" },
  { name: "Brasil" },
  { name: "Sérvia" },
  { name: "Suíça" },
  { name: "Camarões" },
  { name: "Portugal" },
  { name: "Gana" },
  { name: "Uruguai" },
  { name: "Coreia do Sul" },
];

const games = [
  { team1Id: 1, team2Id: 2, date: "2022-11-20 13:00" },
  { team1Id: 5, team2Id: 6, date: "2022-11-21 10:00" },
  { team1Id: 3, team2Id: 4, date: "2022-11-21 13:00" },
  { team1Id: 7, team2Id: 8, date: "2022-11-21 16:00" },
  { team1Id: 9, team2Id: 10, date: "2022-11-22 07:00" },
  { team1Id: 15, team2Id: 16, date: "2022-11-22 10:00" },
  { team1Id: 11, team2Id: 12, date: "2022-11-22 13:00" },
  { team1Id: 13, team2Id: 14, date: "2022-11-22 18:00" },

  { team1Id: 23, team2Id: 24, date: "2022-11-23 07:00" },
  { team1Id: 19, team2Id: 20, date: "2022-11-23 10:00" },
  { team1Id: 17, team2Id: 18, date: "2022-11-23 13:00" },
  { team1Id: 21, team2Id: 22, date: "2022-11-23 16:00" },
  { team1Id: 27, team2Id: 28, date: "2022-11-24 07:00" },
  { team1Id: 31, team2Id: 32, date: "2022-11-24 10:00" },
  { team1Id: 29, team2Id: 30, date: "2022-11-24 13:00" },
  { team1Id: 25, team2Id: 26, date: "2022-11-24 16:00" },

  { team1Id: 8, team2Id: 6, date: "2022-11-25 07:00" },
  { team1Id: 1, team2Id: 3, date: "2022-11-25 10:00" },
  { team1Id: 4, team2Id: 2, date: "2022-11-25 13:00" },
  { team1Id: 5, team2Id: 7, date: "2022-11-25 16:00" },
  { team1Id: 16, team2Id: 14, date: "2022-11-26 07:00" },
  { team1Id: 12, team2Id: 10, date: "2022-11-26 10:00" },
  { team1Id: 13, team2Id: 15, date: "2022-11-26 13:00" },
  { team1Id: 9, team2Id: 11, date: "2022-11-26 16:00" },

  { team1Id: 20, team2Id: 18, date: "2022-11-27 07:00" },
  { team1Id: 21, team2Id: 23, date: "2022-11-27 10:00" },
  { team1Id: 24, team2Id: 22, date: "2022-11-27 13:00" },
  { team1Id: 17, team2Id: 19, date: "2022-11-27 16:00" },
  { team1Id: 28, team2Id: 26, date: "2022-11-28 07:00" },
  { team1Id: 32, team2Id: 30, date: "2022-11-28 10:00" },
  { team1Id: 25, team2Id: 27, date: "2022-11-28 13:00" },
  { team1Id: 29, team2Id: 31, date: "2022-11-28 16:00" },

  { team1Id: 4, team2Id: 1, date: "2022-11-29 12:00" },
  { team1Id: 2, team2Id: 3, date: "2022-11-29 12:00" },
  { team1Id: 6, team2Id: 7, date: "2022-11-29 16:00" },
  { team1Id: 8, team2Id: 5, date: "2022-11-29 16:00" },
  { team1Id: 14, team2Id: 15, date: "2022-11-30 12:00" },
  { team1Id: 16, team2Id: 13, date: "2022-11-30 12:00" },
  { team1Id: 12, team2Id: 9, date: "2022-11-30 16:00" },
  { team1Id: 10, team2Id: 11, date: "2022-11-30 16:00" },

  { team1Id: 22, team2Id: 23, date: "2022-12-01 12:00" },
  { team1Id: 24, team2Id: 21, date: "2022-12-01 12:00" },
  { team1Id: 20, team2Id: 17, date: "2022-12-01 16:00" },
  { team1Id: 18, team2Id: 19, date: "2022-12-01 16:00" },
  { team1Id: 32, team2Id: 29, date: "2022-12-02 12:00" },
  { team1Id: 30, team2Id: 31, date: "2022-12-02 12:00" },
  { team1Id: 28, team2Id: 25, date: "2022-12-02 16:00" },
  { team1Id: 26, team2Id: 27, date: "2022-12-02 16:00" },
];

async function main() {
  await prisma.users.createMany({ data: users, skipDuplicates: true });
  await prisma.teams.createMany({ data: teams, skipDuplicates: true });
  await prisma.games.createMany({
    data: games,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
