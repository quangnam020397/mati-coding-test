import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import Card from '../../../components/Card';
import DragItem from '../../../components/DragItem';
import { DATE_TIME_FORMAT } from '../../../constants';
import { formatDate } from '../../../utils';
import styles from './styles.module.scss';
import useDragDrop from '../../../hooks/useDragDrop';
import { ICollectionData, IItemData } from '../../../interfaces';
import { useCallback } from 'react';
import Button from '../../../components/common/Button';

export interface ColumnDayProps {
  date: Dayjs;
  collections: ICollectionData[];
  handler: ReturnType<typeof useDragDrop>;
}

export interface IData {
  id: number;
  title: string;
  date: string;
}

function ColumnDay({ date, collections, handler }: ColumnDayProps) {
  const {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragEnd,
    handleDragOverCard,
  } = handler;

  const renderCollections = useCallback(
    (collection: ICollectionData) => {
      return (
        <div className="mt-4" onDragOver={(e) => handleDragOverCard(e, collection)} key={collection.id}>
          <Card title={collection.name} headStyle={{ padding: 0 }}>
            {collection.items.map((item, index) => (
              <DragItem
                onDragStart={(e) => handleDragStart(index, collection.id)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop()}
                onDragEnter={() => handleDragEnter(index)}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
                key={`dragItem__${collection.id}__${item?.id}`}
                value={item}
              >
                {item?.name}
              </DragItem>
            ))}
          </Card>
        </div>
      );
    },
    [
      collections,
      handleDragStart,
      handleDragOver,
      handleDrop,
      handleDragEnter,
      handleDragLeave,
      handleDragEnd,
      handleDragOverCard,
    ],
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>{formatDate(date, DATE_TIME_FORMAT.NAME_OF_DAY_OF_WEEK)}</div>
        <div>{formatDate(date, DATE_TIME_FORMAT.DAY_OF_MONTH)}</div>
      </div>

      <div className={styles.content}>{collections.map((item) => renderCollections(item))}</div>
    </div>
  );
}

export default ColumnDay;
