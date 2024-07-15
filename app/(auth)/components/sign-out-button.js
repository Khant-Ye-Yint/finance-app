import { LogOut } from 'lucide-react';
import SubmitButton from './submit-button';
import { signOut } from '@/lib/actions';

const SignOutButton = () => {
  return (
    <form action={signOut}>
      <SubmitButton varient="ghost" size="sm" className="py-2 shadow-sm">
        <LogOut className="w-6 h-6 " />
      </SubmitButton>
    </form>
  );
};

export default SignOutButton;
