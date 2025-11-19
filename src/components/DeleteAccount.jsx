import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useNavigate } from 'react-router-dom';
const RESEND_TIME = 30; // seconds

export default function DeleteAccount() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otpStep, setOtpStep] = useState(false);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(0);
    const timerRef = useRef();
    const otpGroupRef = useRef(null); // For auto-focus

    useEffect(() => {
        if (timer > 0) {
            timerRef.current = setTimeout(() => setTimer(timer - 1), 1000);
        }
        return () => clearTimeout(timerRef.current);
    }, [timer]);

    // Auto-focus first OTP slot when step changes
    useEffect(() => {
        if (otpStep && otp.length === 0 && otpGroupRef.current) {
            const firstSlot = otpGroupRef.current.querySelector('input');
            if (firstSlot) {
                firstSlot.focus();
            }
        }
    }, [otpStep, otp.length]);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const res = await fetch('https://api.godestini.com/api/auth/send-delete-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
                setOtpStep(true);
                setMessage('OTP sent to your email!');
                setTimer(RESEND_TIME); // start timer
                setOtp('');
            } else {
                setMessage(data.message || 'Error sending OTP.');
            }
        } catch (error) {
            setMessage('Network error.');
        }
        setLoading(false);
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const res = await fetch('https://api.godestini.com/api/auth/verify-delete-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const data = await res.json();
            if (data.success) {
                setMessage('Account deleted successfully!');
                // Reset all state to initial values
                setEmail('');
                setOtpStep(false);
                setOtp('');
                setTimer(0);
                setLoading(false); // Ensure loading is cleared before redirect
                // Redirect after a brief delay to show the success message (optional; remove setTimeout for immediate redirect)
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 1500);
            } else {
                setMessage(data.message || 'Invalid OTP or deletion failed.');
            }
        } catch (error) {
            setMessage('Network error.');
        }
        setLoading(false);
    };


    // Resend OTP
    const handleResend = async () => {
        setLoading(true);
        setMessage('');
        try {
            const res = await fetch('https://api.godestini.com/api/auth/send-delete-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
                setMessage('OTP resent to your email!');
                setOtp('');
                setTimer(RESEND_TIME);
            } else {
                setMessage(data.message || 'Error resending OTP.'); // Fixed: use data.message consistently
            }
        } catch (error) {
            setMessage('Network error.');
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-96 bg-[#050519]">
            <Card className="max-w-md w-full bg-[#151624] border-none shadow-lg">
                <CardHeader className="text-xl font-bold text-white">Delete Account</CardHeader>
                <CardContent>
                    {!otpStep ? (
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <Label className="text-[#b3b3c2]">Email</Label>
                            <Input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                disabled={loading}
                                className="bg-[#23253c] text-white border border-[#434677] placeholder-[#6a6b8e]"
                            />
                            <Button
                                type="submit"
                                variant="destructive"
                                disabled={loading || !email}
                                className="bg-[#fd6585] hover:bg-[#fd3b6a] text-white font-bold"
                            >
                                {loading ? 'Sending OTP...' : 'Request OTP'}
                            </Button>
                        </form>
                    ) : (
                        <form onSubmit={handleOtpSubmit} className="space-y-6 flex flex-col items-center">
                            <Label htmlFor="otp" className="text-[#b3b3c2] flex flex-col mb-2">
                                Enter the OTP
                                <span className="text-xs text-[#76aefd] mt-1">It was sent to <span className="font-semibold">{email}</span></span>
                            </Label>
                            <div className="w-full bg-[#23253c] rounded-md p-2 flex justify-center"> {/* Wrapper for theme */}
                                <InputOTP
                                    ref={otpGroupRef}
                                    maxLength={6}
                                    value={otp}
                                    onChange={setOtp}
                                    className="gap-2" // Reduced gap for tighter spacing
                                >
                                    <InputOTPGroup className="text-white">
                                        {[...Array(6)].map((_, i) => (
                                            <InputOTPSlot
                                                key={i}
                                                index={i} // Add index for proper focus management
                                            // No custom className here to avoid conflicts
                                            />
                                        ))}
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                            <Button
                                type="submit"
                                variant="destructive"
                                disabled={loading || otp.length < 6 || timer > 0}
                                className="bg-[#fd6585] hover:bg-[#fd3b6a] text-white font-bold cursor-pointer"
                            >
                                {loading ? 'Deleting...' : 'Delete Account'}
                            </Button>
                            <div className="flex items-center justify-between w-full">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="bg-[#23253c] border-none text-[#76aefd] font-semibold shadow-none cursor-pointer"
                                    onClick={handleResend}
                                    disabled={timer > 0 || loading}
                                >
                                    {timer > 0 ? `Resend OTP (${timer}s` : 'Resend OTP'}
                                </Button>
                                {timer > 0 && (
                                    <span className="text-xs text-[#6a6b8e] ml-2 shrink-0">
                                        Resend in {timer}s
                                    </span>
                                )}
                            </div>
                        </form>
                    )}
                    {message && (
                        <div className={`mt-4 text-center text-sm ${message.includes('success') ? 'text-[#9ff3fc]' : 'text-red-400'}`}>
                            {message}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
