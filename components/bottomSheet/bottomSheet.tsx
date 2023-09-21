import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useBottomSheetContext } from "../../lib/context/bottomSheetContext";
import { Text, View } from "react-native";

const BottomSheet: FunctionComponent = () => {
  const { isOpen, setIsOpen, bottomSheetChildren } = useBottomSheetContext();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["50%"], []);

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
        opacity={0.5}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    [],
  );

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
      backgroundStyle={{ backgroundColor: "#27272a" }}
      backdropComponent={renderBackdrop}
    >
      <View className={`p-4`}>{bottomSheetChildren}</View>
    </BottomSheetModal>
  );
};

export default BottomSheet;
