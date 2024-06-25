import { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
export const get20Posts = (userID?: string) =>

    prisma.post.findMany({
        where: {
            parentID: null,
        },
        take: 20,
        orderBy: {
            createAt: 'desc'
        },
        select: {
            id: true,
            content: true,
            createAt: true,
            user: {
                select: {
                    username: true,
                    image: true,
                    tag: true,
                    id: true,
                },
            },
            likes: {
                select: {
                    userID: true,
                },
                where: {
                    userID: userID ?? "error",
                },
            },
            _count: {
                select: {
                    likes: true,
                    replies: true,
                },
            },
        },
    });

export type PostType = Prisma.PromiseReturnType<typeof get20Posts>[number];
