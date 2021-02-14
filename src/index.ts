import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function runQueries() {
  /**
   * Los queries van acá
   * Un ejemplo:
   */
  // const users = await prisma.user.findMany()
  // console.log(users) // Resultado esperado: []
}

runQueries()
  .catch((error) => {
    throw new Error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
