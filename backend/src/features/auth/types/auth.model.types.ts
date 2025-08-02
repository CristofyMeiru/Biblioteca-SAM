import * as model from '@/features/auth/auth.model'

export type sanitized_admin = {
  id: string;
  identifier: string;
  email: string;
};

export type auth_model = {
  sanitize_admin: typeof model.sanitize_admin;
};