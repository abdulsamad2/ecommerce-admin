"use client";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { columns } from "./columns";
import ApiList from "@/components/ui/api-list";
interface BillboardClientProps {
  data: Billboard[];
}
const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboard(${data.length})`}
          description={"Manage billboard for your store"}
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        searchKey="label"
        //@ts-ignore
        data={data}
      />
      <Heading title="API" description="API Calls for billboards" />
      <Separator />
      <ApiList entityName={"billboards"} entityIdName={"billboardId"} />
    </>
  );
};

export default BillboardClient;
