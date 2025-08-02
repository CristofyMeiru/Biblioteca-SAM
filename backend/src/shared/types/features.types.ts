import { admin_service } from "@/features/admin/admin.service.contract";
import { admin_model } from "@/features/admin/types/admin.model.types";
import { admin_repository } from "@/features/admin/types/admin.repository.types";

export type admin_feature = {
  repo: admin_repository;
  service: admin_service;
  model: admin_model;
};