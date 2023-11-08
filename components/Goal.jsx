import { useEffect } from "react";
import {
  VStack,
  Text,
  Progress,
  ProgressFilledTrack,
  useToast,
  ToastTitle,
  Toast,
  ToastDescription,
} from "@gluestack-ui/themed";

const GOAL = 3000;
export default function Goal({ volume }) {
  const toast = useToast();

  useEffect(() => {
    if (volume > 0) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="success" variant="solid">
              <VStack space="xs">
                <ToastTitle> Well done! </ToastTitle>
                <ToastDescription>Keep on Drinking.</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    }
  }, [volume]);

  return (
    <VStack
      justifyContent="space-around"
      h={180}
      alignItems="center"
      py="$8"
      px="$4"
    >
      <Text color="$blue800" fontSize="$xl" fontWeight="500">
        Goal: {GOAL}mL
      </Text>

      <Progress w={300} size="lg" value={(100 * volume) / GOAL} bg='$blue200'>
        <ProgressFilledTrack bg='$blue500' />
      </Progress>
      <Text color="$blue800" fontWeight="500" fontSize="$xl">
        {volume} mL
      </Text>
    </VStack>
  );
}
