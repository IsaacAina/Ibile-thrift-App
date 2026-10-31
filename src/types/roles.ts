/**
 * User roles for Ibile Thrift App.
 * Aligns the PRD member-first model with administrative oversight roles.
 */
export enum UserRole {
  MEMBER = 'MEMBER',   // Standard cooperative member (PRD primary user)
  ADMIN = 'ADMIN',     // Society administrative staff
  FOUNDER = 'FOUNDER', // Society founder / executive governance
}

export interface UserSession {
  userId: string;
  memberId: string;
  role: UserRole;
  isAuthenticated: boolean;
}
