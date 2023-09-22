import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useBottomSheetContext } from "../../lib/context/bottomSheetContext";

const BottomSheet: FunctionComponent = () => {
  const { isOpen, setIsOpen, bottomSheetChildren } = useBottomSheetContext();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [height, setHeight] = useState();
  const snapPoints = useMemo(() => [], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    setIsOpen(index > 0);
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.4}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    [],
  );

  const onViewLayout = (event) => {
    // Extract the height of the view from the event
    const { height } = event.nativeEvent.layout;

    // Set the viewHeight state with the measured height
    setHeight(height);
  };

  useEffect(() => {
    isOpen && handlePresentModalPress();
  }, [isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backgroundStyle={{ backgroundColor: "#18181b" }}
      backdropComponent={renderBackdrop}
      keyboardBlurBehavior={"restore"}
      keyboardBehavior={"interactive"}
      enableDynamicSizing={true}
      contentHeight={height}
    >
      <BottomSheetView onLayout={onViewLayout}>
        {bottomSheetChildren}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheet;
