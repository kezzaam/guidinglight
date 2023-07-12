import { createUser, getUsers } from '../../../../prisma/users';

export async function GET(request: Request): Promise<Response> {
  try {
    const { users, error } = await getUsers();

    return new Response(JSON.stringify({ users }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

