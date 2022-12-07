import { useCallback, useState } from 'react';
import { ICollectionData, IDataWeekly, IItemData } from '../interfaces';

const useDragDrop = (setData: React.Dispatch<React.SetStateAction<IDataWeekly[]>>) => {
  const [dragItemIndex, setDragItemIndex] = useState<number | null>(null);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | null>(null);
  const [dragCollectionId, setDragCollectionId] = useState<string | null>(null);
  const [dragOverCollectionId, setDragOverCollectionId] = useState<string | null>(null);

  const handleDragStart = useCallback(
    (index: number, collectionId: string) => {
      console.log({ index, collectionId });
      setDragItemIndex(index);
      setDragCollectionId(collectionId);
    },
    [setDragItemIndex, setDragCollectionId],
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(() => {
    console.log({
      dragItemIndex,
      dragOverItemIndex,
      dragCollectionId,
      dragOverCollectionId,
    });

    if (!setData) {
      return;
    }

    if (
      dragItemIndex === null ||
      dragOverItemIndex === null ||
      dragCollectionId === null ||
      dragOverCollectionId === null
    ) {
      return;
    }

    if (dragCollectionId === dragOverCollectionId) {
      setData((preData: IDataWeekly[]) => {
        const _data = [...preData];
        // find collection
        const { collection, dayIndex } = findCollectionById(_data, dragCollectionId);

        if (!collection) {
          return _data;
        }

        collection.items = reSortDataSameCollection(collection.items);

        return _data;
      });
    } else {
      setData((prevData: any) => {
        // resort data after drop
        const data = [...prevData];
        if (dragItemIndex !== null && dragOverItemIndex !== null) {
          const dragItem = data[dragItemIndex!];
          data.splice(dragItemIndex!, 1);
          data.splice(dragOverItemIndex!, 0, dragItem);
        }

        return data;
      });
    }
  }, [dragItemIndex, dragOverItemIndex, dragCollectionId, dragOverCollectionId]);

  const findCollectionById = useCallback(
    (data: IDataWeekly[], collectionId: string): { dayIndex: number; collection: ICollectionData } => {
      const dayIndex = data.findIndex(
        (item) => item.collections.findIndex((collection) => collection.id === collectionId) !== -1,
      );
      const collection = data[dayIndex].collections.find((collection) => collection.id === collectionId);
      return { dayIndex, collection };
    },
    [],
  );

  const reSortDataSameCollection = useCallback(
    (prevData: any) => {
      const data = [...prevData];
      if (dragItemIndex !== null && dragOverItemIndex !== null) {
        const dragItem = data[dragItemIndex!];
        data.splice(dragItemIndex!, 1);
        data.splice(dragOverItemIndex!, 0, dragItem);
      }

      return data;
    },
    [dragItemIndex, dragOverItemIndex],
  );

  const handleDragEnter = useCallback(
    (index: number) => {
      console.log('drag enter', index);
      setDragOverItemIndex(index);
    },
    [setDragOverItemIndex],
  );

  const handleDragLeave = useCallback(
    (event: any) => {
      console.log('drag leave', event);
      setDragOverItemIndex(null);
    },
    [setDragOverItemIndex],
  );

  const handleDragEnd = useCallback(
    (event: any) => {
      console.log('drag end');
      setDragItemIndex(null);
      setDragOverItemIndex(null);

      // card
      setDragCollectionId(null);
      setDragOverCollectionId(null);
    },
    [setDragItemIndex, setDragOverItemIndex, setDragCollectionId, setDragOverCollectionId],
  );

  // card data

  const handleDragOverCard = useCallback(
    (e: any, item: ICollectionData) => {
      e.preventDefault();
      console.log('drag over card', item.id);
      setDragOverCollectionId(item.id);

      console.log({
        dragItemIndex,
        dragOverItemIndex,
        dragCollectionId,
        dragOverCollectionId,
      });
    },
    [setDragOverCollectionId],
  );

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragEnd,
    handleDragOverCard,
  };
};

export default useDragDrop;
