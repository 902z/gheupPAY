export const userType = {
  EMPLOYEE: "employee",
  EMPLOYER: "employer",
} as const;

export type UserType = (typeof userType)[keyof typeof userType];