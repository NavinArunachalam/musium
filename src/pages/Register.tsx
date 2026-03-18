import { useState } from 'react';
import { AUTH_IMAGES } from '@/utils/constants';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import SmartImage from '@/components/ui/SmartImage';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsSubmitting(true);
    const success = await register(form.username, form.email, form.password);
    setIsSubmitting(false);

    if (success) {
      toast.success('Account created! Welcome to the museum.');
      navigate('/');
    }
  };

  const strengthLevel = (() => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthColors = ['bg-destructive', 'bg-destructive', 'bg-amber-500', 'bg-blue-500', 'bg-green-500'];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      <div className="absolute inset-0">
        <SmartImage
          src={AUTH_IMAGES.register}
          alt="Museum interior"
          aspectRatio="auto"
          className="w-full h-full"
          priority
          showSkeleton={false}
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-[420px] mx-4 bg-museum-surface rounded-2xl shadow-museum-xl border border-museum-linen p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
            <span className="text-ink text-sm font-display font-semibold">VM</span>
          </div>
        </div>

        <h1 className="font-display text-2xl font-semibold text-center text-foreground mb-1">Join the Collection</h1>
        <p className="text-xs text-museum-stone text-center mb-8">Create your museum account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-medium text-foreground/80 block mb-1.5">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => update('username', e.target.value)}
              className="museum-input"
              placeholder="artlover42"
              required
            />
          </div>
          <div>
            <label className="text-[11px] font-medium text-foreground/80 block mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="museum-input"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-[11px] font-medium text-foreground/80 block mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => update('password', e.target.value)}
                className="museum-input pr-10"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-museum-stone hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {form.password && (
              <div className="flex gap-1 mt-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < strengthLevel ? strengthColors[strengthLevel] : 'bg-museum-linen'}`} />
                ))}
              </div>
            )}
          </div>
          <div>
            <label className="text-[11px] font-medium text-foreground/80 block mb-1.5">Confirm Password</label>
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(e) => update('confirmPassword', e.target.value)}
              className="museum-input"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn btn-gold btn-md w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-xs text-center text-museum-stone mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-gold hover:underline">Sign In →</Link>
        </p>
      </motion.div>
    </div>
  );
}
