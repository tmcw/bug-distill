import React, { Suspense } from "react";
import { GetServerSideProps, BlitzPage, Head, useQuery } from "blitz";
import AuthenticatedPageLayout from "app/core/layouts/authenticated_page_layout";
import getFoo from "app/users/queries/getFoo";

function CreateMap() {
  return null;
}

function Inner() {
  const [foo] = useQuery(getFoo, null);
  return (
    <div className="flex flex-col items-center gap-y-2 pt-20">
      <CreateMap />
      {foo.foo}
      <div className="text-gray-700 text-center max-w-sm">
        Welcome to Placemark! Start by creating your first map, which will be
        saved and synced to the cloud.
      </div>
    </div>
  );
}

const PlacemarkIndex: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Placemark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={null}>
        <Inner />
      </Suspense>
    </>
  );
};

PlacemarkIndex.getLayout = (page) => (
  <AuthenticatedPageLayout title="Maps" actionButton={<CreateMap />}>
    {page}
  </AuthenticatedPageLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return { props: {} };
};

export default PlacemarkIndex;
