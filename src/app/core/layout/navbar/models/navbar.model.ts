export interface NavbarProfile {
  id: number;

  name: string;

  email: string;

  avatar?: string;
}

export interface NavbarNotification {
  id: number;

  title: string;

  message: string;

  createdAt: Date;

  read: boolean;
}
