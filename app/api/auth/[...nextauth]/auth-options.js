// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
// import prisma from '@/lib/prisma';

const authOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // ✅ Mock user (ไม่เชื่อม prisma)
        if (
          credentials?.email === 'demo@kt.com' &&
          credentials?.password === 'demo123'
        ) {
          return {
            id: 'demo-id',
            name: 'Demo User',
            email: 'demo@demo.com',
            status: 'ACTIVE',
            roleId: 'admin',
            roleName: 'Administrator',
            avatar: null,
          };
        }

        throw new Error('Invalid credentials (mock)');
      },
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'text' },
    //     password: { label: 'Password', type: 'password' },
    //     rememberMe: { label: 'Remember me', type: 'boolean' },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials || !credentials.email || !credentials.password) {
    //       throw new Error(
    //         JSON.stringify({
    //           code: 400,
    //           message: 'Please enter both email and password.',
    //         }),
    //       );
    //     }

    //     const user = await prisma.user.findUnique({
    //       where: { email: credentials.email },
    //     });

    //     if (!user) {
    //       throw new Error(
    //         JSON.stringify({
    //           code: 404,
    //           message: 'User not found. Please register first.',
    //         }),
    //       );
    //     }

    //     const isPasswordValid = await bcrypt.compare(
    //       credentials.password,
    //       user.password || '',
    //     );

    //     if (!isPasswordValid) {
    //       throw new Error(
    //         JSON.stringify({
    //           code: 401,
    //           message: 'Invalid credentials. Incorrect password.',
    //         }),
    //       );
    //     }

    //     if (user.status !== 'ACTIVE') {
    //       throw new Error(
    //         JSON.stringify({
    //           code: 403,
    //           message: 'Account not activated. Please verify your email.',
    //         }),
    //       );
    //     }

    //     // Update `lastSignInAt` field
    //     await prisma.user.update({
    //       where: { id: user.id },
    //       data: { lastSignInAt: new Date() },
    //     });

    //     return {
    //       id: user.id,
    //       status: user.status,
    //       email: user.email,
    //       name: user.name || 'Anonymous',
    //       roleId: user.roleId,
    //       avatar: user.avatar,
    //     };
    //   },
    // }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    // async jwt({ token, user, session, trigger }) {
    //   if (trigger === 'update' && session?.user) {
    //     token = session.user;
    //   } else {
    //     if (user && user.roleId) {
    //       const role = await prisma.userRole.findUnique({
    //         where: { id: user.roleId },
    //       });

    //       token.id = user.id || token.sub;
    //       token.email = user.email;
    //       token.name = user.name;
    //       token.avatar = user.avatar;
    //       token.status = user.status;
    //       token.roleId = user.roleId;
    //       token.roleName = role?.name;
    //     }
    //   }

    //   return token;
    // },
    async jwt({ token, user, session, trigger }) {
      if (trigger === 'update' && session?.user) {
        token = session.user;
      } else {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.avatar = user.avatar;
          token.status = user.status;
          token.roleId = user.roleId;
          token.roleName = user.roleName;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.avatar = token.avatar;
        session.user.status = token.status;
        session.user.roleId = token.roleId;
        session.user.roleName = token.roleName;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export default authOptions;
