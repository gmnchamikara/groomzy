import prisma from "@/libs/prismadb"
import moment from "moment"

interface Entry {
  createDate: string;
  _sum: {
    amount?: number; // Optional since you're defaulting to 0
  };
}

export default async function getGraphData() {
    try {
      const startDate = moment().subtract(6, "days").startOf("day");
      const endDate = moment().endOf("day");

      const result = await prisma.order.groupBy({
        by: ["createDate"],
        where: {
          createDate: {
            gte: startDate.toISOString(),
            lte: endDate.toISOString(),
          },
          status: "complete",
        },
        _sum: {
          amount: true,
        },
      });

      const aggregatedData: {
        [day: string]: { day: string; date: string; totalAmount: number };
      } = {};
      const currentDate = startDate.clone();

      while (currentDate <= endDate) {
        const day = currentDate.format("dddd");
        console.log(">>>>>>>day", day, currentDate);

        aggregatedData[day] = {
          day,
          date: currentDate.format("YYY-MM-DD"),
          totalAmount: 0,
        };

        currentDate.add(1, "day");
      }

      result.forEach((entry: Entry) => {
        const day = moment(entry.createDate).format("dddd");
        const amount = entry._sum.amount || 0;
        aggregatedData[day].totalAmount += amount;
      });

      const formattedData = Object.values(aggregatedData).sort((a, b) =>
        moment(a.date).diff(moment(b.date))
      );
      return formattedData;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message); 
      } else {
        console.error("An unknown error occurred");
      }
      throw new Error("Failed to fetch graph data");
    }
}