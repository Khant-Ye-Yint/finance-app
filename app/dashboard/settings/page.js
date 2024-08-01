import { createClient } from '@/lib/supabase/server';
import SettingsForm from './components/settings-form';

const Page = async () => {
  const supabase = createClient();
  const {
    data: {
      user: { user_metadata: defaults },
    },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1 className="mb-8 text-4xl font-semibold ">Settings</h1>
      <SettingsForm defaults={defaults} />
    </div>
  );
};

export default Page;
