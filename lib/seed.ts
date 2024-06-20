import { Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    const user = {
      username: faker.internet.userName(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar(),
      tag: faker.lorem.word(),
      email: faker.internet.email(),
      name: faker.person.firstName(),
    } satisfies Prisma.UserUncheckedCreateInput;
    const dbUser = await prisma.user.create({ data: user });

    users.push(dbUser);
  }

  const posts = [];
  for (let i = 0; i < 100; i++) {
    const randomUserIndex = faker.number.int({ min: 0, max: users.length - 1 });

    const randomWordCount = faker.number.int({ min: 1, max: 10 });

    const post = {
      content: faker.lorem.words(randomWordCount),
      userID: users[randomUserIndex].id,
      username: users[randomUserIndex].username,
      tag: users[randomUserIndex].tag,
      image: users[randomUserIndex].image,
    } satisfies Prisma.PostUncheckedCreateInput;

    const p = await prisma.post.create({ data: post });
    posts.push(p);
  }

  for (let i = 0; i < 1000; i++) {
    const randomUserIndex = faker.number.int({ min: 0, max: users.length - 1 });
    const randomPostIndex = faker.number.int({ min: 0, max: posts.length - 1 });

    const like = {
      postID: posts[randomPostIndex].id,
      userID: users[randomUserIndex].id,
    } as Prisma.LikeUncheckedCreateInput;

    await prisma.like.create({ data: like });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
