import "auth0-js";

declare module "auth0-js" {
  interface AuthorizeOptions {
    screen_hint?: string;
  }
}
