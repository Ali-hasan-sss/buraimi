import { getSession } from '@/lib/auth';
import { logout } from '@/lib/actions/auth-actions';

export default async function Page() {
    const session = await getSession();

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-16">
            <div className="container mx-auto max-w-3xl">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-[#254151] mb-2">Dashboard</h1>
                    <p className="text-gray-600 mb-8">You are logged in.</p>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 mb-8">
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="text-lg font-semibold text-gray-900">{session?.email}</div>
                    </div>

                    <form action={logout}>
                        <button
                            type="submit"
                            className="bg-[#254151] hover:bg-[#1b2f3b] text-white px-6 py-3 rounded-lg transition-all font-semibold"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
