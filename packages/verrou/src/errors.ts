import { createError } from '@poppinss/utils'

export const E_RELEASE_NOT_OWNED = createError(
  `It looks like you are trying to release a lock that is not acquired by you. Make sure to acquire the lock before trying to release it`,
  'E_RELEASE_NOT_OWNED',
)

export const E_LOCK_TIMEOUT = createError<[number]>(
  `Lock was not acquired in the given timeout ( %s ms )`,
  'E_LOCK_TIMEOUT',
)