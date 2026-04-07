"use client";

import type { FormEvent, ReactNode } from "react";

import { updateDepartment } from "./action";

export default function EditDepartmentFormShell({
  departmentId,
  children,
}: {
  departmentId: string;
  children: ReactNode;
}) {
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    await updateDepartment(departmentId, fd);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {children}
    </form>
  );
}
