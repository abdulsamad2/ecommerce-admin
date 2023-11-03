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
import { ProductColumn, columns } from "./columns";
import ApiList from "@/components/ui/api-list";
interface ProductClientProps {
  data: ProductColumn[];
}
const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products(${data.length})`}
          description={"Manage Products for your store"}
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
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
      <Heading title="API" description="API Calls for products" />
      <Separator />
      <ApiList entityName={"products"} entityIdName={"productId"} />
    </>
  );
};

export default ProductClient;
