import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "손쉬운 거래",
    Icon: ArrowDownToLine,
    description: "이메일을 통해 소스 코드를 거래해보세요!",
  },
  {
    name: "높은 품질의 소스",
    Icon: CheckCircle,
    description:
      "양질의 소스를 자유롭게 거래하며 불만족 시 30일 내에 100% 환불해드려요!",
  },
  {
    name: "환경을 위해",
    Icon: Leaf,
    description:
      "매달마다, 거래로 발생한 총 수수료의 1%를 환경 단체에 기부해요!",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl break-keep">
            당신의 코드가 값어치를 가질 수 있도록{" "}
            <span className="text-blue-600">디지털</span> 마켓에서 거래하세요
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground break-keep">
            스스로 개발한 소중한 자산을 판매하며 더욱 양질의 코드가 개발될 수
            있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              거래하기
            </Link>
            <Button variant={"ghost"}>품질보증 &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground break-keep">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
