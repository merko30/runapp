import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolViewProps, SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";

type IconMapping = Record<
  SymbolViewProps["name"],
  ComponentProps<typeof MaterialIcons>["name"]
>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
  "house.fill": "home",
  "list.bullet.clipboard.fill": "feed",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  "record.circle.fill": "radio-button-checked",
  "person.fill": "person",
  magnifyingglass: "search",
} as IconMapping;

interface IconSymbolProps
  extends Omit<ComponentProps<typeof MaterialIcons>, "name"> {
  name: IconSymbolName;
  weight?: SymbolWeight;
}

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
  ...rest
}: IconSymbolProps) {
  return (
    <MaterialIcons
      name={MAPPING[name]}
      size={size}
      color={color}
      style={style}
      {...rest}
    />
  );
}
