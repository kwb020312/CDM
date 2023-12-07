import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => `
      <a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>계정인증</a>
      `,
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,

      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
