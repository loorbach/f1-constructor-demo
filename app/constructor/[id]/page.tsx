import { Suspense } from "react";

export default function ConstructorPage({
  params,
}: PageProps<"/constructor/[id]">) {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        {params.then(({ id }) => (
          <h1 className="text-3xl">{id}</h1>
        ))}
      </Suspense>
    </main>
  );
}

//TODO: how to get dynamic route prefetched?
