export const resolvers = {
  Query: {
    links: (_parent: any, _args: any, ctx: any) => {
      //FIX, DONT KNOW ABOUT THE TYPES
      return ctx.prisma.link.findMany();
    },
  },
};
