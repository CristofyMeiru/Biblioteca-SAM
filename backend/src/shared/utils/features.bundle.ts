import * as admin_model from "@/features/admin/admin.model";
import * as admin_repo from "@/features/admin/admin.repository";
import * as admin_service from "@/features/admin/admin.service";
import * as assistent_model from "@/features/assistants/assistants.model";
import * as assistent_repo from "@/features/assistants/assistants.repository";
import * as assistent_service from "@/features/assistants/assistants.service";

export const features = {
  admin: {
    service: admin_service,
    repo: admin_repo,
    model: admin_model,
  },
  assistents: {
    service: assistent_service,
    model: assistent_model,
    repo: assistent_repo,
  },
};
