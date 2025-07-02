import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const { email, phone, nationalId } = req.body;
  if (!email || !phone || !nationalId) return res.status(400).json({ error: "فیلدها الزامی است" });

  const data = await prisma.userProfile.upsert({
    where: { email },
    update: { phone, nationalId },
    create: { email, phone, nationalId }
  });
  res.json(data);
};
