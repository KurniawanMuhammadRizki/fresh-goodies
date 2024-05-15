"use client";
import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import DrawerBody from "./drawerBody";
import { metadata } from "../layout";
import { Metadata } from "@/types/product";
import { Heart } from "lucide-react";

interface DrawerProductProps {
  src: string;
  alt: string;
  metaData: Metadata;
  name: string;
}
const DrawerProduct: React.FC<DrawerProductProps> = ({
  src,
  alt,
  metaData,
  name,
}) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex justify-center items-center">
          <Image
            className="mix-blend-multiply"
            src={src}
            alt={alt}
            height={113}
            width={145}
          />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody src={src} alt={alt} name={name} metaData={metaData} />
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerProduct;
