import { z } from "zod";

export type ContactSchemaType = z.infer<typeof contactSchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty("이름을 알맞게 입력해주세요."),
  email: z
    .string()
    .email("이메일 형식으로 입력해주세요."),
  phone: z
    .string()
    .nonempty("전화번호를 알맞게 입력해주세요."),
  content: z
    .string()
    .nonempty("문의내용을 알맞게 입력해주세요."),
});