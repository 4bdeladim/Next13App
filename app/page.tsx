import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        redirect('/api/auth/signin');
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>G</h1>
        </main>
    );
}
