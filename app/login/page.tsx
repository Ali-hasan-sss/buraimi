'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState<'request' | 'verify'>('request');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const requestOtp = async () => {
        setLoading(true);
        setStatus('');
        try {
            const res = await fetch('/api/auth/request-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, purpose: 'login' }),
            });

            const data = (await res.json()) as { ok: boolean; message?: string };
            if (!res.ok || !data.ok) {
                setStatus(data.message || 'Failed to request OTP');
                return;
            }

            setStep('verify');
            setStatus('If the email is allowed as admin, OTP is generated (check dev server logs).');
        } catch {
            setStatus('Unexpected error');
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        setLoading(true);
        setStatus('');
        try {
            const res = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, purpose: 'login', code: otp }),
            });

            const data = (await res.json()) as { ok: boolean; message?: string };
            if (!res.ok || !data.ok) {
                setStatus(data.message || 'Invalid OTP');
                return;
            }

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
                    disabled={loading || step === 'verify'}
                />
                {step === 'verify' && (
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="OTP code"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        disabled={loading}
                    />
                )}
                {status && <p className="text-sm text-gray-600">{status}</p>}
                {step === 'request' ? (
                    <button
                        onClick={requestOtp}
                        disabled={loading || !email}
                        className="w-full bg-[#254151] text-white rounded px-3 py-2 disabled:opacity-50"
                    >
                        Request OTP
                    </button>
                ) : (
                    <button
                        onClick={verifyOtp}
                        disabled={loading || !otp}
                        className="w-full bg-[#254151] text-white rounded px-3 py-2 disabled:opacity-50"
                    >
                        Verify & Login
                    </button>
                )}
            </div>
        </div>
    );
}
