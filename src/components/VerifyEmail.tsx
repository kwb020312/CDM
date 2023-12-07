"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError)
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font-semibold text-xl">문제가 발생했어요.</h3>
        <p className="text-muted-foreground text-sm">
          토큰이 검증되지 않았거나 유효기간이 만료된 것 같아요. 다시
          시도해주세요.
        </p>
      </div>
    );

  if (data?.success)
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image
            src={"/hippo-email-sent.png"}
            fill
            alt="메일이 전송되는 이미지"
          />
        </div>

        <h3 className="font-semibold text-2xl">메시지 전송이 완료되었어요.</h3>
        <p className="text-muted-foreground text-center mt-1">
          이메일 인증을 완료해주셔서 감사해요!
        </p>
        <Link
          className={buttonVariants({ className: "mt-4" })}
          href={"/sign-in"}
        >
          로그인
        </Link>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">인증 진행중...</h3>
        <p className="text-muted-foreground text-sm">얼마 안 걸릴거에요!</p>
      </div>
    );
};

export default VerifyEmail;
