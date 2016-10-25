// Never suppress ADMIN !
// The other roles may be removed, new ones may be added

export enum ERoles { ADMIN, CSOFF, VALIDATOR, MANAGER };

export interface IRole {
  code: string,
  label: string
} 

export const Roles: IRole[] = [
  { code: 'ADMIN', label: 'Administrator' },
  { code: 'CSOFF', label: 'Countersigning officer' },
  { code: 'VALIDATOR', label: 'Validator' },
  { code: 'MANAGER', label: 'Manager' }
];