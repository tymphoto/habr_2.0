import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRotesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
