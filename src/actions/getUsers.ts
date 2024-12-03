import prisma from "@/libs/prismadb";

export default async function getUsers() {
    try {
      const users = prisma.user.findMany();
      return users;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
      throw new Error("Failed to fetch graph data");
    }
}