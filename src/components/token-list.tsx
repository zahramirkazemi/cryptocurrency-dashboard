import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import useTokensStore from "@/store/tokens";
import { tokenColumns } from "@/constants";
import Loader from "./loader";

const TokenList: React.FC = () => {
  const { isLoading, hasMore, tokens, fetchTokens } = useTokensStore();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTokens(page);
  }, []);

  const onNextPage = React.useCallback(() => {
    if (hasMore) {
      fetchTokens(page + 1);
      setPage(page + 1);
    }
  }, [page, hasMore]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      fetchTokens(page - 1);
      setPage(page - 1);
    }
  }, [page]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="pb-4 px-2 flex items-center justify-end">
        <div className="flex gap-2 text-xl">
          <Button
            isDisabled={page <= 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={!hasMore}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [tokens.length, page]);

  const renderData = (info: string, key: string | number): JSX.Element => {
    if (key === "image") {
      return <Image src={info} width={40} height={40} alt={info} />;
    }
    if (key === "price_change_percentage_24h") {
      return (
        <p className={Number(info) > 0 ? "text-lime-400" : "text-red-600"}>
          {info}%
        </p>
      );
    } else {
      return <p>{info}</p>;
    }
  };

  return (
    <Table
      aria-label="Example table with dynamic content"
      className="w-11/12 mx-auto mt-10 text-2xl font-sans"
      isStriped
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
    >
      <TableHeader columns={tokenColumns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Loader />}
        items={tokens}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {renderData(getKeyValue(item, columnKey), columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TokenList;
