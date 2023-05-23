// utils.ts
export const cn = (...classNames: (string | undefined | null | boolean)[]): string => {
    return classNames.filter(Boolean).join(' ');
  };
  
  export const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  