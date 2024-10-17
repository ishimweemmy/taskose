import { ComponentProps } from "react";
import * as VectorIcons from "@expo/vector-icons";

type IconFamily = keyof typeof VectorIcons;

type IconProps<T extends IconFamily> = ComponentProps<(typeof VectorIcons)[T]>;

type TabBarIconProps<T extends IconFamily> = {
  family: T;
  name: IconProps<T>["name"];
} & Omit<IconProps<T>, "name">;

export function TabBarIcon<T extends IconFamily>({
  family,
  style,
  name,
  size = 28,
  ...rest
}: TabBarIconProps<T>) {
  const IconComponent = VectorIcons[family];
  return (
    <IconComponent
      name={name}
      size={size}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}
