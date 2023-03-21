export {
  userReducer,
  userActions,
} from './model/slice/userSlice';

export {
  getUserInited,
} from './model/selectors/getUserInited/getUserInited';

export {
  getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export type {
  UserSchema,
  User,
} from './model/types/user';

export { UserRole } from './model/consts/consts';

export {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';
