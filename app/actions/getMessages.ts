import prisma from "@/app/libs/prismadb";

const getMassages = async (
    ConversationId: string
) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId: ConversationId 
            },
            include: {
                sender: true,
                seen: true,
            },
            orderBy: {
                createAt: 'asc'
            }
        });

        return messages;
    } catch (error: any) {
        return [];
    }
};

export default getMassages;