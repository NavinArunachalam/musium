import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    setIsSubmitting(true);
    const success = await login(email, password);
    setIsSubmitting(false);

    if (success) {
      toast.success('Welcome back!');
      navigate('/');
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-museum-surface/50" />

      <motion.div
        className="relative z-10 w-full max-w-[420px] mx-4 bg-museum-surface rounded-2xl shadow-museum-xl border border-museum-linen p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 bg-ink rounded-lg flex items-center justify-center">
            <span className="text-parchment text-sm font-display font-semibold">VM</span>
          </div>
        </div>

        <h1 className="font-display text-2xl font-semibold text-center text-foreground mb-1">Welcome back</h1>
        <p className="text-xs text-museum-stone text-center mb-8">Sign in to your museum account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-medium text-foreground/80 block mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="museum-input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-[11px] font-medium text-foreground/80 block mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="museum-input pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-museum-stone hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs text-museum-stone cursor-pointer">
              <input type="checkbox" className="rounded border-museum-linen" /> Remember me
            </label>
            <a href="#" className="text-xs text-gold hover:underline">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn btn-primary btn-md w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="text-xs text-center text-museum-stone mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-gold hover:underline">Register →</Link>
        </p>
      </motion.div>
    </div>
  );
}
