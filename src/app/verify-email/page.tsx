import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
  const token = searchParams.token;
  const toEmail = searchParams.to;
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <Image
                src={"hippo-email-sent.png"}
                fill
                alt="하마가 이메일을 보내는 이미지"
              />
            </div>

            <h3 className="font-semibold text-2xl">이메일을 확인해보세요.</h3>
            {toEmail ? (
              <p className="text-muted-foreground text-center">
                방금 <span className="font-semibold">{toEmail}</span> 주소로
                인증메일을 보내드렸어요.
              </p>
            ) : (
              <p className="text-muted-foreground text-center">
                방금 인증 메일을 보내드렸어요.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
