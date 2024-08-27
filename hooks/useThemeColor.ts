import { Colors } from '@/constants/Colors';

export function useThemeColor(
  colorName: & keyof typeof Colors.dark
) {
  return Colors['dark'][colorName];
}
