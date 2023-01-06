import type { ConnectDropTarget } from 'react-dnd';
import { useDrop } from 'react-dnd';
import type { PickAnimated, SpringValues } from 'react-spring';
import { useSpring } from 'react-spring';
import type { Layout } from '@editor/builder/types/layout';
import { Drag } from '@editor/builder/types/layout';
import { useAppDispatch } from '@editor/store';
import { addNewField } from '@editor/store/thunks/fields';
import type { FieldType } from '@ff-client/types/properties';

type LayoutDropHook = {
  dropRef: ConnectDropTarget;
  placeholderAnimation: SpringValues<
    PickAnimated<{ opacity: number; transform: string }>
  >;
};

type CollectProps = {
  isOver: boolean;
};

export const useLayoutDrop = (layout: Layout): LayoutDropHook => {
  const dispatch = useAppDispatch();

  const [{ isOver }, dropRef] = useDrop<FieldType, void, CollectProps>(
    () => ({
      accept: Drag.FieldType,
      collect: (monitor) => ({ isOver: monitor.isOver({ shallow: true }) }),
      canDrop: (_, monitor) => monitor.isOver({ shallow: true }),
      drop: (item) => {
        dispatch(addNewField(item));
      },
    }),
    [layout]
  );

  const placeholderAnimation = useSpring({
    to: {
      opacity: isOver ? 1 : 0,
      transform: isOver ? `scaleY(1)` : `scaleY(0)`,
    },
    config: {
      tension: 300,
    },
  });

  return {
    dropRef,
    placeholderAnimation,
  };
};
