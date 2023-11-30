import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          높은 품질의 <span className="text-blue-600">디지털</span> 마켓
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
