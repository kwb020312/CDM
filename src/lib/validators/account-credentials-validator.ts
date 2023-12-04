import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "비밀번호는 반드시 8자 이상이어야 합니다." }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
