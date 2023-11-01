"use client";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { SizeColumn, columns } from "./columns";
import ApiList from "@/components/ui/api-list";
interface SizesClientProps {
  data: SizeColumn[];
}
const SizesClient: React.FC<SizesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes(${data.length})`}
          description={"Manage Sizes for your store"}
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
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
      <Heading title="API" description="API Calls for sizes" />
      <Separator />
      <ApiList entityName={"sizes"} entityIdName={"sizesId"} />
    </>
  );
};

export default SizesClient;
