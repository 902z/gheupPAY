export const USER_TYPE = {
  EMPLOYEE: "employee",
  EMPLOYER: "employer",
} as const;

export type UserType = (typeof USER_TYPE)[keyof typeof USER_TYPE];