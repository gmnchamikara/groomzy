import prisma from '@/libs/prismadb'


export default async function getOrders() {
    try {
      const orders = await prisma.order.findMany({
        include: {
          user: true,
        },
        orderBy: {
          createDate: "desc",
        },
      });
      return orders;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
      throw new Error("Failed to fetch graph data");
    }
}