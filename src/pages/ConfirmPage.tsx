import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';
import { ConfirmButtons } from '@/components/confirm/ConfirmButtons';

export const ConfirmPage = () => {
  const { id } = useParams();
  if (!id) {
    return <NotFound />;
  }
  return <ConfirmButtons orderId={+id} />;
};
