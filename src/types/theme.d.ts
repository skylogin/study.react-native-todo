import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    itemBackground: string;
    main: string;
    text: string;
    done: string;
  }
}
