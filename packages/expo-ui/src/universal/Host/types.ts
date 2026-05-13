import type { ColorSchemeName, ViewProps } from 'react-native';

/**
 * Props for the [`Host`](#host) component.
 */
export interface UniversalHostProps extends ViewProps {
  /**
   * When `true`, the host updates its size in the React Native view tree to match the content's layout from the underlying platform UI toolkit.
   * Can only be set once on mount.
   *
   * @default false
   * @platform android
   * @platform ios
   */
  matchContents?: boolean | { vertical?: boolean; horizontal?: boolean };

  /**
   * The color scheme to apply to descendant native views.
   * `'light'` / `'dark'` force a specific appearance; omitted follows the device setting.
   *
   * @platform android
   * @platform ios
   */
  colorScheme?: ColorSchemeName;

  /**
   * Layout direction for the platform UI content.
   * Defaults to the current locale direction from `I18nManager`.
   *
   * @platform android
   * @platform ios
   */
  layoutDirection?: 'leftToRight' | 'rightToLeft';

  children?: React.ReactNode;
}
