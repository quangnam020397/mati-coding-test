import { useCallback, useState } from 'react';
import { ICollectionData, IDataWeekly, IItemData } from '../interfaces';

const dataDragDrop: {
  dragItemIndex: null | number;
  dragOverItemIndex: null | number;
  dragCollectionId: null | string;
  dragOverCollectionId: null | string;
} = {
  dragItemIndex: null,
  dragOverItemIndex: null,
  dragCollectionId: null,
  dragOverCollectionId: null,
};

const useDragDrop = (setData: React.Dispatch<React.SetStateAction<IDataWeekly[]>>) => {

  const handleDragStart = useCallback((index: number, collectionId: string) => {
    dataDragDrop.dragItemIndex = index;
    dataDragDrop.dragCollectionId = collectionId;
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(() => {
    if (!setData) {
      return;
    }

    if (
      dataDragDrop.dragItemIndex === null ||
      dataDragDrop.dragOverItemIndex === null ||
      dataDragDrop.dragCollectionId === null ||
      dataDragDrop.dragOverCollectionId === null
    ) {
      return;
    }

    if (
      dataDragDrop.dragItemIndex === dataDragDrop.dragOverItemIndex &&
      dataDragDrop.dragCollectionId === dataDragDrop.dragOverCollectionId
    ) {
      return;
    } else if (dataDragDrop.dragCollectionId === dataDragDrop.dragOverCollectionId) {
      setData((preData: IDataWeekly[]) => {
        const _data = [...preData];
        // find collection
        const { collection } = findCollectionById(_data, dataDragDrop.dragCollectionId!);

        if (!collection) {
          return _data;
        }

        collection.items = reSortDataSameCollection(collection.items);

        return _data;
      });
    } else {
      setData((prevData: any) => {
        const _data = [...prevData];

        // find collection by dragCollectionId
        const { collection: sourceCollection } = findCollectionById(_data, dataDragDrop.dragCollectionId!);

        // find collection by dragOverCollectionId
        const { collection: targetCollection } = findCollectionById(_data, dataDragDrop.dragOverCollectionId!);

        if (!sourceCollection || !targetCollection) {
          return _data;
        }

        // remove item from source collection by dragItemIndex
        const dragItem = sourceCollection.items[dataDragDrop.dragItemIndex!];

        if (!dragItem) {
          return _data;
        }

        sourceCollection.items.splice(dataDragDrop.dragItemIndex!, 1);

        // add item to target collection by dragOverItemIndex
        targetCollection.items.splice(dataDragDrop.dragOverItemIndex!, 0, dragItem);

        return _data;
      });
    }
  }, []);

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

  const reSortDataSameCollection = useCallback((prevData: any) => {
    const data = [...prevData];
    if (dataDragDrop.dragItemIndex !== null && dataDragDrop.dragOverItemIndex !== null) {
      const dragItem = data[dataDragDrop.dragItemIndex];
      data.splice(dataDragDrop.dragItemIndex!, 1);
      data.splice(dataDragDrop.dragOverItemIndex!, 0, dragItem);
    }

    return data;
  }, []);

  const handleDragEnter = useCallback((index: number) => {
    dataDragDrop.dragOverItemIndex = index;
  }, []);

  const handleDragLeave = useCallback((event: any) => {
    dataDragDrop.dragOverItemIndex = null;
  }, []);

  const handleDragEnd = useCallback((event: any) => {
    dataDragDrop.dragItemIndex = null;
    dataDragDrop.dragOverItemIndex = null;

    // card
    dataDragDrop.dragCollectionId = null;
    dataDragDrop.dragOverCollectionId = null;
  }, []);

  // card data

  const handleDragOverCard = useCallback((e: any, item: ICollectionData) => {
    e.preventDefault();

    dataDragDrop.dragOverCollectionId = item.id;
  }, []);

  const handleDropToCard = useCallback((e: any, collection: ICollectionData) => {
    e.preventDefault();

    if (!setData) {
      return;
    }

    if (!collection.items.length) {
      if (
        dataDragDrop.dragItemIndex === null ||
        dataDragDrop.dragCollectionId === null ||
        dataDragDrop.dragOverCollectionId === null
      ) {
        return;
      }
      setData((prevData: any) => {
        const _data = [...prevData];

        // find collection by dragCollectionId
        const { collection: sourceCollection } = findCollectionById(_data, dataDragDrop.dragCollectionId!);

        // find collection by dragOverCollectionId
        const { collection: targetCollection } = findCollectionById(_data, dataDragDrop.dragOverCollectionId!);

        if (!sourceCollection || !targetCollection) {
          return _data;
        }

        // remove item from source collection by dragItemIndex
        const dragItem = sourceCollection.items[dataDragDrop.dragItemIndex!];

        if (!dragItem) {
          return _data;
        }

        sourceCollection.items.splice(dataDragDrop.dragItemIndex!, 1);

        // add item to target collection by dragOverItemIndex
        targetCollection.items.push(dragItem);

        return _data;
      });
    }
  }, []);

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragEnd,
    handleDragOverCard,
    handleDropToCard,

  };
};

export default useDragDrop;
