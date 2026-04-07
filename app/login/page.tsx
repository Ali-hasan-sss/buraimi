'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);
        setStatus('');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const data = (await res.json()) as { ok: boolean; message?: string };
            if (!res.ok || !data.ok) {
                setStatus(data.message || 'Invalid email or password');
                return;
            }

            setStatus('Login successful, redirecting...');
            router.push('/dashboard');
            router.refresh();
        } catch {
            setStatus('Unexpected error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-md py-16 px-4">
            <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
            <div className="space-y-4">
                <input
                    type="email"
                    className="w-full border rounded px-3 py-2"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                <input
                    type="password"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                />
                {status && <p className="text-sm text-gray-600">{status}</p>}
                <button
                    onClick={login}
                    disabled={loading || !email || !password}
                    className="w-full bg-[#254151] text-white rounded px-3 py-2 disabled:opacity-50"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
