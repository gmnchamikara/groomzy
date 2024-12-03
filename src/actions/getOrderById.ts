import prisma from '@/libs/prismadb'
interface IParams{
    orderId?: string
}

export default async function getOrderById(params: IParams) {
  try {
    const { orderId } = params;

    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });
    if (!order) return null;
    return order;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
    throw new Error("Failed to fetch graph data");
  }
}