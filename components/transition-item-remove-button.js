import { Trash2, Loader } from 'lucide-react';
import Button from './button';
import { deleteTransition } from '@/lib/actions';
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

const TransitionItemRemoveButton = ({ id, onRemove }) => {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setConfirmed(false) });

  const deleteHandler = async () => {
    if (!confirmed) {
      setConfirmed(true);
      return;
    }
    try {
      setLoading(true);
      await deleteTransition(id);
      onRemove();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref}>
      <Button
        size="xs"
        varient={confirmed ? 'danger' : 'ghost'}
        onClick={deleteHandler}
        aria-disabled={loading}
        className="py-2"
      >
        {loading ? (
          <Loader size={20} className=" animate-spin" />
        ) : (
          <Trash2 className="text-xs" size={16} />
        )}
      </Button>
    </div>
  );
};

export default TransitionItemRemoveButton;
