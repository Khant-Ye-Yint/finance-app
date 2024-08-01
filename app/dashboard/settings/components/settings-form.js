'use client';

import SubmitButton from '@/app/(auth)/components/submit-button';
import Input from '@/components/input';
import AlertError from '@/components/alert-error';
import AlertSuccess from '@/components/alert-success';
import { useFormState } from 'react-dom';
import { updateSettings } from '@/lib/actions';
import Label from '@/components/label';
import Select from '@/components/select';
import FormError from '@/components/form-error';

const initialState = {
  message: '',
  error: false,
  errors: {},
};

const SettingsForm = ({ defaults }) => {
  const [state, formAction] = useFormState(updateSettings, initialState);
  console.log(state);

  return (
    <form className="space-y-4 " action={formAction}>
      {state?.error && <AlertError message={state?.message} />}
      {!state?.error && state?.message && (
        <AlertSuccess message={state?.message} />
      )}
      <Label htmlFor="fullName">User Full Name</Label>
      <Input
        type="text"
        name="fullName"
        id="fullName"
        placeholder="User full name"
        defaultValue={defaults?.fullName}
      />
      {state?.errors['fullName']?.map((error, index) => (
        <FormError error={error} key={index} />
      ))}
      <Label htmlFor="defaultView">Default transactions view</Label>
      <Select
        name="defaultView"
        id="defaultView"
        defaultValue={defaults?.defaultView}
      >
        <option value="last24hours">Last 24 hours</option>
        <option value="last7days">Last 7 days</option>
        <option value="last30days">Last month</option>
        <option value="last12months">Last 12 months</option>
      </Select>
      {state?.errors['defaultView']?.map((error, index) => (
        <FormError error={error} key={index} />
      ))}

      <SubmitButton>Update Settings</SubmitButton>
    </form>
  );
};

export default SettingsForm;
